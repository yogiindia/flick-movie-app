import { writable } from 'svelte/store';

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


export default {
    subscribe : store.subscribe,
    updateStore,
};

