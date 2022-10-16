import {
  Stack,
  Box,
  Typography,
  Divider,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";
import { styled, useTheme, alpha } from "@mui/material/styles";
import { DotsThreeVertical, DownloadSimple, Image } from "phosphor-react";
import { SimpleBarStyle } from "../../components/Scrollbar";

import { ChatHeader, ChatFooter } from "../../components/Chat";
import useResponsive from "../../hooks/useResponsive";

const MsgBox = styled(Box)(({ theme }) => ({
  position: "relative",

  "& .options": {
    position: "absolute",
    display: "none",
  },
  "&:hover": {
    "& .options": {
      cursor: "pointer",
      display: "inline-block",
    },
  },
}));

const list = [
  {
    type: "msg",
    message: "Hi 👋🏻, How are ya ?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "divider",
    text: "Today",
  },
  {
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Can you send me an abstarct image?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
  },

  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.abstract(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    message: "Can you please send this in file format?",
    incoming: false,
    outgoing: true,
  },

  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
];

const Message_options = [
  {
    title: "Reply",
  },
  {
    title: "React to message",
  },
  {
    title: "Forward message",
  },
  {
    title: "Star message",
  },
  {
    title: "Report",
  },
  {
    title: "Delete Message",
  },
];

const MessageOption = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <DotsThreeVertical
        size={20}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Stack spacing={1} px={1}>
          {Message_options.map((el) => (
            <MenuItem onClick={handleClose}>{el.title}</MenuItem>
          ))}
        </Stack>
      </Menu>
    </>
  );
};

const Conversation = ({ isMobile }) => {
  const theme = useTheme();
 
  return (
    <Box p={isMobile ? 1 : 3}>
      <Stack spacing={3}>
        {list.map((el, idx) => {
          switch (el.type) {
            case "divider":
              return (
                <Stack
                  direction="row"
                  alignItems={"center"}
                  justifyContent="space-between"
                >
                  <Divider width="46%" />
                  <Typography
                    variant="caption"
                    sx={{ color: theme.palette.text }}
                  >
                    {el.text}
                  </Typography>
                  <Divider width="46%" />
                </Stack>
              );

            case "msg":
              switch (el.subtype) {
                case "img":
                  return (
                    <MsgBox>
                      <Stack
                        direction="row"
                        justifyContent={el.incoming ? "start" : "end"}
                      >
                        <Box
                          px={1.5}
                          py={1.5}
                          sx={{
                            backgroundColor: el.incoming
                              ? alpha(theme.palette.background.default, 1)
                              : "#0162C4",
                            borderRadius: 1.5,
                            width: "max-content",
                          }}
                        >
                          <Stack spacing={1}>
                            <img
                              src={el.img}
                              alt={el.message}
                              style={{ maxHeight: 210, borderRadius: "10px" }}
                            />
                            <Typography
                              variant="body2"
                              color={el.incoming ? theme.palette.text : "#fff"}
                            >
                              {el.message}
                            </Typography>
                          </Stack>
                        </Box>
                        <MessageOption />
                      </Stack>
                    </MsgBox>
                  );

                case "doc":
                  return (
                    <MsgBox>
                      <Stack
                        direction="row"
                        justifyContent={el.incoming ? "start" : "end"}
                      >
                        <Box
                          px={1.5}
                          py={1.5}
                          sx={{
                            backgroundColor: el.incoming
                              ? alpha(theme.palette.background.default, 1)
                              : "#0162C4",
                            borderRadius: 1.5,
                            width: "max-content",
                          }}
                        >
                          <Stack spacing={2}>
                            <Stack
                              p={2}
                              direction="row"
                              spacing={3}
                              alignItems="center"
                              sx={{
                                backgroundColor: theme.palette.background.paper,
                                borderRadius: 1,
                              }}
                            >
                              <Image size={48} />
                              <Typography variant="caption">
                                Abstract.png
                              </Typography>
                              <IconButton>
                                <DownloadSimple />
                              </IconButton>
                            </Stack>
                            <Typography
                              variant="body2"
                              color={el.incoming ? theme.palette.text : "#fff"}
                            >
                              {el.message}
                            </Typography>
                          </Stack>
                        </Box>
                        <MessageOption />
                      </Stack>
                    </MsgBox>
                  );
                case "link":
                  return (
                    <MsgBox>
                      <Stack
                        direction="row"
                        justifyContent={el.incoming ? "start" : "end"}
                      >
                        <Box
                          px={1.5}
                          py={1.5}
                          sx={{
                            backgroundColor: el.incoming
                              ? alpha(theme.palette.background.default, 1)
                              : "#0162C4",
                            borderRadius: 1.5,
                            width: "max-content",
                          }}
                        >
                          <Stack spacing={2}>
                            <Stack
                              p={2}
                              direction="column"
                              spacing={3}
                              alignItems="center"
                              sx={{
                                backgroundColor: theme.palette.background.paper,
                                borderRadius: 1,
                              }}
                            >
                              <img
                                src={el.preview}
                                alt={el.message}
                                style={{ maxHeight: 210, borderRadius: "10px" }}
                              />
                              <Stack direction={"column"} spacing={2}>
                                <Typography variant="subtitle2">
                                  Creating Chat App using MERN
                                </Typography>
                                <Typography
                                  component={Link}
                                  to="//https://www.youtube.com"
                                  variant="subtitle2"
                                  sx={{color: theme.palette.primary.main}}
                                >
                                  www.youtube.com/watch/v12uqywHTY2
                                </Typography>
                              </Stack>
                            </Stack>
                            <Typography
                              variant="body2"
                              color={el.incoming ? theme.palette.text : "#fff"}
                            >
                              {el.message}
                            </Typography>
                          </Stack>
                        </Box>
                        <MessageOption />
                      </Stack>
                    </MsgBox>
                  );

                case "reply":
                  return (
                    <MsgBox>
                      <Stack
                        direction="row"
                        justifyContent={el.incoming ? "start" : "end"}
                      >
                        <Box
                          px={1.5}
                          py={1.5}
                          sx={{
                            backgroundColor: el.incoming
                              ? alpha(theme.palette.background.paper, 1)
                              : "#0162C4",
                            borderRadius: 1.5,
                            width: "max-content",
                          }}
                        >
                          <Stack spacing={2}>
                            <Stack
                              p={2}
                              direction="column"
                              spacing={3}
                              alignItems="center"
                              sx={{
                                backgroundColor: alpha(
                                  theme.palette.background.paper,
                                  1
                                ),

                                borderRadius: 1,
                              }}
                            >
                              <Typography
                                variant="body2"
                                color={theme.palette.text}
                              >
                                {el.message}
                              </Typography>
                            </Stack>
                            <Typography
                              variant="body2"
                              color={el.incoming ? theme.palette.text : "#fff"}
                            >
                              {el.reply}
                            </Typography>
                          </Stack>
                        </Box>
                        <MessageOption />
                      </Stack>
                    </MsgBox>
                  );

                default:
                  return (
                    <MsgBox>
                      <Stack
                        className="msg-satck"
                        direction="row"
                        justifyContent={el.incoming ? "start" : "end"}
                      >
                        <Box
                          px={1.5}
                          py={1.5}
                          sx={{
                            backgroundColor: el.incoming
                              ? alpha(theme.palette.background.default, 1)
                              : "#0162C4",
                            borderRadius: 1.5,
                            width: "max-content",
                          }}
                        >
                          <Typography
                            variant="body2"
                            color={el.incoming ? theme.palette.text : "#fff"}
                          >
                            {el.message}
                          </Typography>
                        </Box>
                       <MessageOption />
                      </Stack>
                    </MsgBox>
                  );
              }

            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

const ChatComponent = () => {
  const isMobile = useResponsive("between", "md", "xs", "sm");
  const theme = useTheme();

  return (
    <Stack
      height={"100%"}
      maxHeight={"100vh"}
      width={isMobile ? "100vw" : "auto"}
    >
      {/*  */}
      <ChatHeader />
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
          <Conversation isMobile={isMobile} />
        </SimpleBarStyle>
      </Box>

      {/*  */}
      <ChatFooter />
    </Stack>
  );
};

export default ChatComponent;
