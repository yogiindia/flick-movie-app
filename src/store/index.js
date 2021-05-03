import { writable } from 'svelte/store';
import { getMoviesByGenres } from '../helper/request';

let category = 1;
let genre = 28;
let items = [];
let loading = false;
let page = 1;
let total_items = -1

const store = writable({category,items,genre,loading,page,total_items});
const updateStore = ({type,payload}) => {
    switch(type){
        case 'category':{
            store.update((data)=>({...data,category:payload,page:1}))
            return;
        }
        case 'genre':{
            store.update((data)=>({...data,genre:payload,page:1}))
            return;
        }
        case 'page': {
            console.log("Page :",payload)
            store.update((data)=>({...data,page:payload}))
            return;
        }
    }
}

const fetchData = async (category,genre,page=1) => {
    store.update((data)=>({...data,loading:true}))
    const response = await getMoviesByGenres(genre,page);
    console.log(response.data)
    if(response?.data?.results){
        store.update((data)=>({
            ...data,
            items:response.data.results,
            loading:false,
            total_items:response.data.total_results
        }))
    }
}



export default {
    subscribe : store.subscribe,
    updateStore,
    fetchData,
};

