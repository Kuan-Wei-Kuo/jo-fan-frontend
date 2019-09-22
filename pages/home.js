import React from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@material-ui/core/MobileStepper';

import { withStyles } from '@material-ui/core/styles';

import '../css/style.css';

const styles = theme => ({
    box: {
        marginTop: theme.spacing(2)
    },
    paper: {
        marginTop: theme.spacing(2),
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        marginTop: theme.spacing(2)
    },
    'search-version': {
        background: 'rgba(0, 0, 255, 0.3)',
        paddingTop: '30px',
        paddingBottom: '60px'
    },
    'search-title': {
        padding: '160px 0 30px 0'
    },
    'intro-section': {
        marginTop: theme.spacing(2)
    },
    'intro-stepper': {
        justifyContent: 'center',
        padding: theme.spacing(2)
    },
    img: {
      display: 'block',
      overflow: 'hidden',
      width: '100%',
    },
    'intro-stepper-dot': {
        width: 16,
        height: 16
    }
});

const tutorialSteps = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bird',
      imgPath:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bali, Indonesia',
      imgPath:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
      label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
      imgPath:
        'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Goč, Serbia',
      imgPath:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    }
];
  

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            maxSteps: tutorialSteps.length
        }
    }

    setActiveStep = (step) => {
        this.setState({ activeStep: step });
    }

    handleStepChange = (step) => {
        this.setActiveStep(step);
    }
    
    handleNext = () => {
        this.setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    handleBack = () => {
        this.setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    render() {
        const { classes } = this.props;
        const { activeStep,  maxSteps } = this.state;
        return(
            <div>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="h6">
                            揪飯趣
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container maxWidth={false} className={classes['search-version']}>
                    <Container maxWidth="md">
                        <Typography variant="h3" className={classes['search-title']}>
                            挑選您喜愛的菜單
                        </Typography>
                        <Paper className={classes.paper}>
                            <InputBase
                                className={classes.input}
                                placeholder="尋找菜單"
                                inputProps={{ 'aria-label': '尋找菜單' }}
                            />
                            <IconButton className={classes.iconButton} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Container>
                </Container>
                <Container maxWidth="md">
                    <Box className={classes.box}> 
                        <Typography variant="h6">
                            熱門菜單
                        </Typography>
                        <Divider variant="fullWidth" />
                        <Box className={classes.box}>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                                                title="Contemplative Reptile"
                                            />
                                                <CardContent>
                                                <Typography variant="subtitle1" component="h6">
                                                    地球是平的
                                                </Typography>
                                                <Rating value={4} readOnly />
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                                                title="Contemplative Reptile"
                                            />
                                                <CardContent>
                                                <Typography variant="subtitle1" component="h6">
                                                    地球是平的
                                                </Typography>
                                                <Rating value={4} readOnly />
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                                                title="Contemplative Reptile"
                                            />
                                                <CardContent>
                                                <Typography variant="subtitle1" component="h6">
                                                    地球是平的
                                                </Typography>
                                                <Rating value={4} readOnly />
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                                                title="Contemplative Reptile"
                                            />
                                                <CardContent>
                                                <Typography variant="subtitle1" component="h6">
                                                    地球是平的
                                                </Typography>
                                                <Rating value={4} readOnly />
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className={classes.box}> 
                        <Typography variant="h6">
                            附近菜單
                        </Typography>
                        <Divider variant="fullWidth" />
                        <Box className={classes.box}>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                                                title="Contemplative Reptile"
                                            />
                                                <CardContent>
                                                <Typography variant="subtitle1" component="h6">
                                                    地球是平的
                                                </Typography>
                                                <Rating value={4} readOnly />
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                                                title="Contemplative Reptile"
                                            />
                                                <CardContent>
                                                <Typography variant="subtitle1" component="h6">
                                                    地球是平的
                                                </Typography>
                                                <Rating value={4} readOnly />
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                                                title="Contemplative Reptile"
                                            />
                                                <CardContent>
                                                <Typography variant="subtitle1" component="h6">
                                                    地球是平的
                                                </Typography>
                                                <Rating value={4} readOnly />
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                                                title="Contemplative Reptile"
                                            />
                                                <CardContent>
                                                <Typography variant="subtitle1" component="h6">
                                                    地球是平的
                                                </Typography>
                                                <Rating value={4} readOnly />
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
                <Container maxWidth="md" className={classes['intro-section']}>
                    <SwipeableViews 
                        index={activeStep}
                        onChangeIndex={this.handleStepChange}
                        enableMouseEvents>
                        {tutorialSteps.map((step, index) => (
                            <div key={step.label}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                <img className={classes.img} src={step.imgPath} alt={step.label} />
                                ) : null}
                            </div>
                        ))}
                    </SwipeableViews>
                    <MobileStepper
                        variant="dots"
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        classes={{root: classes['intro-stepper'], dot: classes['intro-stepper-dot']}}
                    />
                </Container>
            </div>
        )
    }

}

export default withStyles(styles)(Home);