import * as React from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import Home from "@mui/icons-material/Home";
import Mail from "@mui/icons-material/Mail";
import Assessment from "@mui/icons-material/Assessment";
import CalendarViewDay from "@mui/icons-material/CalendarViewDay";
import Receipt from "@mui/icons-material/Receipt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ForumIcon from "@mui/icons-material/Forum";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift";
import SettingsIcon from "@mui/icons-material/Settings";

export default function SizesList() {
  let list = [
    "Dashboard",
    "Inbox",
    "Products",
    "Invoices",
    "Customers",
    "Chat Room",
    "Calendar",
    "Help Center",
    "Settings",
  ];

  let icons = [
    Assessment,
    Mail,
    CalendarViewDay,
    Receipt,
    PersonOutlineIcon,
    ForumIcon,
    CalendarMonthIcon,
    FilterTiltShiftIcon,
    SettingsIcon,
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        gap: 2,
        flexWrap: "wrap",
        "& > *": { minWidth: 0, flexBasis: 200 },
        background: "#43425d",
        color: "#a5a4bf",
      }}
    >
      {["sm"].map((size) => (
        <div key={size}>
          <List
            size={size}
            sx={{ maxWidth: 300, borderRadius: "sm", height: "100vh" }}
          >
            <ListItem>
              <ListItemButton sx={{ color: "#a5a4bf" }}>
                <ListItemDecorator>
                  <Home />
                </ListItemDecorator>
                Home
              </ListItemButton>
            </ListItem>
            {list.map((el, i) => {
              return (
                <ListItem key={el} sx={{ height: "50px" }}>
                  <ListItemButton sx={{ color: "#a5a4bf" }}>
                    <ListItemDecorator>
                      {React.createElement(icons[i])}
                    </ListItemDecorator>
                    {el}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </div>
      ))}
    </Box>
  );
}
