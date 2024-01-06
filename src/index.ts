import { Elysia } from "elysia";
import { createClient} from "@libsql/client"


async function coal(value = "this api end point works but was not supplied with a text input") {
  const client = createClient({
    url: "libsql://turbotestapi-aarushaggarwal-theone.turso.io", //your libsql string for turso here
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDI0LTAxLTA1VDE2OjQ3OjMzLjM0NjQwMTg1MVoiLCJpZCI6IjBiNzE0YjM2LWFiZWEtMTFlZS04NDljLWRlNTQ3NWY0NjQ5ZiJ9.miTasA6-cEWpkxpX1qOGtTar4yRC82z1e-fIPheo21cr6olOkhWIN6UOmWjmJjGC4WVLSGQ8O5Fnrc5OSEtGAg"
    // your auth token here see https://docs.turso.tech/reference/turso-cli for more information
    // can use turbo db list to get the url and then follow instructions to get an authToke
    // sdk information can be found here https://docs.turso.tech/libsql/client-access/javascript-typescript-sdk
    // also yes I WROTE THESE COMMENTS it was not gpt or pre-written when the project was initiated
    // Note: by the time you see this program my credentials will be invalid anyways
    // so don't try to use them to run your own server or cost me money
  });
  const rs = await client.execute({
    sql: "select * from blog_posts where category = 'Database'",
    args: {},
  });

  return JSON.stringify({data: rs.rows});
}
const app = new Elysia()
  .get("/", () => "<h1>Hello Elysia</h1>")
  .get("/coal", () => coal())
  .get("/coal/:value", (req) => fetch("localhost:3000/coal/"))
  .listen(3000);

