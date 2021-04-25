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
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
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