import axios from 'axios'

const BASE_URL = "https://api.themoviedb.org/3/"


const Client = axios.create({
    baseURL: BASE_URL
});

Client.interceptors.request.use((config) => {
    console.log("interceptor runninng")
    config.params = config.params || {};
    config.params['api_key'] = process.env.API_KEY;
    return config;
});

export const searchMovie = (search_text)=>{
    return Client.get("/search/movie/",{
        params :{
            query:search_text,
            language: "en-US"
        }
    })
}

export const getMovieGenres = ()=>{
    return [
        {
            "id": 28,
            "title": "Action"
        },
        {
            "id": 12,
            "title": "Adventure"
        },
        {
            "id": 16,
            "title": "Animation"
        },
        {
            "id": 35,
            "title": "Comedy"
        },
        {
            "id": 99,
            "title": "Documentary"
        },
        {
            "id": 18,
            "title": "Drama"
        },
        {
            "id": 14,
            "title": "Fantasy"
        },
        {
            "id": 27,
            "title": "Horror"
        },
        {
            "id": 10749,
            "title": "Romance"
        },
        {
            "id": 878,
            "title": "Science Fiction"
        },
        {
            "id": 53,
            "title": "Thriller"
        },
        {
            "id": 37,
            "title": "Western"
        }
    ]
}

export const getMoviesByGenres = (id)=>{
    return Client.get("/search/movie/",{
        params :{
            query:search_text,
            language: "en-US"
        }
    })
}