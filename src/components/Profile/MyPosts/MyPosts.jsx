import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = ({updateNewPostText, addPost, posts, newPostText}) => {
    let newPostElement = React.createRef()

    let postsElements = posts.map((p, index) => <Post message={p.message} likesCount={p.likesCount} key={index}/>);

    let onAddPostText = () => {
        addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={newPostText} onChange={onPostChange} />
                </div>
                <div>
                    <button onClick={onAddPostText}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
