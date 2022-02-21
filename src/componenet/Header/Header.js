import { Button } from "bootstrap"
import { useContext, useState } from "react";
import "./Header.css"
import LoadingButton from '@mui/lab/LoadingButton';
import { Link, useParams } from "react-router-dom";
import AdminContext from "../../Context/AdminContext";
import axios from "axios";
import { FavoriteSharp } from "@mui/icons-material";
import FavoriteRounded from "@mui/icons-material/FavoriteRounded";
import HomeRounded from "@mui/icons-material/HomeRounded";
export default function Header() {
    const [loading, setLoading] = useState(false);
    const { playlist } = useParams();
    const { login, setLogin } = useContext(AdminContext)
    const handleClick = () => {
        setLoading(!loading);
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }


    return (
        <div className="header">
            {login && <div className="btn-log" type="button" onClick={() => { setLogin(!login); localStorage.clear(); }}><Link className="link-log" to="/login">יציאה</Link></div>}
            <div className="centerHeadLine">

                <h6 className="littleHeadline"> להנות בלי פרסומות </h6>

                <h3> ליסטיםplay🐱‍👤  </h3>
            </div>

            <h6 className="sideHead">
                <HomeRounded />
                <FavoriteRounded sx={{ color: "yellow" }} />
                : עבור אל
                <div>| "<strong>{playlist}</strong>"</div>
                : הנך צופה ב  </h6>
        </div>
    )


    // return !loginShow ? <div className="header">
    //     <div className="welcome"> <h6> welcome <h5>{loginDetails.username} !</h5> </h6></div>
    //     <h1> 🎼 playlist ⏯</h1></div> :
    //     <div className="header">
    //         <div className="login">
    //             <input type="text" className="userName input" placeholder="enter user name" onChange={(e) => userName(e.target.value)} />
    //             <input type="password" className="password input" placeholder="enter password" onChange={(e) => password(e.target.value)} />
    //             {/* <button variant="success" className="btn-login" onClick={() => login()}> submit </button> */}
    //             {/* <button variant="success" className="btn-signUp" onClick={() => signUp()}> sign up (it's free) </button> */}
    //             <LoadingButton
    //                 onClick={() => { handleClick(); login() }}
    //                 loading={loading}
    //                 loadingIndicator="loading"
    //                 variant="outlined"
    //             >
    //                 sign in
    //             </LoadingButton>
    //             <LoadingButton
    //                 onClick={() => { handleClick(); signUp() }}
    //                 loading={loading}
    //                 loadingIndicator="loading"
    //                 variant="outlined"
    //             >
    //                 sign up
    //             </LoadingButton>
    //         </div>

    //     </div>
}
