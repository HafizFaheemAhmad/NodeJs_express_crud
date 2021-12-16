const express = require("express");
const router = express.Router();
const Post = require("../models/Posts");

// For show post

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// For show post specfic
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// For delete post

router.delete("/:postId", async (req, res) => {
  try {
    const removePost = await Post.remove({ _id: req.params.postId });
    res.json(removePost);
  } catch (err) {
    res.json({ message: err });
  }
});

// for save post

router.post("/", async (req, res) => {
  //console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});
// post.save()
// .then(data=>{
//     res.json(data);
// })
// .catch(err=>{
//     res.json({message:err});
// });

// for update post

router.patch("/:postId", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title, description: req.body.description } }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;

// router.get('/',(req,res)=>{
//     res.send('we are posts');
// });

// router.get('/specific',(req,res)=>{
//     res.send('we are s  pecific');
// });
