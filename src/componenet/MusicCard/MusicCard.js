import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HomeContext from '../../Context/HomeContext';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { useParams } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import api from '../../Controller/axiosReq';


export default function MusicCard({ song }) {
    const theme = useTheme();
    const { playlist } = useParams();
    const { play, AddSongToTheLIst, setComingFrom, setSongID, setShowSelect, allPlaylists, setloading } = React.useContext(HomeContext);

    const setToList = async () => {
        setSongID(song.id);
        setComingFrom("fromMusic")
        setShowSelect(true)
    }

    const earase = (id) => {
        AddSongToTheLIst(id, playlist, false, "from-player")
    }
    const handleLike = async (isLiked) => {
        const addToFavorites = await AddSongToTheLIst(song.id, "אהובים במיוחד", !isLiked, "from-player");
        setloading(false)
    }
    const isLiked = () => {
        const favorites = allPlaylists.find((playlist) =>
            playlist.playlistName === "אהובים במיוחד"
        );
        if (favorites) {
            const res = favorites.songsID.find(songs => songs.id === song.id)
            return res ? true : false;
        }
        return false;
    }
    const like = isLiked()
    return (
        <Card title={song.title} id={song.id} sx={{ maxWidth: 400, maxHeight: 150, margin: 2, display: 'flex' }}>


            <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                <CardContent sx={{ flex: '1 0 auto' }}>

                    <Typography component="div" sx={{ maxHeight: 30, overflow: 'hidden', minWidth: 250 }} variant="h6">
                        {song.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {song.duration}
                    </Typography>
                </CardContent>

                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    {playlist !== "main playlist" && <IconButton title="מחק שיר מפלייליסט זה" onClick={() => earase(song.id)} aria-label="earase" >
                        {theme.direction === 'rtl' ? <MoreVertIcon /> : <DeleteSweepIcon />}
                    </IconButton>}
                    <IconButton title="נגן/עצור" aria-label="play/pause">
                        <PlayArrowIcon onClick={() => play(song.id)} sx={{ height: 38, width: 38 }} />
                    </IconButton>
                    <IconButton title="הסר/הוסף למועדפים" aria-label="like">
                        <FavoriteIcon onClick={() => handleLike(like)} sx={{ height: 30, color: like ? "red" : "gray", width: 30 }} />
                    </IconButton>
                    <IconButton title="נהל רשימות השמעה לשיר זה" onClick={setToList} aria-label="more">

                        {theme.direction === 'rtl' ? <DeleteSweepIcon /> : <MoreVertIcon />}
                    </IconButton>
                </Box>
            </Box>

            <CardMedia

                component="img"
                sx={{ width: 151 }}
                image={song.thumbnails_url}
                alt={song.title}
            />
        </Card >
    );
}

// setShowSelect(true)
//         getSongRelationships(song.id);