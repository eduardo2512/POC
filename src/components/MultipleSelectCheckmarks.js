import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder"
];

export default function MultipleSelectCheckmarks() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = event => {
    const option = event.target.value;

    if (selectedOptions.length < 2 || option.length < 2) setSelectedOptions(option);
  };

  const renderOption = option => {
    const isDisabled =
      !selectedOptions.find(selectedOption => selectedOption === option) &&
      selectedOptions.length >= 2;
    return (
      <MenuItem key={option} value={option} disabled={isDisabled}>
        <Checkbox checked={selectedOptions.indexOf(option) > -1} />
        <ListItemText primary={option} />
      </MenuItem>
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Filtros</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedOptions}
          onChange={handleChange}
          input={<OutlinedInput label="Filtros" />}
          renderValue={selected => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map(name => renderOption(name))}
        </Select>
      </FormControl>
    </div>
  );
}
