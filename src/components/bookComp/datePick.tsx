import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { Dayjs } from "dayjs";
import React from "react";
import { useEffect } from "react";
const DatePick = (props: { setDate: React.Dispatch<any> }) => {
  const [value, setValue] = useState<Dayjs | null>();
  useEffect(() => {
    if (value) {
      props.setDate({
        type: "updateAppointmentDate",
        payload: value.toString(),
      });
    }
  }, [value]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="pick a date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DatePick;
