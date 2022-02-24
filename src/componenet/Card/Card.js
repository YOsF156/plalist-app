import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MultipleSelectCheckmarks from '../MultiSelect/MultiSelect';
import { useContext } from 'react';
import HomeContext from '../../Context/HomeContext';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Cards({ song }) {
    const { setShowSelect, getSongRelationships, setSongID, setComingFrom } = useContext(HomeContext)
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleOpenMenu = () => {
        setSongID(song.id)
        setComingFrom("fromSearch")
        setShowSelect(true)
    };

    return (
        <Card className="card-div" sx={{
            position: "relative", maxHeight: 480, zIndex: 1500, overflow: 'visible', overflowY: "scroll", margin: 2, minWidth: 250, maxWidth: 250
        }}>
            <CardHeader
                avatar={
                    song.author && <Avatar src={song.author.avatars[0].url} sx={{ width: 50, height: 50 }} />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon onClick={handleOpenMenu} />

                    </IconButton>
                }
                title={`views: ${song.views}`}
                subheader={`uploaded: ${song.uploadedAt}`}
            />
            {/* <CardMedia
                component="img"
                // height="194"
                image={song.bestThumbnail.url}
                alt={song.title}
            /> */}
            <iframe className="embed-YT" title={song.title} width="250" height="180" src={`https://www.youtube.com/embed/${song.id}`}>
            </iframe>
            <CardContent>
                <Typography variant="body1" color="text.primary">
                    <strong> {song.title}</strong>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>

                <CardContent>
                    ?רוצה לקפוץ ליו טיוב
                    <Typography paragraph><a href={song.url} Target="_blank">{song.title}</a></Typography>

                </CardContent>
            </Collapse>
        </Card >
    );
}