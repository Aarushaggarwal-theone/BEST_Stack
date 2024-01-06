import { Elysia } from "elysia";
import { createClient} from "@libsql/client"


async function coal(value = "this api end point works but was not supplied with a text input") {
  const client = createClient({
    url: "libsql://turbotestapi-aarushaggarwal-theone.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDI0LTAxLTA1VDE2OjQ3OjMzLjM0NjQwMTg1MVoiLCJpZCI6IjBiNzE0YjM2LWFiZWEtMTFlZS04NDljLWRlNTQ3NWY0NjQ5ZiJ9.miTasA6-cEWpkxpX1qOGtTar4yRC82z1e-fIPheo21cr6olOkhWIN6UOmWjmJjGC4WVLSGQ8O5Fnrc5OSEtGAg"
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

