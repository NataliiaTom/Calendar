import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Autocomplete,
  Box,
} from "@mui/material";
// import { EventFormData, ITodo } from "./EventCalendar";

const AddEventModal = ({
  open,
  handleClose,
  eventFormData,
  setEventFormData,
  onAddEvent,
  todos,
}) => {
  const { description } = eventFormData;

  const onClose = () => handleClose();

  const onChange = (event) => {
    setEventFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onDayChange = (event) => {
    setEventFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onTimeChange = (event) => {
    setEventFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onChangeNotes = (event) => {
    setEventFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleTodoChange = (e, value) => {
    setEventFormData((prevState) => ({
      ...prevState,
      todoId: value?._id,
    }));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add event</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a event, please fill in the information below.
        </DialogContentText>
        <Box component="form">
          <TextField
            name="description"
            value={description}
            margin="dense"
            id="description"
            label="Event name"
            type="text"
            fullWidth
            variant="outlined"
            onChange={onChange}
            inputProps={{ maxLength: 30 }}
          />
          <TextField
            name="day"
            // value={day}
            margin="dense"
            id="date"
            type="date"
            fullWidth
            main={new Date().toISOString().slice(0, -8)}
            variant="outlined"
            onChange={onDayChange}
          />
          <TextField
            name="time"
            // value={description}
            margin="dense"
            id="description"
            type="time"
            fullWidth
            min={new Date().toISOString().slice(0, -8)}
            variant="outlined"
            onChange={onTimeChange}
          />
          <TextField
            name="notes"
            label="notes"
            // value={description}
            margin="dense"
            id="description"
            type="text"
            fullWidth
            inputProps={{ maxLength: 30 }}
            variant="outlined"
            onChange={onChangeNotes}
          />
          {/* <Autocomplete
            onChange={handleTodoChange}
            disablePortal
            id="combo-box-demo"
            options={todos}
            sx={{ marginTop: 4 }}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => <TextField {...params} label="Todo" />}
          /> */}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={onClose}>
          Cancel
        </Button>
        <Button
          disabled={description === ""}
          color="success"
          onClick={onAddEvent}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEventModal;
