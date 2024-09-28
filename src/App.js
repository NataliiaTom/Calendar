import "./App.css";
import MyCalendar from "./Components/Calendar";
import Paper from "./Components/Paper";
import SideMenu from "./Components/SideMenu";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3} style={{ backgroundColor: "#43425d" }}>
        <SideMenu> </SideMenu>
      </Grid>
      <Grid item xs={9} style={{ backgroundColor: "#f0f0f7" }}>
        <h4>Calendar</h4>
        <Paper>{<MyCalendar />}</Paper>
      </Grid>
    </Grid>
  );
}

export default App;
