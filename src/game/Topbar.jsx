import React, {useState} from "react";
import {Box, Typography, IconButton, DialogTitle, DialogActions, DialogContent} from "@material-ui/core";
import {title, gameDescription} from "../config";
import InfoIcon from '@material-ui/icons/Info';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

export default function Topbar() {
    const [rulesDialogOpen, setRulesDialogOpen] = useState(false);

    return (
        <Box textAlign="center">
            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography variant={"h5"}>{title}</Typography>

                <Box ml={2}>
                    <IconButton onClick={() => setRulesDialogOpen(true)}>
                        <InfoIcon />
                    </IconButton>
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