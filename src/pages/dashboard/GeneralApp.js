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
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  ArchiveBox,
  CaretDown,
  CircleDashed,
  MagnifyingGlass,
  Phone,
  VideoCamera,
  Smiley,
  LinkSimple,
  PaperPlaneTilt,
} from "phosphor-react";
import { faker } from "@faker-js/faker";

import NoChat from "../../assets/Images/Illustration/no-chat.svg";
import { Link, useSearchParams } from "react-router-dom";
import Conversation from "./Conversation";
import Scrollbar, { SimpleBarStyle } from "../../components/Scrollbar";

const truncateText = (string, n) => {
  return string.length > n ? `${string.slice(0, n)}...` : string;
};

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px !important",
    paddingBottom: "12px !important",
  },
}));

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
  {
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
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
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        <Box
          sx={{
            
            height: "100%",
            width: 320,
            backgroundColor: "#F8FAFF",
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={3} spacing={2} sx={{ maxHeight: "100vh",}}>
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
            <Stack sx={{flexGrow: 2, overflow: "scroll", height: "100%"}}>
            
            <SimpleBarStyle timeout={500} clickOnTrack={false} >
            <Stack spacing={2.4} >
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
            </SimpleBarStyle>
            </Stack>
            
          </Stack>
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "calc(100vw - 420px)",
            backgroundColor: "#FFF",
            borderBottom:
              searchParams.get("type") === "individual-chat" &&
              searchParams.get("id")
                ? "0px"
                : "6px solid #5B96F7",
          }}
        >
          {searchParams.get("type") === "individual-chat" &&
          searchParams.get("id") ? (
            <Stack height={"100%"} maxHeight={"100vh"}>
              <Box
                p={2}
                width={"100%"}
                sx={{
                  backgroundColor: "#F8FAFF",
                  boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Stack
                  alignItems={"center"}
                  direction={"row"}
                  sx={{ width: "100%", height: "100%" }}
                  justifyContent="space-between"
                >
                  <Stack spacing={2} direction="row">
                    <Box>
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        variant="dot"
                      >
                        <Avatar
                          alt={faker.name.fullName()}
                          src={faker.image.avatar()}
                        />
                      </StyledBadge>
                    </Box>
                    <Stack spacing={0.2}>
                      <Typography variant="subtitle2">
                        {faker.name.fullName()}
                      </Typography>
                      <Typography variant="caption">Online</Typography>
                    </Stack>
                  </Stack>
                  <Stack direction={"row"} alignItems="center" spacing={3}>
                    <IconButton>
                      <VideoCamera />
                    </IconButton>
                    <IconButton>
                      <Phone />
                    </IconButton>
                    <IconButton>
                      <MagnifyingGlass />
                    </IconButton>

                    <Divider orientation="vertical" flexItem />
                    <IconButton>
                      <CaretDown />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
              <Box
                width={"100%"}
                sx={{
                  flexGrow: 1,
                  overflow: "scroll",
                  backgroundColor: "#F0F4FA",
                  boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                }}
              >
                <SimpleBarStyle timeout={500} clickOnTrack={false} >
                <Conversation />
                </SimpleBarStyle>
                
              </Box>
              <Box
                p={2}
                width={"100%"}
                sx={{
                  backgroundColor: "#F8FAFF",
                  boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Stack direction="row" alignItems={"center"} spacing={3}>
                  <StyledInput
                    fullWidth
                    placeholder="Write a message..."
                    variant="filled"
                    InputProps={{
                      disableUnderline: true,
                      startAdornment: (
                        <InputAdornment>
                          <IconButton>
                            <LinkSimple color="#5B96F7" />
                          </IconButton>
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment>
                          <IconButton>
                            <Smiley color="#5B96F7" />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Box
                    sx={{
                      height: 48,
                      width: 48,
                      backgroundColor: "#5B96F7",
                      borderRadius: 1.5,
                    }}
                  >
                    <Stack
                      sx={{ height: "100%" }}
                      alignItems={"center"}
                      justifyContent="center"
                    >
                      <IconButton>
                        <PaperPlaneTilt color="#ffffff" />
                      </IconButton>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          ) : (
            <Stack
              spacing={2}
              sx={{ height: "100%", width: "100%" }}
              alignItems="center"
              justifyContent={"center"}
            >
              <img src={NoChat} alt="No conversation" />
              <Typography variant="subtitle2">
                Select a conversation or start a{" "}
                <Link
                  style={{ color: "#5B96F7", textDecoration: "none" }}
                  to="/"
                >
                  new one
                </Link>
              </Typography>
            </Stack>
          )}
        </Box>
      </Stack>
    </>
  );
};

export default GeneralApp;
