import { Client } from "pg";

const pgClient = new Client("postgresql://neondb_owner:nzUl5o0eQBCr@ep-sweet-mud-a52cm8kt.us-east-2.aws.neon.tech/neondb?sslmode=require")

// const pgClient2 = new Client({
//     user: "neondb_owner",
//     password: "nzUl5o0eQBCr",
//     port: 5432,
//     host: "ep-sweet-mud-a52cm8kt.us-east-2.aws.neon.tech",
//     database: "neondb",
//     ssl: {
//         rejectUnauthorized: false, 
//       },
// })


async function main(){ 
await pgClient.connect();
const response = await pgClient.query("SELECT * FROM users")
console.log(response.rows);


}

main()