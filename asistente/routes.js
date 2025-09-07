
import express from 'express';
import { 
    handleInsertAsistenteRequest, 
    handleGetAsistentesRequest, 
    handleGetAsistentesByEventoIdRequest 
} from './controller.js';

const router = express.Router();


router.post('/asistente', async (req, res) => {
    try {
        const result = await handleInsertAsistenteRequest(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/asistentes', async (req, res) => {
    try {
        const result = await handleGetAsistentesRequest();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/asistentes/evento/:id', async (req, res) => {
    try {
        const result = await handleGetAsistentesByEventoIdRequest(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;

