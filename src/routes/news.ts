import { Router, Request, Response } from "express";
import { pool } from '../db';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM "News"');
        res.json(result.rows);
    } catch (err) {
        console.log("Error al consultar", (err as Error).message);
        res.status(500).send("Error al obtener los productos");
    }
});

export default router;