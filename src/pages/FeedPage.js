import React, {useEffect, useState} from 'react';
import DataApi from '../api/DataApi';
import {Post} from '../components/Post';

export const FeedPage = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const data = await DataApi.getFeed();
            setPosts(data);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    if (error) {
        return (
            <div>Error while loading feed</div>
        );
    }
    if (loading) {
        return (
            <div>Feed is loading...</div>
        );
    }
    return (
        <div>
            {posts.length && posts.map(post => {
                return (
                    <Post
                        key={post.id}
                        post={post}
                    />
                )
            })}
        </div>
    )
}
