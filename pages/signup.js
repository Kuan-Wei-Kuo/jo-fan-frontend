import React from 'react';

import Head from 'next/head'
import Router from 'next/router'

import Center from '../components/Center';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import FormControl from '@material-ui/core/FormControl';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Collapse from '@material-ui/core/Collapse';
import { InputLabel, Input, IconButton, InputAdornment, FilledInput, OutlinedInput, Card, CardContent, LinearProgress } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import '../css/style.css';

const styles = theme => ({
    m2: {
        marginTop: theme.spacing(2),
    },
    mleft: {
        marginLeft: theme.spacing(2),
    }
});

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {
                email: '',
                password: '',
                confirmPassword: '',
                verificationCode: '',
                showPassword: false
            },
            steps: {
                userInfo: {
                    handle: () => {
                        this.setState({
                            stepInfoChecked: true,
                            stepVerifyChecked: false,
                            stepProgress: false
                        })
                    }
                },
                verificationCode: {
                    handle: () => {
                        this.setState({
                            stepInfoChecked: false,
                            stepVerifyChecked: false,
                            stepProgress: true
                        })
                        setTimeout(() => {
                            this.setState({
                                stepInfoChecked: false,
                                stepVerifyChecked: true,
                                stepProgress: false
                            })
                        }, 3 * 1000)
                    }
                },
                complete: {
                    handle: () => {
                        this.setState({
                            stepInfoChecked: false,
                            stepVerifyChecked: false,
                            stepComplete: false,
                            stepProgress: true
                        })
                        setTimeout(() => {
                            this.setState({
                                stepInfoChecked: false,
                                stepVerifyChecked: false,
                                stepComplete: true,
                                stepProgress: false
                            })
                            setTimeout(() => {
                                Router.push("/")
                            }, 3 * 1000)
                        }, 3 * 1000)
                    }
                }
            },
            stepInfoChecked: true,
            stepVerifyChecked: false,
        }
    }

    handleClickShowPassword = () => {
        const values = this.state.values;
        values.showPassword = !values.showPassword;
        this.setState({ values: values });
    }

    handleMouseDownPassword = (e) => {
        e.preventDefault();
    }

    handleChange = (e, name) => {
        const values = this.state.values;
        values[name] = e.target.value;
        this.setState({ values: values });
    }

    handleStepChange = (e, name) => {
        this.state.steps[name].handle();
    }

    render() {
        const { classes } = this.props;
        const { values, stepInfoChecked, stepVerifyChecked, stepProgress, stepComplete } = this.state;
        return (
            <Center>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                    <title>建立您的揪飯趣帳戶</title>
                </Head>
                <Container maxWidth="sm" className={classes.padding}>
                    <div>
                        <Collapse in={stepInfoChecked}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5">
                                        開始建立您的揪飯趣帳戶
                            </Typography>
                                    <Grid container spacing={2} className={classes.m2}>
                                        <Grid item xs={12}>
                                            <FormControl fullWidth>
                                                <TextField
                                                    id="email"
                                                    label="Email"
                                                    type="email"
                                                    variant="outlined"
                                                    value={values.email}
                                                    onChange={(e) => { this.handleChange(e, 'email') }}
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs>
                                            <FormControl variant="outlined" fullWidth>
                                                <InputLabel htmlFor="password">Password</InputLabel>
                                                <OutlinedInput
                                                    id="password"
                                                    type={values.showPassword ? 'text' : 'password'}
                                                    value={values.password}
                                                    onChange={(e) => { this.handleChange(e, 'password') }}
                                                    labelWidth={70}
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <FormControl variant="outlined" fullWidth>
                                                <InputLabel htmlFor="confirm-password">Confirm</InputLabel>
                                                <OutlinedInput
                                                    id="confirm-password"
                                                    type={values.showPassword ? 'text' : 'password'}
                                                    value={values.confirmPassword}
                                                    onChange={(e) => { this.handleChange(e, 'confirmPassword') }}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={this.handleClickShowPassword}
                                                                onMouseDown={this.handleMouseDownPassword}
                                                                edge="end"
                                                            >
                                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    labelWidth={60}
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item align="right" xs={12}>
                                            <Button variant="contained" onClick={(e) => { this.handleStepChange(e, 'verificationCode') }}>Next</Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Collapse>
                        <Collapse in={stepVerifyChecked}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5">
                                        信箱用戶驗證
                                    </Typography>
                                    <Grid container spacing={2} className={classes.m2}>
                                        <Grid item xs={12}>
                                            <FormControl fullWidth>
                                                <TextField
                                                    id="verifacation-code"
                                                    label="Verification Code"
                                                    type="text"
                                                    variant="outlined"
                                                    value={values.verificationCode}
                                                    onChange={(e) => { this.handleChange(e, 'verificationCode') }}
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button fullWidth v ariant="contained">Send Verification Code</Button>
                                        </Grid>
                                        <Grid item align="right" xs={12}>
                                            <Button variant="contained" onClick={(e) => { this.handleStepChange(e, 'userInfo') }}>Previous</Button>
                                            <Button className={classes.mleft} variant="contained" onClick={(e) => { this.handleStepChange(e, 'complete') }}>Next</Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Collapse>
                        <Collapse in={stepComplete}>
                            <Typography variant="h5">
                                恭喜您加入揪飯趣，稍後將自動跳轉回首頁。
                            </Typography>
                        </Collapse>
                        <Collapse in={stepProgress}>
                            <LinearProgress />
                        </Collapse>
                    </div>
                </Container>
            </Center>
        )
    }

}

export default withStyles(styles)(SignUp);