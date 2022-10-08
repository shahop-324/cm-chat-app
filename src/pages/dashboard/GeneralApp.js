import React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  InputBase,
  Divider,
  Button,
  Badge,
  Avatar,
} from "@mui/material";
import {
  ArchiveBox,
  CaretDown,
  CircleDashed,
  MagnifyingGlass,
} from "phosphor-react";
import { faker } from "@faker-js/faker";

import NoChat from "../../assets/Images/Illustration/no-chat.svg";
import { Link } from "react-router-dom";

const truncateText = (string, n) => {
  return string.length > n ? `${string.slice(0, n)}...` : string;
};

const ChatList = [
  {
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "9:36",
    unread: 0,
    pinned: true,
    online: true,
  },
  {
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "12:02",
    unread: 2,
    pinned: true,
    online: false,
  },
  {
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "10:35",
    unread: 3,
    pinned: false,
    online: true,
  },
  {
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "04:00",
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
];

const StyledChatBox = styled(Box)(({ theme }) => ({
  "& .show-options": {
    display: "none",
  },
  "& .unread-count": {
    display: "inline-block",
  },
  "&:hover": {
    cursor: "pointer",
    backgroundColor: alpha("#ffffff", 0.25),
    "& .show-options": {
      display: "inline-block",
    },
    "& .unread-count": {
      display: "none",
    },
  },
}));

const ChatElement = ({ img, name, msg, time, unread, online }) => {
  return (
    <StyledChatBox
      sx={{
        width: "100%",

        borderRadius: 1,
        backgroundColor: "#ffffff",
      }}
      p={2}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={2}>
          {" "}
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={name} src={img} />
            </StyledBadge>
          ) : (
            <Avatar alt={name} src={img} />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{truncateText(msg, 20)}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems={"center"}>
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge
            className="unread-count"
            color="primary"
            badgeContent={unread}
          />
          <CaretDown size={12} className="show-options" />
        </Stack>
      </Stack>
    </StyledChatBox>
  );
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha("#EAF2FE", 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const GeneralApp = () => {
  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        <Box sx={{ height: "100%", width: 320, backgroundColor: "#F8FAFF" }}>
          <Stack p={3} spacing={2}>
            <Stack
              alignItems={"center"}
              justifyContent="space-between"
              direction="row"
            >
              <Typography variant="h5">Chats</Typography>
              <IconButton sx={{ width: "max-content" }}>
                <CircleDashed />
              </IconButton>
            </Stack>
            <Stack sx={{ width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Stack>
            <Stack spacing={1}>
              <Stack direction={"row"} spacing={1.5} alignItems="center">
                <ArchiveBox size={24} />
                <Button variant="text">Archive</Button>
              </Stack>
              <Divider />
            </Stack>
            <Typography variant="subtitle2" sx={{ color: "#676667" }}>
              Pinned
            </Typography>
            {/* Chat List */}
            {ChatList.filter((el) => el.pinned).map((el, idx) => {
              return <ChatElement {...el} />;
            })}
            <Typography variant="subtitle2" sx={{ color: "#676667" }}>
              All Chats
            </Typography>
            {/* Chat List */}
            {ChatList.filter((el) => !el.pinned).map((el, idx) => {
              return <ChatElement {...el} />;
            })}
          </Stack>
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "calc(100vw - 420px)",
            backgroundColor: "#FFF",
            borderBottom: "6px solid #5B96F7",
          }}
        >
          <Stack
            spacing={2}
            sx={{ height: "100%", width: "100%" }}
            alignItems="center"
            justifyContent={"center"}
          >
            <img src={NoChat} alt="No conversation" />
            <Typography variant="subtitle2">
              Select a conversation or start a{" "}
              <Link style={{ color: "#5B96F7", textDecoration: "none" }} to="/">
                new one
              </Link>
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default GeneralApp;
