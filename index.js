import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './common/db.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import asistenteRoutes from './asistente/routes.js';

app.use('/api', asistenteRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'API REST Express funcionando!' });
});

async function startServer() {
    try {
        await connectToDatabase();
        console.log('Conectado a MongoDB Atlas');
        
        app.listen(PORT, () => {
            console.log(`Servidor Express ejecutándose en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error iniciando servidor:', error);
    }
}

startServer();