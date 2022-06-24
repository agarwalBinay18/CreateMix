import React from 'react'
import { Grid, Paper, Button, Typography } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';
import { AlertTitle } from '@material-ui/lab';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { blue } from '@material-ui/core/colors';
import { Table, TableHead, TableBody, TableCell, TableRow } from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import TableFooter from '@material-ui/core/TableFooter';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const CreateMix = () => {
    const paperStyle = { padding: '0px 100px 80px 50px', }
    const btnStyle = {  }
    const uploadbtnStyle = {  }
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'nowwrap',

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
        table: {
            width: 'auto',

            float: 'top'
            //  marginLeft:250,


        },
        contbtn:{
            marginTop: theme.spacing(3),
            marginLeft: theme.spacing(40),
            marginRight: theme.spacing(1),
            padding: '0 1px 1px 1px',
            width: '200px',
            height:40
          
        },
        tableHead: {
            // backgroundColor: theme.palette.primary.main,
            width: 2
        },
        tableCell: {
            // color: theme.palette.secondary.main
            width: 2,
            padding: 2
        },

    }));
    function createData(Element, Min, Max, loss) {
        return { Element, Min, Max, loss };
    }
    const rows = [
        createData('C', 3, 3.3, 0),
        createData('Si', 3.4, 3.8, 0),
        createData('Mn', 0, 0.5, 0),
        createData('S', 0, 0.012, 0),
        createData('P', 0, 0.05, 0),
    ];
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
    const [alignment, setAlignment] = React.useState('value2');

    const handleChange2 = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <>
            <Paper elevation={0} style={paperStyle}>
                <div className={classes.root}>
                    <TextField select className={classes.textField} label="Metal Grade" variant="outlined" size="small" defaultValue={" "} required />
                    <TextField className={classes.textField} label="ChargeMix Name" variant="outlined" size="small" defaultValue={" "} required />
                    <TextField className={classes.textField} label="Furnace Size(in Kg)" variant="outlined" size="small" defaultValue={" "} required />
                </div>
                <div className={classes.root}>
                    <TextField className={classes.textField} label="Heats Per Day" variant="outlined" size="small" defaultValue={" "} required />
                    <FormControlLabel className={classes.textField} control={<Switch checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />} label="Electricity Model" />
                </div>
                <div className={classes.root}>
                    <TextField className={classes.textField} label="Tapping Temperature" variant="outlined" size="small" defaultValue={" "} required />
                    <TextField className={classes.textField} label="Tapping Time(minutes)" variant="outlined" size="small" defaultValue={" "} required />
                </div>
                <div className={classes.root}>
                    <ToggleButtonGroup color="secondary" value={alignment} exclusive onChange={handleChange2} size="small" style={{ paddingTop: 20, paddingLeft: 10 }}>
                        <ToggleButton value="value1" style={{ height: 45, width: 300 }}>Use Elementary Recovery Rates</ToggleButton>
                        <ToggleButton value="value2" style={{ height: 45 }}>Use Raw Material Composition</ToggleButton>
                        In Inventory
                    </ToggleButtonGroup>
                    <TextField className={classes.textField} label="Mg in FeSiMg(in %)" variant="outlined" size="small" defaultValue={" "} required />
                    <Table className={classes.table} size="small" >
                        <TableHead>
                            <TableRow>
                                <TableCell>Element</TableCell>
                                <TableCell align="right">Min</TableCell>
                                <TableCell align="right">Max</TableCell>
                                <TableCell align="right">Loss(%)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.Element}>
                                    <TableCell component="th" scope="row">
                                        {row.Element}
                                    </TableCell>
                                    <TableCell align="right">{row.Min}</TableCell>
                                    <TableCell align="right">{row.Max}</TableCell>
                                    <TableCell align="right">{row.loss}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter style={{fontWeight:'bold'}}>
                             Target Chemistry
                            </TableFooter>
                    </Table>

                </div>
                    
                <div>
                    <input style={{ display: "none" }} id="contained-button-file" type="file" />
                    <label htmlFor="contained-button-file">
                        <Button endIcon={<CloudUploadIcon/>} variant="contained" color="primary" component="span" style={uploadbtnStyle}>Upload</Button> </label>
                    <Button   endIcon={<ArrowForwardIcon/>}className={classes.contbtn} variant='contained' color='primary' onClick={handleClick}>CONTINUE</Button>
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






















