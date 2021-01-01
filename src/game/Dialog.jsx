import React from 'react';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function GameDialog({text, open, action}) {
    return (
        <Dialog
            open={open}
            maxWidth={'md'}
            onClose={action}
            disableBackdropClick
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle>{text}</DialogTitle>

            <DialogActions>
                <Button onClick={action} color="primary">
                    Restart
                </Button>
            </DialogActions>
        </Dialog>
    );
}