import { Request, Response } from "express";
import request from "request-promise";
import createPerson from "../services/createPerson.service";

const SWPeopleApiUrl = "https://swapi.co/api/people";

async function* getAll({ page_limit }: { page_limit?: number }) {
  let keepGoing = !page_limit ? true : false;
  let uri: string = SWPeopleApiUrl;
  let pageCount = 1;

  while ((page_limit && pageCount <= page_limit) || keepGoing) {
    const results = await request({
      uri,
      json: true
    });

    if (results.next === null) {
      keepGoing = false;
    }

    uri = results.next;

    yield results;

    pageCount++;
  }
}

const refreshPeople = async (req: Request, res: Response) => {
  const { page_limit } = req.query;

  const people: any[] = [];

  try {
    for await (const results of getAll({ page_limit })) {
      people.push(...results.results);
    };
  
    people.forEach(createPerson);
  } catch (e) {
    return res.status(500).json({
      error: "Something went wrong"
    })
  }

  return res.status(200).json({
    refreshed: "ok refreshed"
  });
}

export default refreshPeople;
