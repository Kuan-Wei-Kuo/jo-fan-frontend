import React from 'react';

import Center from '../components/Center';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import { withStyles } from '@material-ui/core/styles';

import '../css/style.css';

const styles = theme => ({
    left: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    m2: {
      marginTop: theme.spacing(2),
    },
    m6: {
      marginTop: theme.spacing(6),
    },
    padding: {
        paddingTop: theme.spacing(3)
    },
    box: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(2)
    },
    link: {
        marginLeft: theme.spacing(2),
    }
});

class Login extends React.Component {

    render() {
        const { classes } = this.props;
        return(
            <Grid container spacing={0} className="fill-screen">
                <Grid item xs={6} className={classes.left}></Grid>
                <Grid item xs={6}>
                    <Center>
                        <Container maxWidth="sm" className={classes.padding}>
                            <Typography variant="h3" align="center">
                                揪飯趣
                            </Typography>
                            <FormControl fullWidth>
                                <TextField
                                    id="email-input"
                                    label="Email"
                                    type="email"
                                    autoComplete="current-email"
                                    margin="normal"
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <TextField
                                    id="password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                />
                            </FormControl>

                            <Button fullWidth variant="contained" className={classes.m2}>
                                登入
                            </Button>

                            <Divider variant="fullWidth" className={classes.m2} />
                            
                            <Button fullWidth variant="contained" color="primary" className={classes.m2}>
                                Facebook
                            </Button>
                            <Button fullWidth variant="contained" color="secondary" className={classes.m2}>
                                Google
                            </Button>
                            <Box align="center" className={classes.box}>
                                New to 揪飯趣 ?
                                <Link href="#" className={classes.link}>
                                    註冊
                                </Link>
                            </Box>
                        </Container>
                    </Center>
                </Grid>
            </Grid>
        )
    }

}

export default withStyles(styles)(Login);