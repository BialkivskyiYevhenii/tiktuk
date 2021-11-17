import axios from 'axios';

const options = {
    headers: {
        'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
        'x-rapidapi-key': '734df0a96bmsh06fb7b7bb028531p1e6e10jsnd5824bb8ad0d'
    }
};

class DataApi {

    getFeed() {
        const url = 'https://tiktok33.p.rapidapi.com/user/feed/dave.xp';
        return axios.get(url, options).then(resp => resp.data);
    }

    getUser(id) {
        const url = `https://tiktok33.p.rapidapi.com/user/info/${id}`;
        return axios.get(url, options).then(resp => resp.data);
    };
}

export default new DataApi();

