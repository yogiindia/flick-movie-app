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



export const getMoviesByGenres = (id,page=1)=>{
    return Client.get("/discover/movie/",{
        params :{
            with_genres:id,            
            language: "en-US",
            page
        }
    })
}