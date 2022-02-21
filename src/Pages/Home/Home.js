
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
import LoadingDiv from "../../componenet/LoadingDiv/LoadingDiv";
import Header from "../../componenet/Header/Header";

export default function Home() {

    const [showRes, setShowRes] = useState(false)
    const [comingFrom, setComingFrom] = useState("")
    const [songsRes, setSongsRes] = useState([null])
    const [playlistsNames, setPlaylistsNames] = useState([])
    const [allPlaylists, setAllPlaylists] = useState([])
    const [songID, setSongID] = useState(null);
    const [playlistOfSong, setPlaylistOfSong] = useState([])
    const [showSelect, setShowSelect] = useState(false)
    const [filterSongs, setFilterSongs] = useState([])
    const [http, setHttp] = useState("z-nMADrwC2c")
    const [songs, setSongs] = useState([null])
    const [loading, setloading] = useState(false)
    const { login, setLogin, setPlaylistName } = useContext(AdminContext);
    const [showPlayer, setShowPlayer] = useState(false)
    const { getAllSong, allSongs } = useContext(AdminContext)
    const { playlist } = useParams();
    const query = playlist



    useEffect(() => {
        // go()
        getPlaylistsNames();
        getPagePlaylist(query, true)

    }, [playlist]);

    useEffect(() => {
        // go()


    }, [])

    const getSongRelationships = async (songId) => {//מזהה את כל הפלייליסטים של שיר מסוים
        setSongID(songId)
        setloading(true)
        const allLists = await getPlaylists();
        const conectiones = allLists.map((playlist) => {
            playlist.res = undefined
            if (playlist.songsID.find(song => song.id === songId)) {
                playlist.res = playlist.playlistName
            };
            return playlist.res
        }).filter(res => res);
        setPlaylistOfSong(conectiones);
        setloading(false)
        return conectiones
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
    const getPagePlaylist = async (name, boolean, songs = false) => {

        // if (localStorage.accessToken === "undefined") return localStorage.accessToken = "";
        let get;
        songs ? get = songs : get = await getPlaylists();
        const choosenPlaylist = await get.find(list => list.playlistName === name)
        const set = choosenPlaylist.songsID
        if (boolean) {

            setSongs(set)
            setFilterSongs(set);
        }
        setloading(false)
    }

    const AddSongToTheLIst = async (id, listName, add, from) => {
        setloading(true)
        let playlists;
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
            api.post(`/songs/${id}`, newSong);
            api.post(`/playlists/${id}`);//addSongToMainPlaylist
        };
        if (add) {
            playlists = await api.put(`/playlists/addSongTo/${listName}/${id}`)
        } else {
            playlists = await api.delete(`/playlists/deleteSongFrom/${listName}/${id}`)
        }
        setAllPlaylists(playlists.data);
        getPagePlaylist(playlist, listName === playlist || listName === "אהובים במיוחד", playlists.data);//יעדכן את הנתונים בעמוד רק עם השיר נוסף לרשימה שמוצגת כרגע

    }

    const getPlaylists = async () => {
        const allPlaylists = await api.get("/playlists/myPlaylist")
        setAllPlaylists(allPlaylists.data)
        getPlaylistsNames()
        return allPlaylists.data
    }
    const getPlaylistsNames = async () => {
        const names = await api.get("/playlists/myPlaylist/names");
        setPlaylistsNames(names.data)
    }
    const deletePlaylist = async (name) => {
        if (window.confirm("?פעולה זו תוביל למחיקת פלייליסט שלם! להמשיך")) {
            const deleteEntirePlaylist = await api.delete(`/playlists/${name}`);
            setPlaylistName("main playlist");
            window.location.replace("/Home");
        }
    }

    const editPlaylist = async (playlistName) => {
        const newListName = { newName: prompt(`מה יהיה השם החדש של רשימת ההשמעה ${playlistName}`) };
        await api.put(`/playlists/change/${playlistName}`, newListName);
        setPlaylistName("main playlist");
        window.location.replace("/Home");
    }


    return (
        <div className="home" >
            <HomeContext.Provider value={{ editPlaylist, allPlaylists, setloading, playlistsNames, comingFrom, setComingFrom, setSongID, setPlaylistsNames, deletePlaylist, songID, playlistOfSong, getSongRelationships, setShowSelect, play, getPagePlaylist, filterSongs, setSongsRes, setShowRes, setFilterSongs, songs, AddSongToTheLIst }}>
                <Header />
                <NavSide />
                {loading && <LoadingDiv />}
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