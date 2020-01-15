import React, { Component } from "react";
import DatePicker from "react-datepicker";

class DatePick extends Component {
  state = { startDate: "" };

  handleChange = date => {
    console.log("date: ", date);
    this.setState({ startDate: date });
  };

  render() {
    //console.log("date : ", this.state.startDate);
    return (
      <DatePicker
        format="MM-DD-YYYY"
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default DatePick;
