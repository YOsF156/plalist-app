import { useEffect } from "react";
import { useState } from "react";
import { useContext, useRef } from "react";
import HomeContext from "../../Context/HomeContext";
import "./ChooseDiv.css";


export default function ChooseDiv() {
    const { playlistsNames, setShowSelect, playlistOfSong, AddSongToTheLIst, songID, addPlaylist } = useContext(HomeContext);
    const newPlaylist = useRef(null);
    const [checked, setChecked] = useState(playlistOfSong);
    const handleChange = (event) => {
        console.log(event.target.value)
        AddSongToTheLIst(songID, event.target.value)
        setChecked(...checked, event.target.value)/// הן בפרונט והן בשרת ההפך משורות 14-15 כל הדרך \להוסיף מחיקת שיר
    }

    return (
        <div className="choose-div">
            <div className="main-select-div">
                <div className="close-popup-btn" onClick={() => setShowSelect(false)}>✖</div>
                <div className="adding"  ><input ref={newPlaylist} placeholder="צור פלייליסט חדש"></input>➕</div>
                <div className="select-div">
                    {playlistsNames.map((name) => (
                        <div key={name} value={name}>
                            <input id={name} type="checkbox" value={name} onChange={(e) => handleChange(e)} checked={checked.indexOf(name) > -1} />

                            <lable for={name}>{name}</lable>
                        </div>))}
                </div>
            </div>
        </div>
    )
}

//  <input id={name} type="checkbox" />
// <lable for={name}>{name}</lable> 