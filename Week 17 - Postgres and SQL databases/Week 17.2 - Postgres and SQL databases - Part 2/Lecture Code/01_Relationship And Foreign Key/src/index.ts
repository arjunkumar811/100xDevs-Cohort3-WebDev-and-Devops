import { Client } from 'pg';

import express, { Express } from 'express'; 

const app: Express = express(); 


app.use(express.json());

const pgClient = new Client("postgresql://neondb_owner:nzUl5o0eQBCr@ep-sweet-mud-a52cm8kt.us-east-2.aws.neon.tech/neondb?sslmode=require");
pgClient.connect();

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const city = req.body.city;
  const country = req.body.country;
  const street = req.body.street;
  const pincode = req.body.pincode;

  try {
    const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`;

    const insertResponse = await pgClient.query(insertQuery, [username, email, password]);

    const userId = insertResponse.rows[0].id;

    const addressQuery = `INSERT INTO addresses (city, country, street, pincode, userId) VALUES ($1, $2, $3, $4, $5);`;

    const addressResponse = await pgClient.query(addressQuery, [city, country, street, pincode, userId]);

    res.json({
      message: "You have signed up successfully",
    });

  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({
      message: "Error while signing up",
    });
  }
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});