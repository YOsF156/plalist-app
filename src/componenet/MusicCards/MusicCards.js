import { useContext } from "react";
import AdminContext from "../../Context/AdminContext";
import HomeContext from "../../Context/HomeContext";
import MusicCard from "../MusicCard/MusicCard";
import "./MusicCards.css";

export default function MusicCards() {
    const { filterSongs } = useContext(HomeContext)

    return (
        <div className="music-cards">
            {filterSongs[0] && filterSongs.map(song => <MusicCard key={song.id} song={song} />)}
        </div>
    )
}