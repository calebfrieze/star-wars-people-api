import { Request, Response } from "express";

const getPeople = (req: Request, res: Response) => {
  res.status(200).json({
    testing: 'true'
  });
};

export default getPeople;
