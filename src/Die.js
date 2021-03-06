import React, { Component } from "react";
import "./Die.css";

 class Die extends Component  {

    handleClickD = () => {
        this.props.handleClick(this.props.idx)
    }

    render () {
        return (
            <button 
                className={"Die"}
                style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
                onClick={this.handleClickD}
            >
                {this.props.val}
            </button>
    );
    }
  }


export default Die;
