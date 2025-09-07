
import { getDatabase } from '../common/db.js';

function getCollection() {
    const db = getDatabase();
    return db.collection('asistentes');
}

export async function handleInsertAsistenteRequest(datosAsistente) {
    try {
        const collection = getCollection(); 
        const result = await collection.insertOne(datosAsistente);
        return { success: true, insertedId: result.insertedId };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export async function handleGetAsistentesRequest() {
    try {
        const collection = getCollection(); 
        const asistentes = await collection.find({}).toArray();
        return { success: true, data: asistentes };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export async function handleGetAsistentesByEventoIdRequest(idEvento) {
    try {
        const collection = getCollection();
        const asistentes = await collection.find({ idEvento }).toArray();
        return { success: true, data: asistentes };
    } catch (error) {
        return { success: false, error: error.message };
    }
}
