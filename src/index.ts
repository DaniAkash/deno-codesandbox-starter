/**
 * CodeSandbox Template for your Deno Projects
 * Updated to support Deno 1.0.0
 *
 * Reach out to me @dani_akash_ on Twitter if you run into any issues ✌️
 */

import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

const s = serve({ port: 8080 });

console.log("http://localhost:8080/");

for await (const req of s) {
  req.respond({ body: "Welcome to Deno!\n" });
}
