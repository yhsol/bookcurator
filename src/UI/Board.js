import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  MenuIcon,
  ExploreIcon,
  CaptionIcon,
  GithubIcon,
  PenIcon,
  NoteIcon,
  UserIcon,
  SettingIcon,
  LocationIcon
} from "./Icons";
import Router from "../Components/Router";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.div`
  color: #ff8906;
  font-weight: bold;
`;
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1
    // padding: theme.spacing(3)
  }
}));

export default function Board({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
        color=""
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Typography variant="h5" noWrap>
              <Title>Bookcurator</Title>
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ExploreIcon /> : <ExploreIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key={"Popular"}>
            <Link to="/count">
              <ListItemIcon>
                <CaptionIcon />
              </ListItemIcon>
            </Link>
            <Link to="/count">
              <ListItemText primary={"Popular"} />
            </Link>
          </ListItem>
          <ListItem button key={"Recent"}>
            <Link to="/recent">
              <ListItemIcon>
                <PenIcon />
              </ListItemIcon>
            </Link>
            <Link to="/recent">
              <ListItemText primary={"Recent"} />
            </Link>
          </ListItem>
          <ListItem button key={"Search"}>
            <Link to="/search">
              <ListItemIcon>
                <NoteIcon />
              </ListItemIcon>
            </Link>
            <Link to="/search">
              <ListItemText primary={"Search"} />
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key={"Profile"}>
            <Link to="/user/:id">
              <ListItemIcon>
                <UserIcon />
              </ListItemIcon>
            </Link>
            <Link to="/user/:id">
              <ListItemText primary={"Profile"} />
            </Link>
          </ListItem>

          <ListItem button key={"Settings"}>
            <ListItemIcon>
              <SettingIcon />
            </ListItemIcon>
            <ListItemText primary={"Settings"} />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
        {children}
      </main>
    </div>
  );
}
