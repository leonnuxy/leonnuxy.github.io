import express from 'express';
import setBlogRoutes from './routes/blogRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
setBlogRoutes(app);

app.post('/api/posts', (req, res) => {
    const { title, content, author } = req.body;
    const newPost = { id: 1, title, content, author };
    res.status(201).json(newPost);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});