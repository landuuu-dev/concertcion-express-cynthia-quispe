import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://admconcertcion:b8vsJaXfPEaV6oHd@concertcion-cl0.bcauwcp.mongodb.net/concertcion?retryWrites=true&w=majority&appName=concertcion-cl0";

const client = new MongoClient(uri);

let database;

export async function connectToDatabase() {
    try {
        await client.connect(); 
        database = client.db("concertcion");
        console.log("✅ Conectado a MongoDB Atlas");
        return database;
    } catch (error) { 
        console.error("❌ Error conectando a MongoDB:", error);
        throw error;
    }
}


export function getDatabase() {
    if (!database) {
        throw new Error("Database not connected. Call connectToDatabase first.");
    }
    return database;
}


export async function closeDatabase() {
    await client.close();
}

