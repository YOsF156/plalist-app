import "./PlaylistLink.css"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import HomeContext from "../../Context/HomeContext"
import Delete from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Edit } from "@mui/icons-material";
import { useEffect } from "react";


export default function PlaylistLink({ playlistName, expanded, handleExpandClick }) {
    const { getPagePlaylist, deletePlaylist, editPlaylist, allPlaylists } = useContext(HomeContext)



    return (
        <div className="playlist-link">
            <div className="link-div" >
                <div className="playlist-div">
                    <div title="ערוך/מחק" className="setting-btn"> <MoreVertIcon onClick={() => handleExpandClick(playlistName)} onMouseOver={() => { if (playlistName !== expanded) handleExpandClick("0") }} /></div>
                    {expanded === playlistName && <div className="action-link-btn">
                        <div title="שנה את שם הפלייליסט">  <Edit sx={{ color: "orange", }} className="edit-playlist" onClick={() => editPlaylist(playlistName)} /></div>
                        <div title="מחק את הפלייליסט">   <Delete sx={{ color: "pink" }} className="delete-playlist" onClick={() => deletePlaylist(playlistName)} /></div>
                    </div>}
                    {allPlaylists[0] && <span className="numofsongs">{allPlaylists.find(playlist => playlist.playlistName === playlistName).songsID.length}</span>
                    } <Link className="text-link" to={`/Home/${playlistName}`}>
                        {playlistName}
                    </Link>
                </div>
            </div>
        </div>
    )
}
// onClick={() => getPagePlaylist(playlistName, true)}