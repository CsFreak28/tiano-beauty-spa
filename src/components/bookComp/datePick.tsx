import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { Dayjs } from "dayjs";
export const DatePick = () => {
  const [value, setValue] = useState<Dayjs | null>();
  console.log(value)
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="First example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};
