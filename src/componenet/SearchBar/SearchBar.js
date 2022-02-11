import { useRef } from "react";
import api from "../../Controller/axiosReq";
import "./SearchBar.css"
export default function SearchBar({ setSongsRes, setShowRes }) {
    const searchBar = useRef(null)

    const searchSong = async (text) => {
        const search = await api.get(`http://localhost:3007/api/search/${text}`)
        console.log(search.data);
        setSongsRes(search.data);
        setShowRes(true);
        // setCardShow(true)
        // setSongChoise(data)
    }

    return (
        <div className='search-bar-container'>
            <div className="search-input-box">
                <img onClick={() => searchSong(searchBar.current.value)} className="searchIcon" src="Search@2x.svg" alt="search" />
                <input
                    ref={searchBar}
                    // onChange={(event) => { filterByShearch(event.target.value) }}
                    type={"text"}
                    className="searchBox"
                    placeholder="...מה תרצה לשמוע היום"
                />
            </div>
        </div>
    )
}