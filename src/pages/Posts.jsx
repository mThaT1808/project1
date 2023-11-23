import React, { useState, useEffect} from "react";
import PostList from "../components/PostList";
import "../styles/App.css"
import PostForm from "../components/PostForm";
import MySelect from "../components/UI/select/MySelect";
import axios from "axios";



function Posts() {

  useEffect(
    () => {
      fetchPosts()
    },
    []
  )

  const [posts, setPosts] = useState([ ])

  const [selectedSort, setSelectedSort] = useState(
    ''
  )

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id!== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    console.log(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: "15px 0"}} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue={"Сортировка РЫБОВ"}
          options={[
            {value: 'title', name: 'По имени РЫБСКОМУ'},
            {value: 'body', name: 'По описанию РЫБСКОМУ'},
          ]}
        />
      </div>
      <h1 className="Head">ПОКАЗ РЫБОВ</h1>
      {posts.length !== 0
      ? <PostList posts={posts} remove={removePost}/>
      : <div>
          РЫБОВ не нашлось :(
        </div>
      }
      
    </div>
  )
}

export default Posts;
