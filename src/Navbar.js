import React, { Component } from "react";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Snackbar } from "@mui/material";
import { Close } from '@mui/icons-material';
import { IconButton }  from '@mui/material';
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
    constructor (props) {
        super(props);
        this.state = { format: "hex", open: false };
        this.handleChange = this.handleChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    handleChange (e) {
        this.setState({ format: e.target.value, open: true });
        this.props.handleChange(e.target.value);
    }

    closeSnackbar () {
        this.setState({ open: false });
    }

    render () {
        const { level, changeLevel } = this.props;
        const { format, open } = this.state;
        return (
            <header className="Navbar">
                <div className="logo">
                    <a href="#">reactcolorpicker</a>
                </div>
                <div className="slider-container">
                    <span>Level : {level}</span>
                <div className="slider">
                <Slider 
                    defaultValue={level} 
                    min={100} 
                    max={900} 
                    step={100} 
                    onChange={changeLevel}
                />
                </div>
                </div>
                <div className="select-container">
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem value="hex">HEX - #fffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar 
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}   
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id="message-id">Format changed to {format}</span>}
                    ContentProps={{ "aria-describedby": "message-id" }}
                    onClose={this.closeSnackbar}
                    action={[ 
                    <IconButton 
                        onClick={this.closeSnackbar} 
                        color="inherit"
                        key="close"
                        aria-label="close"
                    >
                        <Close />
                    </IconButton> 
                    ]}
                />
            </header>
        );
    }
}

export default Navbar;