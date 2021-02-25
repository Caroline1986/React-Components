import axios from 'axios';

axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ecFozKzZYjxDai1FfYoo7LnWnjVFttiSeTCugb7MLjg'
    }
});