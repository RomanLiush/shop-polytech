import React, {useState, forwardRef} from 'react';
import {connect} from 'react-redux';

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import styles from '../auth/styles.module.css'
import {CssBaseline} from '@material-ui/core'

import {
  addNewAuto,
} from '../../action';
import mapDispatchToProps from 'react-redux/lib/connect/mapDispatchToProps'
import {getAutos, getNewAuto} from '../../selectors'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))


function AddAutoModal({open, onClose}) {
  const classes = useStyles()

  const [id, setId] = useState(0);
  const [category, setCategory] = useState(0);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);
  const [size, setSize] = useState(0);
  const [image, setImage] = useState(null);
  const [desc, setDesc] = useState('');

  let newAuto = {
    'id': id,
    'categoryId': +category,
    'name': name,
    'price': price,
    'weight': weight,
    'size': size,
    'image': image,
    'description': desc,
  }

  localStorage.setItem('newAuto', JSON.stringify(newAuto))

  const [open_3, setOpen_3] = useState(false);
  const handleClickOpen_3 = () => {
    setOpen_3(true)
  }
  const handleClose_3 = () => {
    setOpen_3(false)
  }

  return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        className={styles.lab5_dialog1}
      >
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            {/*<Avatar className={classes.avatar}>*/}
            {/*  <LockOutlinedIcon />*/}
            {/*</Avatar>*/}
            <Typography component='h1' variant='h5'>
              Add new auto
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete='fname'
                    name='firstName'
                    variant='outlined'
                    required
                    fullWidth
                    id='id'
                    label='ID'
                    type={'number'}
                    autoFocus
                    onChange={event => setId(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='categoryID'
                    label='Category ID'
                    name='Category ID'
                    type={'number'}
                    onChange={event => setCategory(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id={'name'}
                    label='Name'
                    name={'Name'}
                    onChange={event => setName(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='price'
                    label='Price'
                    name='Price'
                    type={'number'}
                    onChange={event => setPrice(event.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='weight'
                    name='Weight'
                    label={'Weight'}
                    type={'number'}
                    onChange={event => setWeight(event.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='size'
                    name='Size'
                    label={'Size'}
                    type={'number'}
                    onChange={event => setSize(event.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='image'
                    name='Image'
                    type={'file'}
                    onChange={event => setImage(event.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='description'
                    name='Description'
                    label={'Descriptions'}
                    onChange={event => setDesc(event.target.value)}
                  />
                </Grid>


                {/*<Grid item xs={12}>*/}
                {/*  <FormControlLabel*/}
                {/*    control={<Checkbox value='allowExtraEmails' color='primary' />}*/}
                {/*    label='I want to receive inspiration, marketing promotions and updates via email.'*/}
                {/*  />*/}
                {/*</Grid>*/}
              </Grid>
              <Link
                href='/'
              >
                <Button
                  // type="submit"
                  fullWidth
                  variant='contained'
                  color='primary'
                  className={classes.submit}
                  onClick={
                    addNewAuto
                  }
                >
                  Add auto
                </Button>
              </Link>
              {/*<Grid container justify='flex-end'>*/}
              {/*  <Grid item>*/}
              {/*    <Link href='#' variant='body2'>*/}
              {/*      Already have an account? Sign in*/}
              {/*    </Link>*/}
              {/*  </Grid>*/}
              {/*</Grid>*/}
            </form>
          </div>
          {/*<Box mt={5}>*/}
          {/*  <Copyright />*/}
          {/*</Box>*/}
        </Container>


      </Dialog>
  )
}

const mapStateToProps = (state, newAuto) => ({
  newAutos: getNewAuto(state, newAuto)
})

export default connect(mapStateToProps, mapDispatchToProps)(AddAutoModal)
