
import { useState } from "react";
import Plyr from "plyr-react";
import { useContext } from "react";
import AdminContext from "../../Context/AdminContext";
import "./Home.css"


export default function Home() {


    const [http, setHttp] = useState("z-nMADrwC2c")
    const { login, setLogin } = useContext(AdminContext);
    const [showPlayer, setShowPlayer] = useState(false)
    setLogin(true)
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
            <div className='search-bar-container'>
                <div className="search-input-box">
                    <img className="searchIcon" src="Search@2x.svg" alt="search" />
                    <input

                        // onChange={(event) => { filterByShearch(event.target.value) }}
                        type={"text"}
                        className="searchBox"
                        placeholder="מה תרצה לשמוע היום..."
                    />
                </div>
            </div>
            <button className="popup-open" onClick={() => { play(http); setShowPlayer(!showPlayer) }}>play</button>
            {showPlayer && <div className="player">
                <Plyr source={http} />
            </div>}
        </div>
    )
}
/* <Header login={login} userName={userName} password={password} signUp={signUp} loginShow={loginShow} loginDetails={loginDetails} />
      <AddItemsForm songList={songList} searchSong={searchSong} />
      <SongChoise songChoise={songChoise} AddSongToTheLIst={AddSongToTheLIst} cardShow={cardShow}></SongChoise>
      <SongList songList={songList} deletSong={deletSong} play={play} />
              <plyr className="song-player" videoId={http} /> */