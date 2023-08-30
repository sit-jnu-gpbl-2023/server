import { Hono } from "https://deno.land/x/hono/mod.ts";

const app = new Hono();

const text = await Deno.readTextFile("main.js");
const main = eval(text);

app.all("*", async (c) => {
  console.log(c.req.url);
  const url = new URL(c.req.url);
  const path = url.pathname;
  await main(path, url.searchParams);
  return new Response("");
});
app.fetch

Deno.serve({ hostname: "0.0.0.0", port: 8000 }, app.fetch);
