import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useRef } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};



export default function MultipleSelectCheckmarks(id) {
    const [names, setNames] = React.useState([]);//רשימת כל הפלייליסטים כולם
    const [playListName, setPlayListName] = React.useState([]);//הפלייליסטים בהם הוא כבר נמצא
    const newPlaylist = useRef(null)
    const handleChange = (event) => {
        const { target: { value }, } = event;
        setPlayListName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const addPlaylist = (e) => {
        if (e.target.className === "adding") {
            setNames([...names, newPlaylist.current.value]);
            newPlaylist.current.value = ""
        }
    }

    return (
        <div>
            <FormControl sx={{ m: 1, position: "absolute", backgroundColor: "white", left: -200, width: 200 }}>
                <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={playListName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    <div className="adding" onClick={(e) => addPlaylist(e)}><input ref={newPlaylist} placeholder="צור פלייליסט חדש"></input>➕</div>
                    {names.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={playListName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}