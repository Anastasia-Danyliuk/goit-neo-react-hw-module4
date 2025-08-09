import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = typeof import.meta !== 'undefined' && import.meta.env ? 
                  import.meta.env.VITE_UNSPLASH_ACCESS_KEY : 
                  'JnuGwMUG3J-cbITkjKIBZ2xdKvVC5ZrDGyShmTVFBn8';
const ACCESS_SECRET = typeof import.meta !== 'undefined' && import.meta.env ? 
                     import.meta.env.VITE_UNSPLASH_ACCESS_SECRET : 
                     'FbCZ7dzvoEHRpb8MlBkDIbSc_w2aAzVN5ZQsasRFcMM';

const unsplashApi = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `Client-ID ${ACCESS_KEY}`,
        'Accept-Version': 'v1'
    }
});

export function fetchImages(query, page = 1) {
    return unsplashApi.get('/search/photos', {
        params: { 
            query, 
            page, 
            per_page: 12 
        }
    });
}
