import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Rutas importadas
import productsRoutes from './routes/products';
import newsRoutes from './routes/news'; 

// Usar rutas
app.use('/api/news', newsRoutes);
app.use('/api/products', productsRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
