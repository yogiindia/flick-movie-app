
import {faTv,faFilm, faPlayCircle, faTicketAlt, faClock} from '@fortawesome/free-solid-svg-icons'
import {Action,Adventure,Animation,Comedy,Romance,SciFi,Thriller,Western,Horror,Fantasy,Drama,Documentary} from '../components/SvgIcons'


export const categories = [
    {id:1,title : "movies",icon:faFilm},
    {id:2,title: "tv series",icon:faTv},
    {id:3,title: "new arrivals",icon:faTicketAlt},
    {id:4,title : "playlists",icon: faPlayCircle},
    {id:5,title:"coming soon",icon:faClock}
]


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