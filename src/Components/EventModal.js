import { SetStateAction, MouseEvent, Dispatch } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Box,
  Typography,
} from "@mui/material";
// import { IEventInfo } from "./EventCalendar";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const EventInfoModal = ({
  open,
  handleClose,
  onDeleteEvent,
  currentEvent,
  // onEditEvent,
  onEditDescription,
  onEditDay,
  onEditTime,
  onEditNote,
  allowEdit,
  allow,
  onCancelEvent,
  onSaveEvent,
  setColor,
}) => {
  const onClose = () => {
    handleClose();
    allowEdit();
  };

  return (
    <div sx={{ position: "relative" }}>
      <Dialog open={open} onClose={onClose}>
        {/* <DialogTitle>Event Info</DialogTitle> */}
        <input type="color" onChange={setColor}></input>
        <DialogContent>
          <DialogContentText>
            <Typography
              component={"span"}
              sx={{ fontSize: 14, marginTop: 3 }}
              color="text.secondary"
              gutterBottom
            >
              <input
                type="text"
                value={currentEvent?.description}
                onChange={onEditDescription}
              />
            </Typography>
          </DialogContentText>

          <DialogContentText>
            <Typography
              component={"span"}
              sx={{ fontSize: 14, marginTop: 3 }}
              color="text.secondary"
            >
              <input
                type="date"
                value={currentEvent?.day}
                onChange={onEditDay}
              />
            </Typography>
          </DialogContentText>

          <DialogContentText>
            <Typography
              component={"span"}
              sx={{ fontSize: 14, marginTop: 3 }}
              color="text.secondary"
            >
              <input
                type="time"
                value={currentEvent?.time}
                onChange={onEditTime}
              />
            </Typography>
          </DialogContentText>

          <DialogContentText>
            <Typography
              component={"span"}
              sx={{ fontSize: 14, marginTop: 3 }}
              color="text.secondary"
            >
              <input
                type="text"
                value={currentEvent?.notes}
                onChange={onEditNote}
              />
            </Typography>
          </DialogContentText>

          <Box component="form"></Box>
        </DialogContent>

        <Button
          // color="error"
          onClick={onClose}
          sx={{ position: "absolute", top: 0, right: 0, zIndex: 2000 }}
        >
          {/* Close */}
          <HighlightOffIcon />
        </Button>

        {/* <DialogActions> */}
        {!allow ? (
          <div>
            <Button color="error" onClick={onDeleteEvent} sx={{ width: "50%" }}>
              DISCARD
            </Button>
            <Button onClick={allowEdit} sx={{ width: "50%" }}>
              EDIT
            </Button>
          </div>
        ) : (
          ""
        )}

        {allow != false ? (
          <div>
            <Button sx={{ width: "50%" }} onClick={onCancelEvent}>
              CANCEL
            </Button>
            <Button sx={{ width: "50%" }} onClick={onSaveEvent}>
              SAVE
            </Button>
          </div>
        ) : (
          ""
        )}
      </Dialog>
    </div>
  );
};

export default EventInfoModal;
