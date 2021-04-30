import { writable } from 'svelte/store';
import { getMoviesByGenres } from '../helper/request';

let category = 1;
let genre = 28;
let items = [];
let loading = false;

const store = writable({category,items,genre,loading});
const updateStore = ({type,payload}) => {
    switch(type){
        case 'category':{
            store.update((data)=>({...data,category:payload}))
            return;
        }
        case 'genre':{
            store.update((data)=>({...data,genre:payload}))
            return;
        }
    }
}

const fetchData = async (category,genre) => {
    store.update((data)=>({...data,loading:true}))
    const response = await getMoviesByGenres(genre);
    if(response?.data?.results){
        store.update((data)=>({...data,items:response.data.results,loading:false}))
    }
}



export default {
    subscribe : store.subscribe,
    updateStore,
    fetchData,
};

