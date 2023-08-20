import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Backdrop from "@mui/material/Backdrop";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import WheelchairPickupIcon from "@mui/icons-material/WheelchairPickup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { logoutUser } from "../../../redux/actions/userAction";
import { useDispatch } from "react-redux";

export default function AccountMenu({ user }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [backOpen, setBackOpen] = React.useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // Options for doing this activity
  const options = [
    {
      icons: (
        <img
          src={user.avatar.url}
          alt={user.avatar.alt}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ),
      name: "Profile",
      func: profile,
    },
    { icons: <ListAltIcon />, name: "Orders", func: orders },
    { icons: <Logout />, name: "Logout", func: logout },
  ];

  if (user.role === "admin") {
    options.splice(1, 0, {
      icons: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function dashboard() {
    navigate("/dashboard");
  }
  function orders() {
    navigate("/orders");
  }
  function profile() {
    navigate("/account");
  }
  function logout() {
    dispatch(logoutUser());
    navigate("/");
    toast.success("Logout Successfully");
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setBackOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setBackOpen(false);
  };
  return (
    <React.Fragment>
      <Backdrop open={backOpen} style={{ zIndex: "" }} />
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Profile">
          <IconButton
            onMouseEnter={handleClick}
            // onMouseLeave={handleClose}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              sx={{ width: 32, height: 32 }}
              alt={user.avatar.alt}
              src={user.avatar.url}
            >
              {user.avatar.url ? (
                <img
                  src={user.avatar.url}
                  alt={user.avatar.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                "P"
              )}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onMouseLeave={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {options.map((data, index) => {
          if (data.name === "Logout") {
            return (
              <div className="mt-[5px]" key={index}>
                <Divider />
                <MenuItem onClick={data.func}>
                  <Avatar>{data.icons}</Avatar>
                  {data.name}
                </MenuItem>
              </div>
            );
          } else {
            return (
              <MenuItem onClick={data.func} key={index}>
                <Avatar>{data.icons}</Avatar>
                {data.name}
              </MenuItem>
            );
          }
        })}
      </Menu>
    </React.Fragment>
  );
}
