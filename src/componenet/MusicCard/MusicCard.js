import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import HomeContext from '../../Context/HomeContext';


export default function MusicCard({ song }) {
    const theme = useTheme();
    const [bb, setBb] = React.useState(false)
    const { play } = React.useContext(HomeContext)
    const handle = () => {
        setBb(!bb)
    }
    return (
        <Card id={song.id} sx={{ maxWidth: 400, maxHeight: 150, marginBottom: 2, display: 'flex' }}>


            <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                <CardContent sx={{ flex: '1 0 auto' }}>

                    <Typography component="div" sx={{ maxHeight: 30, overflow: 'hidden', }} title={song.title} variant="h6">
                        {song.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {song.duration}
                    </Typography>
                </CardContent>

                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon onClick={() => play(song.id)} sx={{ height: 38, width: 38 }} />
                    </IconButton>

                    <IconButton aria-label="next">

                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
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