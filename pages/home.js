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
    }
});

class Home extends React.Component {

    render() {
        const { classes } = this.props;
        return(
            <div>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <Typography variant="h6">
                            揪飯趣
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container maxWidth="md">
                    <Box align="center" className={classes.box}>
                        <Typography variant="h3">
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
                    </Box>
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
            </div>
        )
    }

}

export default withStyles(styles)(Home);