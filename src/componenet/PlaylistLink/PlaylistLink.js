import "./PlaylistLink.css"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import HomeContext from "../../Context/HomeContext"
import Delete from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Edit } from "@mui/icons-material";


export default function PlaylistLink({ playlistName }) {
    const { getPagePlaylist, deletePlaylist, editPlaylist, allPlaylists } = useContext(HomeContext)
    const [expanded, setExpanded] = useState(false)
    const handleExpandClick = () => {
        setExpanded(!expanded)
    }
    return (
        <div className="playlist-link">
            <Link className="link-div" to={`/Home/${playlistName}`}>
                <div className="playlist-div">
                    <div title="ערוך/מחק" className="setting-btn"> <MoreVertIcon onClick={handleExpandClick} /></div>
                    {expanded && <div className="action-link-btn">
                        <div title="שנה את שם הפלייליסט">  <Edit sx={{ color: "orange", }} className="edit-playlist" onClick={() => editPlaylist(playlistName)} /></div>
                        <div title="מחק את הפלייליסט">   <Delete sx={{ color: "pink" }} className="delete-playlist" onClick={() => deletePlaylist(playlistName)} /></div>
                    </div>}
                    {allPlaylists[0] && <span className="numofsongs">{allPlaylists.find(playlist => playlist.playlistName === playlistName).songsID.length}</span>
                    } <div className="text-link" onClick={() => getPagePlaylist(playlistName, true)}>
                        {playlistName}
                    </div>
                </div>
            </Link>
        </div>
    )
}
// onClick={() => getPagePlaylist(playlistName, true)}