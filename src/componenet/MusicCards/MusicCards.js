import { useContext } from "react";
import AdminContext from "../../Context/AdminContext";
import MusicCard from "../MusicCard/MusicCard";
import "./MusicCards.css";

export default function MusicCards() {
    const { allSongs } = useContext(AdminContext)

    return (
        <div className="music-cards">
            {allSongs.map(song => <MusicCard key={song.id} song={song} />)}
        </div>
    )
}