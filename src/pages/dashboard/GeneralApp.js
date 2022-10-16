import React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
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
  MenuItem,
  Menu,
  Fade,
} from "@mui/material";
import {
  ArchiveBox,
  CaretDown,
  CircleDashed,
  MagnifyingGlass,
  Phone,
  VideoCamera,
  X,
  CaretRight,
  Star,
  Bell,
  Prohibit,
  Trash,
} from "phosphor-react";
import { faker } from "@faker-js/faker";

import NoChat from "../../assets/Images/Illustration/no-chat.svg";
import { Link, useSearchParams } from "react-router-dom";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { AntSwitch } from "../../layouts/dashboard";
import ChatComponent from "./Conversation";

const truncateText = (string, n) => {
  return string.length > n ? `${string.slice(0, n)}...` : string;
};

const ChatList = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "9:36",
    unread: 0,
    pinned: true,
    online: true,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "12:02",
    unread: 2,
    pinned: true,
    online: false,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "10:35",
    unread: 3,
    pinned: false,
    online: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "04:00",
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 7,
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
    "& .show-options": {
      display: "inline-block",
    },
    "& .unread-count": {
      display: "none",
    },
  },
}));

const Chat_Options = [
  {
    title: "Archive Chat",
  },
  {
    title: "Mute Notifications",
  },
  {
    title: "Delete Chat",
  },
  {
    title: "Pin Chat",
  },
  {
    title: "Mark as unread",
  },
];

const ChatElement = ({ img, name, msg, time, unread, online, id }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedChatId = searchParams.get("id");

  const isSelected = +selectedChatId === id;

  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledChatBox
      onClick={() => {
        searchParams.set("id", id);
        setSearchParams(searchParams);
      }}
      id="chat-positioned-button"
      aria-controls={openMenu ? "chat-positioned-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={openMenu ? "true" : undefined}
      sx={{
        width: "100%",

        borderRadius: 1,

        backgroundColor: isSelected
          ? theme.palette.mode === "light"
            ? alpha(theme.palette.primary.main, 0.5)
            : theme.palette.primary.main
          : theme.palette.mode === "light"
          ? "#fff"
          : theme.palette.background.paper,
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
          <CaretDown onClick={handleClick} size={12} className="show-options" />
          <Menu
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            TransitionComponent={Fade}
            id="chat-positioned-menu"
            aria-labelledby="chat-positioned-button"
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
                {Chat_Options.map((el) => (
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
    </StyledChatBox>
  );
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.paper, 1),
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

  const theme = useTheme();

  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        <Box
          sx={{
            height: "100%",
            width: 320,
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,

            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
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
            <Stack sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}>
              <SimpleBarStyle timeout={500} clickOnTrack={false}>
                <Stack spacing={2.4}>
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
            width:
              searchParams.get("open") === "true"
                ? `calc(100vw - 740px )`
                : "calc(100vw - 420px )",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#FFF"
                : theme.palette.background.paper,
            borderBottom:
              searchParams.get("type") === "individual-chat" &&
              searchParams.get("id")
                ? "0px"
                : "6px solid #0162C4",
          }}
        >
          {searchParams.get("type") === "individual-chat" &&
          searchParams.get("id") ? (
            <ChatComponent />
          ) : (
            <Stack
              spacing={2}
              sx={{ height: "100%", width: "100%" }}
              alignItems="center"
              justifyContent={"center"}
            >
              <img
                src={NoChat}
                alt="No conversation"
                style={{ maxWidth: "300px" }}
              />
              <Typography variant="subtitle2">
                Select a conversation or start a{" "}
                <Link
                  style={{ color: "#0162C4", textDecoration: "none" }}
                  to="/"
                >
                  new one
                </Link>
              </Typography>
            </Stack>
          )}
        </Box>
        {searchParams.get("open") === "true" && (
          <Box sx={{ width: 320, maxHeight: "100vh" }}>
            <Stack sx={{ height: "100%" }}>
              <Box
                sx={{
                  boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                  width: "100%",
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "#F8FAFF"
                      : theme.palette.background,
                }}
              >
                <Stack
                  sx={{ height: "100%", p: 2 }}
                  direction="row"
                  alignItems={"center"}
                  justifyContent="space-between"
                  spacing={3}
                >
                  <Typography variant="subtitle2">Contact Info</Typography>
                  <IconButton
                    onClick={() => {
                      searchParams.set("open", false);
                      setSearchParams(searchParams);
                    }}
                  >
                    <X />
                  </IconButton>
                </Stack>
              </Box>
              <Stack
                sx={{
                  height: "100%",
                  position: "relative",
                  flexGrow: 1,
                  overflow: "scroll",
                }}
                p={3}
                spacing={3}
              >
                <Stack alignItems="center" direction="row" spacing={2}>
                  <Avatar
                    src={faker.image.avatar()}
                    alt={faker.name.firstName()}
                    sx={{ height: 64, width: 64 }}
                  />
                  <Stack spacing={0.5}>
                    <Typography variant="article" fontWeight={600}>
                      {faker.name.fullName()}
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                      {"+91 62543 28 739"}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent={"space-evenly"}
                >
                  <Stack alignItems={"center"} spacing={1}>
                    <IconButton>
                      <Phone />
                    </IconButton>

                    <Typography variant="overline">Voice</Typography>
                  </Stack>
                  <Stack alignItems={"center"} spacing={1}>
                    <IconButton>
                      <VideoCamera />
                    </IconButton>

                    <Typography variant="overline">Video</Typography>
                  </Stack>
                </Stack>
                <Divider />
                <Stack spacing={0.5}>
                  <Typography variant="article" fontWeight={600}>
                    About
                  </Typography>
                  <Typography variant="body2" fontWeight={500}>
                    {"Imagination is the only limit"}
                  </Typography>
                </Stack>
                <Divider />
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <Typography variant="subtitle2">
                    Media, Links & Docs
                  </Typography>
                  <Button endIcon={<CaretRight />}>401</Button>
                </Stack>
                <Stack direction={"row"} alignItems="center" spacing={2}>
                  {[1, 2, 3].map((el) => (
                    <Box>
                      <img
                        src={faker.image.city()}
                        alt={faker.internet.userName()}
                      />
                    </Box>
                  ))}
                </Stack>
                <Divider />
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Star size={21} />
                    <Typography variant="subtitle2">
                      Starred Messages
                    </Typography>
                  </Stack>

                  <IconButton>
                    <CaretRight />
                  </IconButton>
                </Stack>
                <Divider />
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Bell size={21} />
                    <Typography variant="subtitle2">
                      Mute Notifications
                    </Typography>
                  </Stack>

                  <AntSwitch />
                </Stack>
                <Divider />
                <Typography variant="body2">1 group in common</Typography>
                <Stack direction="row" alignItems={"center"} spacing={2}>
                  <Avatar
                    src={faker.image.imageUrl()}
                    alt={faker.name.fullName()}
                  />
                  <Stack direction="column" spacing={0.5}>
                    <Typography variant="subtitle2">Camel’s Gang</Typography>
                    <Typography variant="caption">
                      Owl, Parrot, Rabbit , You
                    </Typography>
                  </Stack>
                </Stack>
                <Divider />
                <Stack direction="row" alignItems={"center"} spacing={2}>
                  <Button fullWidth startIcon={<Prohibit />} variant="outlined">
                    Block
                  </Button>
                  <Button fullWidth startIcon={<Trash />} variant="outlined">
                    Delete
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        )}
      </Stack>
    </>
  );
};

export default GeneralApp;
