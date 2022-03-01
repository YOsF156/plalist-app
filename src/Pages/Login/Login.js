import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import "./Login.css"
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AdminContext from '../../Context/AdminContext';
import { useContext } from 'react';
import PlayerControl from '../../componenet/PlayerControl/PlayerControl';

// function Copyright(props) {

//     return (
//         <Typography variant="body2" color="text.secondary" align="center" {...props}>
//             {'Copyright © '}
//             <Link color="inherit" href="https://mui.com/">
//                 Your Website
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

const theme = createTheme();

export default function Login() {
    const { handleLogin } = useContext(AdminContext)
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
                <CssBaseline />
                <div className="welcome-headline">
                    <h1>  <strong>ליסטיםplay🐱‍👤 </strong> </h1>
                    <h3 className="littleHeadline">  <strong>להנות בלי פרסומות </strong></h3>

                </div>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}//https://i.ytimg.com/vi/FrZQNS_J-vQ/maxresdefault.jpg
                    sx={{//https://lh3.googleusercontent.com/pw/AM-JKLW5rB-hRXjuZnWf5EWncwVrDMVu0GnAs6rQ9M4JKk9A5kpIjXtiz5wegJ74x3cW4mSLJX1wjmnJ9sckQKi233YZ8lkcLblCXWncfGf8hree8gLzlCusieUX4tWMt2wBHTLGi4fATUAt4HCom4uLOVpBVA=w1605-h903-no
                        backgroundImage: 'url(https://lh3.googleusercontent.com/pw/AM-JKLW5rB-hRXjuZnWf5EWncwVrDMVu0GnAs6rQ9M4JKk9A5kpIjXtiz5wegJ74x3cW4mSLJX1wjmnJ9sckQKi233YZ8lkcLblCXWncfGf8hree8gLzlCusieUX4tWMt2wBHTLGi4fATUAt4HCom4uLOVpBVA=w1605-h903-no)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'left',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: '#c72a2ae1' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            התחברות
                        </Typography>
                        <Box component="form" noValidate onSubmit={(e) => { handleLogin(e) }} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="שם משתמש"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="סיסמה"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />

                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="זכור אותי ממחשב זה"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                התחבר
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link to={`/register`} variant="body2">
                                        ? שכחת סיסמה
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to={`/register`} variant="body2">
                                        ! אין לך חשבון? הירשם
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </ThemeProvider >
    );
}