import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
 
export async function CreateConection(table) {

    dotenv.config();
    const SECRET=process.env.SECRET_KEY
    try {
        const uri = SECRET

        const client = new MongoClient(uri);

        await client.connect();

        const db = client.db('playRiddles');

        const collection = db.collection(table);

        return { client, collection };

    } catch (err) {
        
        console.error(" MongoDB connection error:", err);
        throw err;
    }
}

