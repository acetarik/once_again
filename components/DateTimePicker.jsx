import React from "react";
import Datetime from "react-datetime";
// import "./DateTimePicker.css";

function DateTimePicker({ value, onChange }) {
  return (
    <Datetime
      value={value}
      onChange={onChange}
      inputProps={{ className: "date-time-input" }}
      dateFormat="DD/MM/YYYY"
      timeFormat="HH:mm"
    />
  );
}

export default DateTimePicker;
