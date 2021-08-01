import React from "react";
import {Container,AppBar,Grow,Grid, Typography} from "@material-ui/core";

const App = () => {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit" >
                <Typography variant="h2" align="center">Blogs</Typography>
                <img src="" alt="logo" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>

                    </Grid>                    
                    <Grid item xs={12} sm={4}>

                    </Grid>                    
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;