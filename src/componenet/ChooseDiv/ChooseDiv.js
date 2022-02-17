import { useEffect } from "react";
import { useState } from "react";
import { useContext, useRef } from "react";
import HomeContext from "../../Context/HomeContext";
import "./ChooseDiv.css";


export default function ChooseDiv() {
    const { playlistsNames, setShowSelect, playlistOfSong, AddSongToTheLIst, songID, addPlaylist } = useContext(HomeContext);
    const newPlaylist = useRef(null);
    const [checked, setChecked] = useState(playlistOfSong);

    const handleChange = async (name, type) => {
        alert(name)
        if (type === "input" && !checked.indexOf(newPlaylist.current.value) > -1) {
            alert("the listName is already exists but we got this")
        };
        if (type === 'uncheck' || type === "input") {
            const add = await AddSongToTheLIst(songID, name, true, "fromSearch");
            const change = await setChecked(...checked, name)
        } else if (type === 'check') {
            const del = await AddSongToTheLIst(songID, name, false);
            const change = await setChecked(checked.filter(c => c !== name))
        }

        newPlaylist.current.value = ""
        /// הן בפרונט והן בשרת ההפך משורות 14-15 כל הדרך \להוסיף מחיקת שיר

    }

    return (
        <div className="choose-div">
            <div className="main-select-div">
                <div className="close-popup-btn" onClick={() => setShowSelect(false)}>✖</div>
                <div className="adding" onClick={(e) => { if (e.target.value !== newPlaylist.current.value) { handleChange(newPlaylist.current.value, "input") } }}><input ref={newPlaylist} placeholder="צור פלייליסט חדש"></input>➕</div>
                <div className="select-div">
                    {playlistsNames.map((name) => (
                        <div key={name} value={name}>
                            <input id={name} type="checkbox" value={name} onChange={(e) => handleChange(e.target.value, e.target.checked ? "uncheck" : "check")} checked={checked.indexOf(name) > -1} />

                            <lable for={name}>{name}</lable>
                        </div>))}
                </div>
            </div>
        </div >
    )
}
// handleChange(e.target.value, "check")
//  <input id={name} type="checkbox" />
// <lable for={name}>{name}</lable> 