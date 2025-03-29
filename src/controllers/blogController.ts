class BlogController {
    private posts: { id: number; title: string; content: string; author: string }[] = [];
    private nextId: number = 1;

    createPost(req: any, res: any) {
        const { title, content, author } = req.body;
        const newPost = { id: this.nextId++, title, content, author };
        this.posts.push(newPost);
        res.status(201).json(newPost);
    }

    getPosts(req: any, res: any) {
        res.status(200).json(this.posts);
    }

    deletePost(req: any, res: any) {
        const { id } = req.params;
        this.posts = this.posts.filter(post => post.id !== parseInt(id));
        res.status(204).send();
    }
}

export default BlogController;