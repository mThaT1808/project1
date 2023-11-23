import React from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";


const PostForm = ({create}) => {
    const [post, setPost] = React.useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <div>
            <form>
            <MyInput
                value = {post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text" 
                placeholder="Название РЫБА"
                style={{heigth: "150px"}}
            />
            <MyInput 
                value = {post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text" 
                placeholder="Описание РЫБА"
            />
            <MyButton onClick={addNewPost} style={{width: "100%"}}>Добавить РЫБА</MyButton>
            </form>
        </div>
    );
};

export default PostForm;