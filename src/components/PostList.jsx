import React from "react";
import PostContainer from "./postContainer";


const PostList = ({posts, remove}) => {

    return(
        <div>
            {posts.map(post =>
                <PostContainer post = {post} key = {post.id} remove = {remove}/>
            )}
        </div>
    );
};

 export default PostList;