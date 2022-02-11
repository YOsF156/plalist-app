
import { useEffect, useState } from "react";
import Plyr from "plyr-react";
import { useContext } from "react";
import AdminContext from "../../Context/AdminContext";
import "./Home.css"
import SearchBar from "../../componenet/SearchBar/SearchBar"
import CardContainer from "../../componenet/CardContainer/CardCcontainer";
import HomeContext from "../../Context/HomeContext";
import MusicCards from "../../componenet/MusicCards/MusicCards";

export default function Home() {

    const [showRes, setShowRes] = useState(false)
    const [songsRes, setSongsRes] = useState([null])
    const [http, setHttp] = useState("z-nMADrwC2c")
    const { login, setLogin } = useContext(AdminContext);
    const [showPlayer, setShowPlayer] = useState(false)
    const { getAllSong, allSongs } = useContext(AdminContext)
    useEffect(() => {
        setLogin(true)
        getAllSong()
    }, [])

    const play = (id) => {
        setHttp({
            type: "video",
            sources: [
                {
                    src: id,
                    provider: "youtube",
                },
            ],
        });
    };



    return (
        <div className="home" >
            <HomeContext.Provider value={{ play }}>
                <div className="nav-side">sdvsdvsd</div>
                <div className="action-zone">
                    <SearchBar setSongsRes={setSongsRes} setShowRes={setShowRes} />
                    {showRes && <CardContainer songsRes={songsRes} setShowRes={setShowRes} />}
                    <MusicCards />
                    <button className="popup-open" onClick={() => { play(http); setShowPlayer(!showPlayer) }}>play</button>
                    {showPlayer && <div className="player">
                        <Plyr source={http} />
                    </div>}
                </div>
            </HomeContext.Provider>
        </div>
    )
}
/* <Header login={login} userName={userName} password={password} signUp={signUp} loginShow={loginShow} loginDetails={loginDetails} />
      <AddItemsForm songList={songList} searchSong={searchSong} />
      <SongChoise songChoise={songChoise} AddSongToTheLIst={AddSongToTheLIst} cardShow={cardShow}></SongChoise>
      <SongList songList={songList} deletSong={deletSong} play={play} />
              <plyr className="song-player" videoId={http} /> */