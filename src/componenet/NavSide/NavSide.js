import "./NavSide.css"
import { useContext, useState } from "react"
import HomeContext from "../../Context/HomeContext"
import PlaylistLink from "../PlaylistLink/PlaylistLink"
import { useParams } from "react-router-dom"

export default function NavSide() {
    const { playlistsNames } = useContext(HomeContext)
    const [expanded, setExpanded] = useState("")
    const handleExpandClick = (name) => {
        if (name === expanded) {
            setExpanded("0")
        } else {
            setExpanded(name)
        }
    }

    return (
        <div className="nav-side">
            {playlistsNames.map((playlistName) => {
                return (<PlaylistLink key={playlistName} handleExpandClick={handleExpandClick} expanded={expanded} setExpanded={setExpanded} playlistName={playlistName} />)
            })}
        </div>
    )
}