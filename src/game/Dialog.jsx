import React from 'react';
import Button from '@material-ui/core/Button';

import {Box, Typography, Dialog, DialogActions, DialogTitle, DialogContent} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',

        '& .MuiDialog-paperWidthFalse': {
            width: "80%"
        }
    },
}));

export default function GameDialog({text, title, open, action}) {
    const classes = useStyles();

    return (
        <Dialog
            open={open}
            maxWidth={false}
            onClose={action}
            disableBackdropClick
            className={classes.root}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle>{title}</DialogTitle>

            <DialogContent>
                <Typography>{text}</Typography>
            </DialogContent>

            <DialogActions>
                <Box textAlign={"center"} width={"100%"} mb={1.5}>
                    <Button onClick={action} variant={"contained"}>
                        Restart
                    </Button>
                </Box>
            </DialogActions>
        </Dialog>
    );
}