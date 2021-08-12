import React, { useState } from 'react';
import {TextField,Button,Typography,Paper} from "@material-ui/core";
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/Posts';

const Form = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [postData,setPostdata] = useState({
        creator:"", title:"", message:"", tags:"", selectedFile:""
    });

    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(createPost(postData));
    }
    const clear =()=>{

    }
    
    return (
        <Paper className={classes.paper} noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <form autoComplete="off">
                <Typography variant="h6">Creating Memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator}onChange={(e)=>setPostdata({...postData, creator: e.target.value})} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title}onChange={(e)=>setPostdata({...postData, title: e.target.value})} />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message}onChange={(e)=>setPostdata({...postData, message: e.target.value})} />
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags}onChange={(e)=>setPostdata({...postData, tags: e.target.value})} />
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64})=> setPostdata({...postData, selectedFile:base64})} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" onClick={clear} color="secondary" size="small" fullWidth>Clear</Button>

            </form>
        </Paper>
    );
};

export default Form;