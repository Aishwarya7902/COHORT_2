import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://test_owner:Q8tNjnHB4sCZ@ep-flat-forest-a5i7lffx.us-east-2.aws.neon.tech/test?sslmode=require");
    await client.connect();
    return client;
}