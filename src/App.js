
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import {

  Switch,
  Route,

} from "react-router-dom";
import { useHistory } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  let history = useHistory();
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color='secondary'>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         Orange
        </Typography>
        <Button color="inherit" onClick={()=>{history.push("/")}}>Home</Button>
        <Button color="inherit" onClick={()=>{history.push("/About")}}>About</Button>
       
      </Toolbar>
    </AppBar>
  </Box>
  <Switch>
        <Route path="/about">
          <About />
        </Route>

    

        <Route exact path="/">
          <Home />
        </Route>

      </Switch>
  </>
  );
}

export default App;
