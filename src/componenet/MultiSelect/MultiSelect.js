// import "./MultiSelect.css"
// import * as React from 'react';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import ListItemText from '@mui/material/ListItemText';
// import Select from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';
// import HomeContext from '../../Context/HomeContext';
// import { useContext, useEffect, useState, useRef } from 'react';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//     PaperProps: {
//         style: {
//             maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//             width: 250,
//         },
//     },
// };



// export default function MultipleSelectCheckmarks({ id }) {
//     const { AddSongToTheLIst, playlistsNames } = useContext(HomeContext)
//     const [expanded, setExpanded] = useState(false);
//     const [names, setNames] = useState([]);//רשימת כל הפלייליסטים כולם
//     const [playListName, setPlayListName] = useState([]);//הפלייליסטים בהם הוא כבר נמצא
//     const newPlaylist = useRef(null)
//     const option = useRef(null)
//     const checkedSituation = useRef(null)
//     useEffect(() => {
//         setNames(playlistsNames)
//     }, [playlistsNames])

//     const handleChange = (event) => {
//         console.log(event);
//         const { target: { value }, } = event;
//         setPlayListName(
//             // On autofill we get a stringified value.
//             typeof value === 'string' ? value.split(',') : value,
//         );
//         console.log(playListName)
//     };


//     const addPlaylist = (e) => {
//         if (newPlaylist.current.value !== "") {
//             AddSongToTheLIst(id, newPlaylist.current.value)
//         }
//         if (e.target.className === "adding") {
//             setNames([...names, newPlaylist.current.value]);//לתקן ולהוסיף קריאה לשרת שיביא את כל רשימות השירים
//             newPlaylist.current.value = ""
//         }
//     }

//     //     return (
//     //         <div>

//     //             <FormControl sx={{ m: 1, position: "absolute", backgroundColor: "white", left: -200, width: 200 }}>
//     //                 <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
//     //                 <Select
//     //                     labelId="demo-multiple-checkbox-label"
//     //                     id="demo-multiple-checkbox"
//     //                     multiple
//     //                     value={playListName}
//     //                     onChange={handleChange}
//     //                     input={<OutlinedInput label="Tag" />}
//     //                     renderValue={(selected) => selected.join(', ')}
//     //                     MenuProps={MenuProps}
//     //                 >
//     //                     {names.map((name) => (
//     //                         <MenuItem ref={checkedSituation} onChange={(e) => console.log(checkedSituation.current)} key={name} value={name}>
//     //                             <Checkbox checked={playListName.indexOf(name) > -1} />
//     //                             <ListItemText primary={name} />
//     //                         </MenuItem>
//     //                     ))}
//     //                 </Select>
//     //             </FormControl>
//     //         </div>
//     //     );
//     // }


//     function showCheckboxes(id) {
//         var checkboxes = document.getElementById(id);
//         if (!expanded) {
//             checkboxes.style.display = "block";
//             setExpanded(!expanded);
//         } else {
//             checkboxes.style.display = "none";
//             setExpanded(!expanded)
//         }
//     }
//     return (
//         <div className="shadow-box">

//             <form>
//                 <div className="multiselect">
//                     <div className="selectBox" onClick={() => showCheckboxes(option.current.id)}>
//                         <select>
//                             <option>Select an option</option>
//                         </select>
//                         <div className="overSelect"></div>
//                     </div>
//                     <div className="adding" onClick={(e) => { addPlaylist(e) }}><input ref={newPlaylist} placeholder="צור פלייליסט חדש"></input>➕</div>

//                     {names.map((list) =>
//                         <div key={list} id={list} ref={option}>
//                             <label htmlFor={list}>  <input type="checkbox" id={list} />{list}</label></div>
//                     )}
//                 </div>
//             </form>
//         </div>
//     )
// }
// //     return (
// //         //         <div className="select-div">
// //         //             <select multiple size={20}>
// //         //                 <div className="adding" onClick={(e) => { addPlaylist(e) }}><input ref={newPlaylist} placeholder="צור פלייליסט חדש"></input>➕</div>
// //         //                 {playlistsNames.map((name) => (
// //         //                     <MenuItem ref={checkedSituation} onChange={(e) => console.log(checkedSituation.current)} key={name} value={name}>
// //         //                         <Checkbox checked={playListName.indexOf(name) > -1} />
// //         //                         <ListItemText primary={name} />
// //         //                     </MenuItem>))}
// //         //             </select>
// //         //         </div>
// //         //     )
// //         // }


// //         <div id="list1" class="dropdown-check-list select-div" tabindex="100">
// //             <span class="anchor">בחר פלייליסטים</span>
// //             <ul class="items">
// //                 {names?.map((name) => { return <li><input type="checkbox" value={name} />{name} </li> })}

// //             </ul>
// //         </div>
// //     )
// // }


import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

export default function MultipleSelectCheckmarks({ id }) {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        console.log(value);
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                    <ListItem
                        key={value}
                        secondaryAction={
                            <IconButton edge="end" aria-label="comments">
                                <CommentIcon />
                            </IconButton>
                        }
                        disablePadding
                    >
                        <ListItemButton role={undefined} onClick={(e) => { console.log(e); handleToggle(value) }} dense>
                            <ListItemIcon>
                                <Checkbox
                                    onChange={(e) => console.log(e.target.value)}
                                    edge="start"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}