import "./PlaylistLink.css"
import { useContext } from "react"
import { Link } from "react-router-dom"
import HomeContext from "../../Context/HomeContext"

export default function PlaylistLink({ playlistName }) {
    const { getPagePlaylist, deletePlaylist } = useContext(HomeContext)

    return (
        <div onClick={() => getPagePlaylist(playlistName, true)} className="playlist-link">
            <Link className="link-div" to={`/Home/${playlistName}`}>
                <div className="playlist-div">
                    <label className="delete-playlist" onClick={() => deletePlaylist(playlistName)}>🗑</label>{playlistName}
                </div>
            </Link>
        </div>
    )
}