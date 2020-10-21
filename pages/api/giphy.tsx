import { NextApiRequest, NextApiResponse } from "next";

const apiKey = process.env.GIPHY_API_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const giphy = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${req.query.search}&api_key=${apiKey}&limit=100`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  res.status(200).json(await giphy.json());
}
