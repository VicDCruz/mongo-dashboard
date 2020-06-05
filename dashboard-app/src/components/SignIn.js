/**
 *
 * SignIn
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://bazindicadores.com/">
        DHT
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    // background: 'linear-gradient(0deg, #30664B 30%, #4DB082 90%)',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    // margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
    background: 'linear-gradient(0deg, #ffffff 10%, #4DB082 99%)',
  },
  div: {
    margin: theme.spacing(2),
  },
});

export class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', hasClicked: false };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
      hasClicked: false,
    });
  };

  handleSubmit = () => {
    // this.props.checkCredentials(this.state.email, this.state.password);
    this.setState({ hasClicked: true });
    // event.preventDefault();
  };

  goTo = url => {
    window.location.href = url;
  };

  render() {
    const { classes } = this.props;

    // if (this.props.giveAccess) this.goTo('/getAccess');

    return (
      <div className={classes.root}>
        <Container component="main" maxWidth="xs">
          <Paper elevation={3}>
            <div className={classes.div}>
              <CssBaseline />
              {/* {!this.props.giveAccess && this.state.hasClicked && (
                <Toastr severity="warning" type="error" />
              )} */}
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  BAZ Front-end
                </Typography>
                <form className={classes.form}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Correo electrónico"
                    name="email"
                    autoComplete="email"
                    type="email"
                    autoFocus
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                  />
                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                    onClick={this.handleSubmit}
                  >
                    Ingresar
                  </Button>
                </form>
              </div>
              <Box mt={8}>
                <Copyright />
              </Box>
            </div>
          </Paper>
        </Container>
      </div>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object,
};

export default compose(withStyles(styles))(SignIn);
