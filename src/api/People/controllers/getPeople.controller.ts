import { Request, Response } from "express";

const getPeople = (req: Request, res: Response) => {
  return res.status(200).json({
    testing: 'true'
  });
};

export default getPeople;
