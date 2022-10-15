import {
  Box,
  Stack,
  IconButton,
  Divider,
  Switch,
  Avatar,
  Menu,
  MenuItem,
  Fade,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ChatCircleDots,
  Gear,
  GearSix,
  Phone,
  SignOut,
  User,
  Users,
  UserSwitch,
} from "phosphor-react";
import React from "react";
import { Outlet } from "react-router-dom";

import Logo from "../../assets/Images/logo.png";

import { faker } from "@faker-js/faker";

import { useTheme } from "@mui/material/styles";
import useSettings from "../../hooks/useSettings";

const Main_list = [
  {
    index: 0,
    icon: <ChatCircleDots />,
  },
  {
    index: 1,
    icon: <Users />,
  },
  {
    index: 2,
    icon: <Phone />,
  },
];

const Other_list = [
  {
    index: 3,
    icon: <GearSix />,
  },
];

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#0162C4",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const Profile_Menu = [
  {
    title: "Profile",
    icon: <User />,
  },
  {
    title: "Settings",
    icon: <Gear />,
  },
  {
    title: "Profile",
    icon: <SignOut />,
  },
];

const DashboardLayout = () => {
  const theme = useTheme();

  const { onToggleMode } = useSettings();

  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChangeTab = (index) => {
    setSelectedTab(index);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Stack direction="row">
        <Box
          sx={{
            height: "100vh",
            width: 100,

            backgroundColor:
              theme.palette.mode === "light"
                ? "#F0F4FA"
                : theme.palette.background.paper,
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack
            py={3}
            alignItems={"center"}
            justifyContent="space-between"
            sx={{ height: "100%" }}
          >
            <Stack alignItems={"center"} spacing={4}>
              <Box
                sx={{
                  height: 64,
                  width: 64,
                  borderRadius: 1.5,
                  backgroundColor: "#AFBBF7",
                }}
                p={2}
              >
                {/* // TODO => Place Logo here */}
                <img src={Logo} alt="Tawk" />
              </Box>
              <Stack
                sx={{ width: "max-content" }}
                direction="column"
                alignItems={"center"}
                spacing={3}
              >
                {Main_list.map((el) => {
                  return el.index === selectedTab ? (
                    <Box
                      sx={{ backgroundColor: "#0162C4", borderRadius: 1.5 }}
                      p={1}
                    >
                      <IconButton
                        sx={{ width: "max-content", color: "#ffffff" }}
                      >
                        {el.icon}
                      </IconButton>
                    </Box>
                  ) : (
                    <IconButton
                      onClick={() => {
                        handleChangeTab(el.index);
                      }}
                      sx={{
                        width: "max-content",
                        color:
                          theme.palette.mode === "light"
                            ? "#080707"
                            : theme.palette.text.primary,
                      }}
                    >
                      {el.icon}
                    </IconButton>
                  );
                })}
                <Divider sx={{ width: 48 }} />
                {Other_list.map((el) => {
                  return el.index === selectedTab ? (
                    <Box
                      sx={{ backgroundColor: "#0162C4", borderRadius: 1.5 }}
                      p={1}
                    >
                      <IconButton
                        sx={{ width: "max-content", color: "#ffffff" }}
                      >
                        {el.icon}
                      </IconButton>
                    </Box>
                  ) : (
                    <IconButton
                      onClick={() => {
                        handleChangeTab(el.index);
                      }}
                      sx={{
                        width: "max-content",
                        color:
                          theme.palette.mode === "light"
                            ? "#080707"
                            : theme.palette.text.primary,
                      }}
                    >
                      {el.icon}
                    </IconButton>
                  );
                })}
              </Stack>
            </Stack>
            <Stack spacing={4}>
              <AntSwitch defaultChecked onChange={onToggleMode} />
              <Avatar
                id="profile-positioned-button"
                aria-controls={openMenu ? "profile-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}
                alt={faker.name.fullName()}
                src={faker.image.avatar()}
                onClick={handleClick}
              />
              <Menu
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                TransitionComponent={Fade}
                id="profile-positioned-menu"
                aria-labelledby="profile-positioned-button"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Box p={1}>
                  <Stack spacing={1}>
                    {Profile_Menu.map((el) => (
                      <MenuItem onClick={handleClose}>
                        <Stack
                          sx={{ width: 100 }}
                          direction="row"
                          alignItems={"center"}
                          justifyContent="space-between"
                        >
                          <span>{el.title}</span>
                          {el.icon}
                        </Stack>{" "}
                      </MenuItem>
                    ))}
                  </Stack>
                </Box>
              </Menu>
            </Stack>
          </Stack>
        </Box>

        <Outlet />
      </Stack>
    </>
  );
};

export { AntSwitch };

export default DashboardLayout;
