import { abc } from "https://deno.land/x/abc/mod.ts";

const app = abc();

app
  .get("/", c => {
    return "Welcome to Deno Starter!";
  })
  .start({ port: 8080 });
