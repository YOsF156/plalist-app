
import { useEffect, useState } from "react";
import Plyr from "plyr-react";
import { useContext } from "react";
import AdminContext from "../../Context/AdminContext";
import "./Home.css"
import SearchBar from "../../componenet/SearchBar/SearchBar"
import CardContainer from "../../componenet/CardContainer/CardCcontainer";
import HomeContext from "../../Context/HomeContext";
import MusicCards from "../../componenet/MusicCards/MusicCards";
import { useParams } from "react-router-dom";
import api from "../../Controller/axiosReq";
import NavSide from "../../componenet/NavSide/NavSide";
import ChooseDiv from "../../componenet/ChooseDiv/ChooseDiv";

export default function Home() {

    const [showRes, setShowRes] = useState(false)
    const [songsRes, setSongsRes] = useState([null])
    const [playlistsNames, setPlaylistsNames] = useState([])
    const [allPlaylists, setAllPlaylists] = useState([])
    const [songID, setSongID] = useState(null);
    const [playlistOfSong, setPlaylistOfSong] = useState([])
    const [showSelect, setShowSelect] = useState(false)
    const [filterSongs, setFilterSongs] = useState([])
    const [http, setHttp] = useState("z-nMADrwC2c")
    const [songs, setSongs] = useState([null])
    const { login, setLogin, setPlaylistName } = useContext(AdminContext);
    const [showPlayer, setShowPlayer] = useState(false)
    const { getAllSong, allSongs } = useContext(AdminContext)
    const { playlist } = useParams();

    const query = playlist



    useEffect(() => {
        // go()
        getPlaylistsNames();
        getPagePlaylist(query, false)

    }, [])

    useEffect(() => {
        // go()


    }, [])

    const getSongRelationships = (songId) => {//מזהה את כל הפלייליסטים של שיר מסוים
        setSongID(songId)

        console.log(allPlaylists)
        const conectiones = allPlaylists.map((playlist) => {
            playlist.res = undefined
            if (playlist.songsID.find(song => song.id === songId)) {
                playlist.res = playlist.playlistName
            };
            return playlist.res
        }).filter(res => res);
        setPlaylistOfSong(conectiones);
        // setShowSelect(true)
    }

    const play = (id) => {
        setShowPlayer(!showPlayer)
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


    //משיכת פלייליסט
    const getPagePlaylist = async (name, boolean) => {
        // if (localStorage.accessToken === "undefined") return localStorage.accessToken = "";

        const get = await getPlaylists()
        const choosenPlaylist = await get.find(list => list.playlistName === name)
        const set = await choosenPlaylist.songsID
        if (!boolean) {

            setSongs(set)
            setFilterSongs(set);
        }

    }

    const AddSongToTheLIst = async (id, listName, add, from) => {
        // if (!localStorage.accessToken) return localStorage.accessToken = "";
        if (add && from === "fromSearch") {

            const song = await songsRes.find(song => song.id === id)
            const newSong = {
                title: song.title,
                id: song.id,
                url: song.url,
                thumbnails_url: song.bestThumbnail.url,
                views: song.views,
                duration: song.duration,
                uploadedAt: song.uploadedAt
            };
            const addSong = await api.post(`/songs/${id}`, newSong);
            const addSongToMainPlaylist = await api.post(`/playlists/${id}`);
        };
        if (add) {
            const playlists = await api.put(`/playlists/addSongTo/${listName}/${id}`)
        } else {
            const playlists = await api.delete(`/playlists/deleteSongFrom/${listName}/${id}`)
        }
        getPagePlaylist(listName, playlist === listName ? false : true)
        getSongRelationships(id)
    }

    const getPlaylists = async () => {
        const allPlaylists = await api.get("/playlists/myPlaylist")
        setAllPlaylists(allPlaylists.data)
        getPlaylistsNames()
        return allPlaylists.data;//לסיים הצבה ביוזסטייט אחרי עבודה
    }
    const getPlaylistsNames = async () => {
        const names = await api.get("/playlists/myPlaylist/names");
        setPlaylistsNames(names.data)
    }
    const deletePlaylist = async (name) => {
        if (window.confirm("Are you sure you want to delete?")) {
            const deleteEntirePlaylist = await api.delete(`/playlists/${name}`);
            setPlaylistName("main playlist");
            window.location.replace("/Home");
        }
    }
    return (
        <div className="home" >
            <HomeContext.Provider value={{ playlistsNames, setPlaylistsNames, deletePlaylist, songID, playlistOfSong, getSongRelationships, setShowSelect, play, getPagePlaylist, filterSongs, setSongsRes, setShowRes, setFilterSongs, songs, AddSongToTheLIst }}>
                <NavSide />
                {showSelect && <ChooseDiv />}
                <div className="action-zone">
                    <SearchBar />
                    {showRes && <CardContainer songsRes={songsRes} setShowRes={setShowRes} />}
                    {songs && <MusicCards />}
                    {/* <button className="popup-open" onClick={() => { setShowPlayer(!showPlayer) }}>play</button> */}
                    {showPlayer && <div className="player">
                        <Plyr source={http} options={{ autoplay: true }} />
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