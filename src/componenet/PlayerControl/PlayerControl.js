import { IconButton } from "@mui/material";
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import ReplayIcon from '@mui/icons-material/Replay';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import HdrAutoOutlinedIcon from '@mui/icons-material/HdrAutoOutlined';
import "./PlayerControl.css"

export default function PlayerControl() {




    return (
        <div className="player-control-bar">
            <IconButton title="נגן/עצור" aria-label="play/pause">
                <SkipPreviousIcon sx={{ height: 38, width: 38, color: "white" }} />
            </IconButton>
            <IconButton title="נגן/עצור" aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38, color: "white" }} />
            </IconButton>
            <IconButton title="נגן/עצור" aria-label="play/pause">
                <SkipNextIcon sx={{ height: 38, width: 38, color: "white" }} />
            </IconButton>
            <IconButton title="נגן/עצור" aria-label="play/pause">
                <StopIcon sx={{ height: 38, width: 38, color: "white" }} />
            </IconButton>
            <IconButton title="נגן/עצור" aria-label="play/pause">
                <ShuffleIcon sx={{ height: 38, width: 38, color: "white" }} />
            </IconButton>
            <IconButton title="נגן/עצור" aria-label="play/pause">
                <ShuffleOnIcon sx={{ height: 38, width: 38, color: "white" }} />
            </IconButton>
            <IconButton title="נגן/עצור" aria-label="play/pause">
                <HdrAutoIcon sx={{ height: 38, width: 38, color: "white" }} />
            </IconButton>
            <IconButton title="נגן/עצור" aria-label="play/pause">
                <HdrAutoOutlinedIcon sx={{ height: 38, width: 38, color: "white" }} />
            </IconButton>
            <IconButton title="נגן/עצור" aria-label="play/pause">
                <PauseIcon sx={{ height: 38, width: 38, color: "white" }} />
            </IconButton>

            <IconButton title="נגן/עצור" aria-label="play/pause">
                <ReplayCircleFilledIcon sx={{ height: 38, width: 38, color: "white" }} />
            </IconButton>
            <IconButton title="נגן/עצור" aria-label="play/pause">
                <ReplayIcon sx={{ height: 38, width: 38, color: "white" }} />
            </IconButton>



        </div>
    )
}