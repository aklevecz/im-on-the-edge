import type { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function (req: NextRequest) {
  // @ts-ignore
  return Response.json({ name: "John Doe" });
}
