import React from 'react';
import {Link} from "react-router-dom";

export const Post = ({post}) => {
    const {author, desc} = post;
    const {nickname, id} = author;
    return (
        <div className='post'>
            {desc}
            <Link to={`/profile/${id}`}>{nickname}</Link>
        </div>
    )
}