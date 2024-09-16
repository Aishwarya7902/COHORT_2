import { Client } from 'pg';
require('dotenv').config();
const dbUrl = process.env.DATABASE_URL;

export async function getClient() {
    const client = new Client(dbUrl);
    await client.connect();
    return client;
}