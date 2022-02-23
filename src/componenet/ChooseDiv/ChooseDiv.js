import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import AddModerator from "@mui/icons-material/AddModerator";
import Close from "@mui/icons-material/Close";
import { useEffect } from "react";
import { useState } from "react";
import { useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import HomeContext from "../../Context/HomeContext";
import "./ChooseDiv.css";


export default function ChooseDiv() {
    const { playlistsNames, setShowSelect, comingFrom, playlistOfSong, getSongRelationships, AddSongToTheLIst, songID, setShowRes, setloading } = useContext(HomeContext);
    const newPlaylist = useRef(null);
    const [checked, setChecked] = useState([...playlistOfSong]);
    const { param } = useParams

    useEffect(() => {
        up(false)
    }, [])

    const up = async (needToClose) => {
        const refreshList = await getSongRelationships(songID);
        setChecked([...refreshList.filter(c => c !== "main playlist")]);
        if (needToClose) { setloading(false) };
    }
    const handleChange = async (name, types) => {

        if (types === "input" && checked.indexOf(name) > -1) {
            alert("the listName is already exists but we got this")
        };
        if (types === 'uncheck' || types === "input") {
            const add = await AddSongToTheLIst(songID, name, true, comingFrom);
            // const change = await setChecked(...checked, name);
        } else if (types === 'check') {
            const del = await AddSongToTheLIst(songID, name, false);
            // const change = await setChecked(checked.filter(c => c !== name))
        }
        if (types === "input") {
            newPlaylist.current.value = null;

        }
        up(true)
    }

    return (
        <div className="choose-div">
            <div className="main-select-div">
                <div className="close-popup-btn" onClick={() => { setShowSelect(false) }}><Close /></div>
                <div className="adding" onClick={(e) => { if (e.target.value !== newPlaylist.current.value) { handleChange(newPlaylist.current.value, "input") } }}><input ref={newPlaylist} placeholder="צור פלייליסט חדש"></input><  QueueMusicOutlinedIcon title={"הוסף את שם הפלייליסט"} className="add-btn" /></div>
                <div className="select-div">
                    {playlistsNames.map((name) => {
                        if (name !== "main playlist")
                            return (
                                <div key={name} value={name}>
                                    <input id={name} type="checkbox" value={name} onChange={(e) => handleChange(e.target.value, e.target.checked ? "uncheck" : "check")} checked={checked.includes(name)} />
                                    <lable className="lable-checkbox" for={name}>{name}</lable>
                                </div>)
                    })}
                </div>
            </div>
        </div >
    )
}
// handleChange(e.target.value, "check")
//  <input id={name} type="checkbox" />
// <lable for={name}>{name}</lable> 