import "./NavSide.css"
import { useContext } from "react"
import HomeContext from "../../Context/HomeContext"
import PlaylistLink from "../PlaylistLink/PlaylistLink"
import { useParams } from "react-router-dom"

export default function NavSide() {
    const { playlistsNames } = useContext(HomeContext)


    return (
        <div className="nav-side">
            {playlistsNames.map((playlistName) => {
                return (<PlaylistLink key={playlistName} playlistName={playlistName} />)
            })}
        </div>
    )
}