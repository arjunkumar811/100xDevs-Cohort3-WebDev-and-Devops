import { Client } from "pg";

import express,  { Express } from "express";

const app = express();

app.use(express.json());

const pgClient = new Client("postgresql://neondb_owner:nzUl5o0eQBCr@ep-sweet-mud-a52cm8kt.us-east-2.aws.neon.tech/neondb?sslmode=require");
pgClient.connect();

// Explanation : We are working with two tables:
// 1. `users` table: Stores user information like `username`, `email` and `password`,
// 2. `addresses` table: Stores address information (e.g, `city`, `country`, `streer`, `pincode` ) and links it to the `user` table througt the `user_id` foreign key.
//
// Problem: If the backend crashes after inserting into the `users` table but before inserting into the `addresses` table, the data in the `users` table will remain, but no address will be linked. 
// This inconsistency can lead to data integrity issues.
//
// Solution: Use a transaction to ensure both operations (inserting into `users` and `addresses`) succeed or fail as a single unit.

app.post("/signup", async (req, res) => {
    const { username, password, email, city, country, street, pincode } = req.body;

    try {
        // Begin a transaction
        await pgClient.query("BEGIN");

        // Insert user data into the "users" table and get the user ID
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`;
        const insertResponse = await pgClient.query(insertQuery, [username, email, password]);
        const userId = insertResponse.rows[0].id;

        // Insert address data into the "addresses" table with the user ID
        const addressQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`;
        await pgClient.query(addressQuery, [city, country, street, pincode, userId]);

        // Commit the transaction if both operations are successful
        await pgClient.query("COMMIT");

        // Send success response
        res.json({ message: "You have signed up successfully" });
    } catch (error) {
        // Send error response
        console.log(error);
        res.status(500).json({
            message: "Error while signing up",
        });
    }
});

// Starting the Express server on port 3000
app.listen(3000);