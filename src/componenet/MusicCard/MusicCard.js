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
import api from '../../Controller/axiosReq';


export default function MusicCard({ song }) {
    const theme = useTheme();
    const { playlist } = useParams();
    const { play, AddSongToTheLIst, setComingFrom, setSongID, setShowSelect } = React.useContext(HomeContext);

    const setToList = async () => {
        setSongID(song.id);
        setComingFrom("fromMusic")
        setShowSelect(true)
    }

    const earase = (id) => {
        AddSongToTheLIst(id, playlist, false, "from-player")
    }

    return (
        <Card id={song.id} sx={{ maxWidth: 400, maxHeight: 150, margin: 2, display: 'flex' }}>


            <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                <CardContent sx={{ flex: '1 0 auto' }}>

                    <Typography component="div" sx={{ maxHeight: 30, overflow: 'hidden', minWidth: 250 }} title={song.title} variant="h6">
                        {song.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {song.duration}
                    </Typography>
                </CardContent>

                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    {playlist !== "main playlist" && <IconButton onClick={() => earase(song.id)} aria-label="earase" >
                        {theme.direction === 'rtl' ? <MoreVertIcon /> : <DeleteSweepIcon />}
                    </IconButton>}
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon onClick={() => play(song.id)} sx={{ height: 38, width: 38 }} />
                    </IconButton>

                    <IconButton onClick={setToList} aria-label="more">

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
        </Card>
    );
}

// setShowSelect(true)
//         getSongRelationships(song.id);