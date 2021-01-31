import React, {useState} from "react";
import {Box, Typography, IconButton, DialogTitle, DialogActions, DialogContent} from "@material-ui/core";
import {title, gameDescription} from "../config";
import InfoIcon from '@material-ui/icons/Info';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    tooltipIcon: {
        top: '50%',
        left: '100%',
        position: 'absolute',
        transform: 'translateY(-50%)'
    }
}));

export default function Topbar() {
    const classes = useStyles();

    const [rulesDialogOpen, setRulesDialogOpen] = useState(false);

    return (
        <Box textAlign="center">
            <Box display="flex" justifyContent="center" alignItems="center">
                <Box position="relative">
                    <Typography variant={"h5"}>{title}</Typography>

                    <Box className={classes.tooltipIcon}>
                        <IconButton onClick={() => setRulesDialogOpen(true)}>
                            <InfoIcon fontSize={"small"} />
                        </IconButton>
                    </Box>
                </Box>
            </Box>

            <Dialog
                open={rulesDialogOpen}
                maxWidth={'md'}
                onClose={() => setRulesDialogOpen(false)}
            >
                <DialogTitle>How to play</DialogTitle>

                <DialogContent>
                    {gameDescription}
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => setRulesDialogOpen(false)}>
                        Got it
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}