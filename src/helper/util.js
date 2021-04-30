
import {faTv,faFilm, faPlayCircle, faTicketAlt, faClock} from '@fortawesome/free-solid-svg-icons'
import {Action,Adventure,Animation,Comedy,Romance,SciFi,Thriller,Western,Horror,Fantasy,Drama,Documentary} from '../components/SvgIcons'


export const categories = [
    {id:1,title : "movies",icon:faFilm},
    {id:2,title: "tv series",icon:faTv},
    {id:3,title: "new arrivals",icon:faTicketAlt},
    {id:4,title : "playlists",icon: faPlayCircle},
    {id:5,title:"coming soon",icon:faClock}
]

export const getCategoryById = (id) => {
    return categories.find((category)=>{
        return category.id === id;
    })
}


export function getSvgIcon(title) {
    switch (title.toLowerCase()) {
        case "action": {
            return Action
        }
        case "western": {
            return Western
        }
        case "comedy": {
            return Comedy
        }
        case "drama": {
            return Drama
        }
        case "documentary": {
            return Documentary
        }
        case "fantasy": {
            return Fantasy
        }
        case "adventure": {
            return Adventure
        }
        case "animation": {
            return Animation
        }
        case "romance": {
            return Romance
        }
        case "horror": {
            return Horror
        }
        case "thriller": {
            return Thriller
        }
        case "science fiction": {
            return SciFi
        }
    }
}



export const getGenreById = (id) => {
    const genres = getMovieGenres();
    return genres.find((genre)=>{
        return genre.id === id;
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