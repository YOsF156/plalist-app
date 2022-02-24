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
import { useContext, useState, useEffect } from "react"

export default function PlayerControl() {
    const [controleMusicButtons, setControleMusicButtons] = useState({ play: "", shuffle: "", playAll: "", repeat: "" })

    const controlBar = (play = true, shuffle = false, playAll = false, repeat = false) => {
        setControleMusicButtons({ play: play, shuffle: shuffle, playAll: playAll, repeat: repeat })
    }
    useEffect(() => {
        controlBar()
    }, [])

    const sx = { height: 38, width: 38, color: "white" }

    return (
        <div className="player-control-bar">
            <IconButton title="לשיר הקודם" aria-label="play/pause">
                <SkipPreviousIcon sx={{ height: 38, width: 38, color: "white" }} />
            </IconButton>
            <IconButton onClick={() => controlBar(!controleMusicButtons.play)} title="נגן/השהה" aria-label="play/pause">
                {controleMusicButtons.play ? <PauseIcon sx={sx} /> : <PlayArrowIcon sx={sx} />}
            </IconButton>

            <IconButton title="השיר הבא" aria-label="play/pause">
                <SkipNextIcon sx={{ height: 38, width: 38, color: "white" }} />
            </IconButton>
            <IconButton title="עצור" aria-label="play/pause">
                <StopIcon sx={{ height: 38, width: 38, color: "white" }} />
            </IconButton>
            <IconButton onClick={() => controlBar(null, !controleMusicButtons.shuffle)} title="ערבב" aria-label="play/pause">
                {controleMusicButtons.shuffle ? <ShuffleOnIcon sx={sx} /> : <ShuffleIcon sx={sx} />}
            </IconButton>
            <IconButton onClick={() => controlBar(null, null, !controleMusicButtons.playAll)} title="חזור על הכל" aria-label="play/pause">
                {controleMusicButtons.playAll ? <HdrAutoIcon sx={sx} /> : <HdrAutoOutlinedIcon sx={sx} />}
            </IconButton>
            <IconButton onClick={() => controlBar(null, null, null, !controleMusicButtons.repeat)} title="חזור על השיר הנוכחי" aria-label="play/pause">
                {controleMusicButtons.repeat ? <ReplayCircleFilledIcon sx={sx} /> : <ReplayIcon sx={sx} />}
            </IconButton>
        </div>
    )
}
// בםמדא setSomething


// const foo = (a = 1, b = 2, c = 3) => {
//     setSomething({ a: a, b: b, c: c })
// }

// foo(5)
//כאן אני מעוניין להציב ב פרמטר השלישי מספר אחר, בלי לדרוס את הספרה חמש שהצבתי בשורה קודמת