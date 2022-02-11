import { useEffect, useRef } from "react";
import Cards from "../Card/Card";
import "./CardContainer.css";

export default function CardContainer({ setShowRes, songsRes }) {
    const divSongs = useRef(null)
    const handleClose = (e) => {
        if (e.target.className === divSongs.current.className) {
            setShowRes(false)
        }
    }

    useEffect(() => {
        if (divSongs.current) {

            divSongs.current.addEventListener('wheel', (event) => {
                event.preventDefault();
                divSongs.current.scrollBy({
                    left: event.deltaY < 0 ? -30 : 50,

                });
            });
        }
    }, [])

    return (
        <div ref={divSongs} className="card-container-songs" onClick={(e) => handleClose(e)}>
            {songsRes.map((song) => { return <Cards key={song.id} id={song.id} song={song} ></Cards> })}
        </div>
    )
}