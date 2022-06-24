

import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),

      // right: theme.spacing(20000),
      // left: theme.spacing(20000),
      // top: theme.spacing(20000),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(2),
      top: theme.spacing(2),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
  
   
   <MuiDialogTitle disableTypography className={classes.root} {...other} >
   
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
    
  );

});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    // paddingRight: theme.spacing(30),
    // paddingLeft: theme.spacing(30),
    // paddingTop: theme.spacing(30),
    
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(200),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs({children,title}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        TEST
      </Button>
      <Dialog aria-labelledby="customized-dialog-title" open={open} maxWidth='xl'>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}  >
        <IconButton >
         <InsertDriveFileOutlinedIcon/>
        </IconButton>
        {title}
        </DialogTitle>
        <DialogContent dividers>
          {children}
        </DialogContent>
       
      </Dialog>
    </div>
  );
}
