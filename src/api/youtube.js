import axios from 'axios';

const KEY = 'AIzaSyCQ1wqrgZ6IXNggF75jqwd9mYwcqNfxbN4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});