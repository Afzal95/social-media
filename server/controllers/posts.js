import Post from "../models/postModel.js"

export const getPosts = async (req,res)=>{
    try {
        const posts = await Post.find();
        res.status(200).json(posts)        
    } catch (error) {
        res.status(404).json({message:error.message});
    }

}

export const createPosts = async (req,res)=>{
    const postBody = req.body;
    const newPost = new Post(postBody);
    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.status(400).json({message:error.message});
    }

}