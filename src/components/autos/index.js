import React, {Component, forwardRef} from 'react'
import {connect} from 'react-redux'
import * as R from 'ramda'
import {Link} from 'react-router-dom'


import {
  fetchAutos,
  loadMoreAutos,
  addAutoToBasket,
  fetchCategories,
} from '../../action';
import {getAutos, getAutosById} from '../../selectors'
import Layout from '../layout'
import AddAutoModal from '../addAutoModal'
import styles from '../auth/styles.module.css'
import Container from '@material-ui/core/Container'
import {CssBaseline} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import {makeStyles} from '@material-ui/core/styles'

const adminValue = localStorage.getItem('admin');

const admin = {
  key: +adminValue,
}




// const Transition = forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const classes = {
  paper: {
    marginTop: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: '1',
    backgroundColor: 'b0bec5'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '1'
  },
  submit: {
    margin: '3 0 2',
  }
}

class Auto extends Component {

  state = {
    open: false,
  }

  openModal = () => {
    this.setState({
      open: true,
    })
    console.log(this.state.open, 'IIIII')
  }

  closeModal = () => {
    this.setState({
      open: false,
    })
  }

  componentDidMount() {
    this.props.fetchAutos()
    this.props.fetchCategories()
  }

  renderAuto(auto, index) {
    const shortDescription = `${R.take(60, auto.description)}`;
    const {addAutoToBasket} = this.props;

    return (
      <div className={'col-sm-4 col-lg-4 col-md-4 book-list'} key={index}>
        <div className={'thumbnail'}>
          <img className={'img-thumbnail'} src={auto.image} alt={auto.name} />
          <div className={'caption'}>
            <h4 className={'pull-right'}>${auto.price}</h4>
            <h4 className={''}>
              <Link to={`/autos/${auto.id}`}>{auto.name}</Link>
            </h4>
            <p>{shortDescription}</p>
            <p className={'itemButton'}>
              <button className={'btn btn-primary'}
                      onClick={() => addAutoToBasket(auto.id)}
              >Buy now!
              </button>
              <Link to={`/autos/${auto.id}`}
                    className={'btn btn-default'}

              >
                More info...
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {autos, loadMoreAutos} = this.props
    return (
      <Layout>
        <div className={'books row'}>
          {autos.map((auto, index) => this.renderAuto(auto, index))}
        </div>
        <div className={'row'}>
          <div className={'col-md-12'}>
            <button
              onClick={loadMoreAutos}
              className={'pull-right btn btn-primary'}
            >
              Load More!
            </button>

            {admin.key === 1 && <button
              onClick={this.openModal}
              className={'pull-right btn btn-primary'}
            >
              Add auto!
            </button>}
            <AddAutoModal open={this.state.open} onClose={this.closeModal} />









            {/*<Dialog*/}
            {/*  open={this.state.open}*/}
            {/*  // TransitionComponent={Transition}*/}
            {/*  keepMounted*/}
            {/*  onClose={this.closeModal}*/}
            {/*  className={styles.lab5_dialog1}*/}
            {/*>*/}
            {/*  <Container component='main' maxWidth='xs'>*/}
            {/*    <CssBaseline />*/}
            {/*    <div className={classes.paper}>*/}
            {/*      <Avatar className={classes.avatar}>*/}
            {/*        <LockOutlinedIcon />*/}
            {/*      </Avatar>*/}
            {/*      <Typography component='h1' variant='h5'>*/}
            {/*        Sign up*/}
            {/*      </Typography>*/}
            {/*      <form className={classes.form} noValidate>*/}
            {/*        <Grid container spacing={2}>*/}
            {/*          <Grid item xs={12} sm={6}>*/}
            {/*            <TextField*/}
            {/*              autoComplete='fname'*/}
            {/*              name='firstName'*/}
            {/*              variant='outlined'*/}
            {/*              required*/}
            {/*              fullWidth*/}
            {/*              id='firstName'*/}
            {/*              label='First Name'*/}
            {/*              autoFocus*/}
            {/*            />*/}
            {/*          </Grid>*/}
            {/*          <Grid item xs={12} sm={6}>*/}
            {/*            <TextField*/}
            {/*              variant='outlined'*/}
            {/*              required*/}
            {/*              fullWidth*/}
            {/*              id='lastName'*/}
            {/*              label='Last Name'*/}
            {/*              name='lastName'*/}
            {/*              autoComplete='lname'*/}
            {/*            />*/}
            {/*          </Grid>*/}
            {/*          <Grid item xs={12}>*/}
            {/*            <TextField*/}
            {/*              variant='outlined'*/}
            {/*              required*/}
            {/*              fullWidth*/}
            {/*              id='email'*/}
            {/*              label='Email Address'*/}
            {/*              name='email'*/}
            {/*              autoComplete='email'*/}
            {/*            />*/}
            {/*          </Grid>*/}
            {/*          <Grid item xs={12}>*/}
            {/*            <TextField*/}
            {/*              variant='outlined'*/}
            {/*              required*/}
            {/*              fullWidth*/}
            {/*              name='password'*/}
            {/*              label='Password'*/}
            {/*              type='password'*/}
            {/*              id='password'*/}
            {/*              autoComplete='current-password'*/}
            {/*            />*/}
            {/*          </Grid>*/}
            {/*          <Grid item xs={12}>*/}
            {/*            <FormControlLabel*/}
            {/*              control={<Checkbox value='allowExtraEmails' color='primary' />}*/}
            {/*              label='I want to receive inspiration, marketing promotions and updates via email.'*/}
            {/*            />*/}
            {/*          </Grid>*/}
            {/*        </Grid>*/}
            {/*        <Link*/}
            {/*          href='/'*/}
            {/*        >*/}
            {/*          <Button*/}
            {/*            // type="submit"*/}
            {/*            fullWidth*/}
            {/*            variant='contained'*/}
            {/*            color='primary'*/}
            {/*            className={classes.submit}*/}
            {/*          >*/}
            {/*            Sign Up*/}
            {/*          </Button>*/}
            {/*        </Link>*/}
            {/*        <Grid container justify='flex-end'>*/}
            {/*          <Grid item>*/}
            {/*            <Link href='#' variant='body2'>*/}
            {/*              Already have an account? Sign in*/}
            {/*            </Link>*/}
            {/*          </Grid>*/}
            {/*        </Grid>*/}
            {/*      </form>*/}
            {/*    </div>*/}
            {/*    <Box mt={5}>*/}
            {/*      <Copyright />*/}
            {/*    </Box>*/}
            {/*  </Container>*/}


            {/*</Dialog>*/}






          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  autos: getAutos(state, ownProps)
})

const mapDispatchToProps = {
  fetchAutos,
  loadMoreAutos,
  addAutoToBasket,
  fetchCategories,
}

export default connect(mapStateToProps, mapDispatchToProps)(Auto)
