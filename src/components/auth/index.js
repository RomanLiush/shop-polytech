import React, {useState, forwardRef} from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';



import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';





import styles from './styles.module.css';
import {CssBaseline} from '@material-ui/core'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));




export default function Auth() {
  const classes = useStyles();

  const [adminLogin, setAdminLogin] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  (adminLogin === 'admin' && adminPassword === 'admin') ?
    localStorage.setItem('admin', '1') :
    localStorage.setItem('admin', '0')

  //1 block
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //2 block
  const [open_3, setOpen_3] = useState(false);
  const handleClickOpen_3 = () => {
    setOpen_3(true);
  };
  const handleClose_3 = () => {
    setOpen_3(false);
  };

  return (
    <div className={styles.main_block}>
      <div className={styles.lab5_okcancel}>
        <Button className={styles.lab5_btn1} color="black" onClick={handleClickOpen}>
          Log In
        </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          className={styles.lab5_dialog1}
        >
          {/*<DialogTitle id="alert-dialog-slide-title">Enter your login and password</DialogTitle>*/}
          {/*<DialogContent>*/}
          {/*  <DialogContentText id="alert-dialog-slide-description">*/}
          {/*    You want OK and No button*/}
          {/*  </DialogContentText>*/}
          {/*</DialogContent>*/}
          {/*<DialogActions className={styles.lab5_oknobtn}>*/}
          {/*  <Button onClick={handleClose} color="black" className={styles.lab5_btnOk}>*/}
          {/*    Ok*/}
          {/*  </Button>*/}
          {/*  <Button onClick={handleClose} color="black" className={styles.lab5_btnNo}>*/}
          {/*    No*/}
          {/*  </Button>*/}
          {/*</DialogActions>*/}




          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={event => setAdminLogin(event.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={event => setAdminPassword(event.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Link
                  href="/"
                  variant="body2"
                >
                  <Button
                    // type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign In
                  </Button>
                </Link>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={8}>
              <Copyright />
            </Box>
          </Container>




        </Dialog>
      </div>

      <div>
        <Button className={styles.lab5_btn1} color="black" onClick={handleClickOpen_3}>
          Register
        </Button>
        <Dialog
          open={open_3}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose_3}
          className={styles.lab5_dialog1}
        >
          {/*<DialogTitle id="alert-dialog-slide-title">I am the second parameter of the MessageBox function</DialogTitle>*/}
          {/*<DialogContent>*/}
          {/*  <DialogContentText id="alert-dialog-slide-description">*/}
          {/*    Click on one of the buttons*/}
          {/*  </DialogContentText>*/}
          {/*</DialogContent>*/}
          {/*<DialogActions className={styles.lab5_oknobtn}>*/}
          {/*  <Button onClick={handleClose_3} color="black" className={styles.lab5_btnOk}>*/}
          {/*    Yes*/}
          {/*  </Button>*/}
          {/*  <Button onClick={handleClose_3} color="black" className={styles.lab5_btnNo}>*/}
          {/*    No*/}
          {/*  </Button>*/}
          {/*</DialogActions>*/}




          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lname"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="primary" />}
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Link
                  href="/"
                >
                  <Button
                    // type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign Up
                  </Button>
                </Link>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Container>



        </Dialog>
      </div>
    </div>
  );
}


