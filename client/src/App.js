import React, {useEffect} from "react";
import {Container,AppBar,Grow,Grid, Typography} from "@material-ui/core";
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";
import useStyles from "./styles";
import {useDispatch} from "react-redux";
import {getPosts} from "./actions/Posts";

import image from "./images/social-m.png";

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts());
    },[]);
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit" >
                <Typography className={classes.heading} variant="h2" align="center">Blogs</Typography>
                <img className={classes.image} src={image} alt="logo" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                    <Posts />
                    </Grid>                    
                    <Grid item xs={12} sm={4}>
                    <Form />
                    </Grid>                    
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;