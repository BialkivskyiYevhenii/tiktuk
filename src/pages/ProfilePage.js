import React, {useEffect, useState} from 'react';
import DataApi from '../api/DataApi';
import {useParams} from 'react-router-dom';
import _ from 'lodash';

export const ProfilePage = () => {
    const {id} = useParams();
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {stats, user} = userData;
    const avatarThumb = _.get(user, 'avatarThumb', '');
    const nickname = _.get(user, 'nickname', '');

    const fetchUserInfo = async () => {
        setLoading(true);
        try {
            const data = await DataApi.getUser(id);
            setUserData(data);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);

    if (error) {
        return (
            <div>Error while loading user data</div>
        );
    }
    if (loading) {
        return (
            <div>User data is loading...</div>
        );
    }

    if (_.isEmpty(userData)) {
        return <div>No user data</div>
    }

    return (
        <div className='user'>
            <div className='user-header'>
                <img src={avatarThumb} alt='img' />
                {nickname}
            </div>
            Follower count: {stats.followerCount}
        </div>
    )
}
