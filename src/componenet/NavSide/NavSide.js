import "./NavSide.css"
import { useContext } from "react"
import { Link } from "react-router-dom"
import HomeContext from "../../Context/HomeContext"
import { useEffect } from "react"

export default function NavSide() {
    const { playlistsNames, getPagePlaylist } = useContext(HomeContext)


    return (
        <div className="nav-side">
            {playlistsNames.map((playlistName) => {
                return (<div onClick={() => getPagePlaylist(playlistName)} className="playlist-link">
                    <Link to={`/Home/${playlistName}`}>{playlistName}</Link>
                </div>)
            })}
        </div>
    )
}