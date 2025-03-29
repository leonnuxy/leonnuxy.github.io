// filepath: /blog-project/blog-project/src/routes/blogRoutes.ts
import { Router } from 'express';
import BlogController from '../controllers/blogController';

const router = Router();
const blogController = new BlogController();

router.post('/posts', blogController.createPost.bind(blogController));
router.get('/posts', blogController.getPosts.bind(blogController));
router.delete('/posts/:id', blogController.deletePost.bind(blogController));

export default function setBlogRoutes(app: any) {
    app.use('/api', router);
}