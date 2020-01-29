import { Request, Response } from "express";

const refreshPeople = (req: Request, res: Response) => {
  res.status(200).json({
    refreshed: "ok refreshed"
  });
}

export default refreshPeople;
