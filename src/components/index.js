import React from 'react'
import { Grid, Paper, Button, Typography } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';
import { AlertTitle } from '@material-ui/lab';

const CreateMix = () => {
    const paperStyle = { padding: '0px 150px 100px 50px', }
    const btnStyle = { margin: 50, }
    const uploadbtnStyle = { margin: 50 }
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginTop: theme.spacing(3),
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            padding: '0 1px 1px 1px',
            width: '200px',
        },
        alertBox: {
     
            width: '500px',
        },

    }));
    const styles = {
        hidden: {
            display: "none",
        },
        importLabel: {
            color: "black",
        },
    };
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <>
            <Paper elevation={0} style={paperStyle}>
                <div className={classes.root}>
                    <TextField select className={classes.textField} label="Metal Grade" variant="outlined" size="small" defaultValue={" "} required />
                    <TextField className={classes.textField} label="ChargeMix Name" variant="outlined" size="small" defaultValue={" "} required/>
                    <TextField className={classes.textField} label="Furnace Size(in Kg)" variant="outlined" size="small" defaultValue={" "} required />
                </div>
                <div className={classes.root}>
                    <TextField className={classes.textField} label="Heats Per Day" variant="outlined" size="small" defaultValue={" "} required/>
                    <FormControlLabel className={classes.textField} control={<Switch checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />} label="Electricity Model" />
                </div>
                <TextField className={classes.textField} label="Tapping Temperature" variant="outlined" size="small" defaultValue={" "} required/>
                <TextField className={classes.textField} label="Tapping Time(minutes)" variant="outlined" size="small" defaultValue={" "} required/>

                <div className={classes.root}>
                
                    <input style={{ display: "none" }} id="contained-button-file" type="file" />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span" style={uploadbtnStyle}>Upload</Button> </label>
                    <Button type='submit' style={btnStyle} variant='contained' color='primary' onClick={handleClick}>CONTINUE</Button>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} variant="filled" severity="error" className={classes.alertBox}>
                            <AlertTitle>Error in Excel_file</AlertTitle>
                            <li>At least one recovery rate is required in MS Scrap</li>
                            <li>Rate cannot be zero at cell E5</li>
                            <li> Rate cannot be zero at cell E8</li>
                        </Alert>
                    </Snackbar>
            </div>
            </Paper>

        </>
    )
}

export default CreateMix;






















