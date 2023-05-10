import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

import useStyles from './styles'

const Form = () => {
    const classes = useStyles();
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })

    const handleSubmit = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Post</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidthvalue={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
                <TextField name="title" variant="outlined" label="Title" fullWidthvalue={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
                <TextField name="message" variant="outlined" label="Message" fullWidthvalue={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
                <TextField name="tags" variant="outlined" label="Tags" fullWidthvalue={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
            </form>
        </Paper>
    )
}

export default Form