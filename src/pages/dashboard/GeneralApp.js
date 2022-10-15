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
  TextField,
  InputAdornment,
  Fab,
  Tooltip,
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
  Smiley,
  LinkSimple,
  PaperPlaneTilt,
  Image,
  Sticker,
  Camera,
  File,
  User,
  X,
  CaretCircleRight,
  CaretRight,
  Star,
  Notification,
  Bell,
  Prohibit,
  Trash,
} from "phosphor-react";
import { faker } from "@faker-js/faker";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import NoChat from "../../assets/Images/Illustration/no-chat.svg";
import { Link, useSearchParams } from "react-router-dom";
import Conversation from "./Conversation";
import Scrollbar, { SimpleBarStyle } from "../../components/Scrollbar";
import { AntSwitch } from "../../layouts/dashboard";

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
  const theme = useTheme();
  return (
    <StyledChatBox
      sx={{
        width: "100%",

        borderRadius: 1,

        backgroundColor:
          theme.palette.mode === "light"
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
          <CaretDown size={12} className="show-options" />
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

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];

const Conversation_Menu = [
  {
    title: "Contact info",
  },
  {
    title: "Mute notifications",
  },
  {
    title: "Clear messages",
  },
  {
    title: "Delete chat",
  },
];

const GeneralApp = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [openActions, setOpenActions] = React.useState(false);
  const [openPicker, setOpenPicker] = React.useState(false);

  const theme = useTheme();

  const [conversationMenuAnchorEl, setConversationMenuAnchorEl] =
    React.useState(null);
  const openConversationMenu = Boolean(conversationMenuAnchorEl);
  const handleClickConversationMenu = (event) => {
    setConversationMenuAnchorEl(event.currentTarget);
  };
  const handleCloseConversationMenu = () => {
    setConversationMenuAnchorEl(null);
  };

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
            <Stack height={"100%"} maxHeight={"100vh"}>
              <Box
                p={2}
                width={"100%"}
                sx={{
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "#F8FAFF"
                      : theme.palette.background,
                  boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Stack
                  alignItems={"center"}
                  direction={"row"}
                  sx={{ width: "100%", height: "100%" }}
                  justifyContent="space-between"
                >
                  <Stack
                    onClick={() => {
                      searchParams.set("open", true);
                      setSearchParams(searchParams);
                    }}
                    spacing={2}
                    direction="row"
                  >
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
                    <IconButton
                      id="conversation-positioned-button"
                      aria-controls={
                        openConversationMenu
                          ? "conversation-positioned-menu"
                          : undefined
                      }
                      aria-haspopup="true"
                      aria-expanded={openConversationMenu ? "true" : undefined}
                      onClick={handleClickConversationMenu}
                    >
                      <CaretDown />
                    </IconButton>
                    <Menu
                      MenuListProps={{
                        "aria-labelledby": "fade-button",
                      }}
                      TransitionComponent={Fade}
                      id="conversation-positioned-menu"
                      aria-labelledby="conversation-positioned-button"
                      anchorEl={conversationMenuAnchorEl}
                      open={openConversationMenu}
                      onClose={handleCloseConversationMenu}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                    >
                      <Box p={1}>
                        <Stack spacing={1}>
                          {Conversation_Menu.map((el) => (
                            <MenuItem onClick={handleCloseConversationMenu}>
                              <Stack
                                sx={{ minWidth: 100 }}
                                direction="row"
                                alignItems={"center"}
                                justifyContent="space-between"
                              >
                                <span>{el.title}</span>
                              </Stack>{" "}
                            </MenuItem>
                          ))}
                        </Stack>
                      </Box>
                    </Menu>
                  </Stack>
                </Stack>
              </Box>
              <Box
                width={"100%"}
                sx={{
                  position: "relative",
                  flexGrow: 1,
                  overflow: "scroll",

                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "#F0F4FA"
                      : theme.palette.background,

                  boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                }}
              >
                <SimpleBarStyle timeout={500} clickOnTrack={false}>
                  <Conversation />
                </SimpleBarStyle>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  backgroundColor: "transparent !important",
                }}
              >
                <Box
                  p={2}
                  width={"100%"}
                  sx={{
                    backgroundColor:
                      theme.palette.mode === "light"
                        ? "#F8FAFF"
                        : theme.palette.background,
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <Stack direction="row" alignItems={"center"} spacing={3}>
                    <Stack sx={{ width: "100%" }}>
                      <Box
                        style={{
                          zIndex: 10,
                          position: "fixed",
                          display: openPicker ? "inline" : "none",
                          bottom: 81,
                          right:
                            searchParams.get("open") === "true" ? 420 : 100,
                        }}
                      >
                        <Picker
                          theme={theme.palette.mode}
                          data={data}
                          onEmojiSelect={console.log}
                        />
                      </Box>
                      <StyledInput
                        fullWidth
                        placeholder="Write a message..."
                        variant="filled"
                        InputProps={{
                          disableUnderline: true,
                          startAdornment: (
                            <Stack sx={{ width: "max-content" }}>
                              <Stack
                                sx={{
                                  position: "relative",
                                  display: openActions
                                    ? "inline-block"
                                    : "none",
                                }}
                              >
                                {Actions.map((el) => (
                                  <Tooltip placement="right" title={el.title}>
                                    <Fab
                                      onClick={() => {
                                        setOpenActions(!openActions);
                                      }}
                                      sx={{
                                        position: "absolute",
                                        top: -el.y,
                                        backgroundColor: el.color,
                                      }}
                                      aria-label="add"
                                    >
                                      {el.icon}
                                    </Fab>
                                  </Tooltip>
                                ))}
                              </Stack>

                              <InputAdornment>
                                <IconButton
                                  onClick={() => {
                                    setOpenActions(!openActions);
                                  }}
                                >
                                  <LinkSimple />
                                </IconButton>
                              </InputAdornment>
                            </Stack>
                          ),
                          endAdornment: (
                            <Stack sx={{ position: "relative" }}>
                              <InputAdornment>
                                <IconButton
                                  onClick={() => {
                                    setOpenPicker(!openPicker);
                                  }}
                                >
                                  <Smiley />
                                </IconButton>
                              </InputAdornment>
                            </Stack>
                          ),
                        }}
                      />
                    </Stack>
                    <Box
                      sx={{
                        height: 48,
                        width: 48,
                        backgroundColor: "#0162C4",
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
              </Box>
            </Stack>
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
