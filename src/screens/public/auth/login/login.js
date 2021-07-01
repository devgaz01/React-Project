import React, { useState } from 'react';
// Imprting Material ui components to use in our app
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

// Importing axios client for http requests
import axios from 'axios'

// these are material ui styles for styling component in js file
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        width: "50%"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    learnMore: {
        margin: "15px 0px 16px",
        color: "#fff",
        borderRadius: 20,
        fontFamily: "NunitoSemiBold",
        fontSize: 12
    },
    submit: {
        margin: "15px 0px 16px",
        color: "#fff",
        borderRadius: 20,
        fontFamily: "NunitoSemiBold",
        fontSize: 12,
        padding: "4px 20px",
    },
    leftbox: {
        display: 'flex',
        justifyContent: 'center',
        padding: "40px 0px 0px 70px",
        flexDirection: 'column',

    },
    rightbox: {
        background: 'linear-gradient(#0034ba 0%, #1734bd 25.65%, #382eb8 49.74%, #3f12a4 87%, #460093 100%)',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 30
    },
    logo: {
        // marginBottom: 'auto',
        position: 'absolute',
        top: 40
    },
    descriptionbox: {
        marginBottom: 'auto',
        marginTop: "auto"
    },
    greetings: {
        fontFamily: "NunitoRegular", fontSize: "25px",
        lineHeight: 1.3
    },
    description: {
        fontFamily: "NunitoRegular", fontSize: "14px",
        width: "60%",
        lineHeight: 1.6,
        margin: "16px 0px 0px"
    },
    formHeading: {
        fontFamily: "NunitoRegular",
        fontSize: 24
    },
    ask: {
        fontFamily: "NunitoLight",
        fontSize: 12
    },
    keep: {
        fontFamily: 'NunitoLight',
        fontSize: "14px",
        color: "#fff",
    },
    fp: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));


// this is login screen component

export default function Login() {
    const classes = useStyles();
    const history = useHistory()
    const [loading, setLoading] = React.useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // this is true/false checked state for keep me logged in
    const [checked, setChecked] = useState(true)


    // this is custom color check box of material ui
    const WhiteCheckbox = withStyles({
        root: {
            color: "#fff",
            '&$checked': {
                color: "#fff",
            },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />);

    // this is submit login fuction
    function handleSubmit() {
        setLoading(true)
        const body = {
            email,
            password
        }
        axios.post('https://reqres.in/api/login', body).then((res) => {
            if (res.data && res.data.token) {
                setEmail("")
                setPassword("")
                // alert("Logged In Successfully!")
                history.push('/dashboard')
            }
        }).catch((err) => {
            setLoading(false)
            if (err.response.data) {
                alert(err.response.data.error)
            }
        })
    }

    return (
        // Wraping my login screen with main grid container of material ui
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            {/* this is left content grid box */}
            <Grid item xs={false} sm={6} md={7} className={classes.leftbox}>
                <div className={classes.logo}>
                    <img src={require('../../../../assets/images/logo.png')} />
                </div>
                <div className={classes.descriptionbox}>
                    <Typography variant="h6" className={classes.greetings}>
                        <div>Hi,</div>
                        Welcome on Dimtech.
            </Typography>
                    <Typography variant="body2" className={classes.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit.
            </Typography>
                    <Button
                        type="submit"
                        variant="contained"
                        className={classes.learnMore}
                        disableElevation
                        color={'secondary'}
                    >
                        Learn more
            </Button>
                </div>
            </Grid>
            {/* this is right content grid box for login form */}

            <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} className={classes.rightbox} square>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5" color={'primary'} className={classes.formHeading}>
                        Sign-in
          </Typography>
                    <form className={classes.form} noValidate action={'JavaScript:void(0)'}>

                        <input className={'auth-input'} value={email} placeholder={'Email'} type={'email'} onChange={(e) => { setEmail(e.target.value) }} />
                        <input className={'auth-input'} value={password} placeholder={'Password'} type="password" onChange={(e) => { setPassword(e.target.value) }} />

                        <div className={classes.fp}>
                            <FormControlLabel
                                control={<WhiteCheckbox checked={checked} onChange={() => { setChecked(!checked) }} name="checkedG" />}
                                label="Keep Me Logged In"
                            />

                            <Link href="#" variant="body1" style={{ textDecoration: "underline", textUnderlinePosition: "under" }}>
                                Forgot password?
                </Link>
                        </div>
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                            disableElevation
                            onClick={() => { handleSubmit() }}
                            disabled={email === "" || password === ""}
                        >
                            Login
            </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="#" variant="body2" className={classes.ask}>
                                    {"Need an account ? "} <span style={{ color: "#fc6c5f" }}> Sign Up</span>
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
            <Backdrop className={classes.backdrop} open={loading} onClick={() => { setLoading(false) }}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </Grid>
    );
}