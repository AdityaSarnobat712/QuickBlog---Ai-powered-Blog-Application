import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

await connectDB();
app.use(cors());
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('Welcome to the QuickBlog server!');
})
app.use('/api/admin',adminRouter)
app.use('/api/blog',blogRouter)


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

export default app;