import { Stack, Box, Typography, Divider, IconButton } from "@mui/material";
import React from "react";
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";
import { styled, useTheme, alpha } from "@mui/material/styles";
import { CaretDown, DownloadSimple, Image } from "phosphor-react";

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

const Conversation = () => {
  const theme = useTheme();
  return (
    <Box p={3}>
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
                          <Stack
                            direction={"row"}
                            alignItems="center"
                            justifyContent={"end"}
                          >
                            <CaretDown
                              className="options"
                              style={{
                                color: el.incoming
                                  ? theme.palette.text
                                  : "#fff",
                              }}
                              p={1}
                            />
                          </Stack>
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
                          <Stack
                            direction={"row"}
                            alignItems="center"
                            justifyContent={"end"}
                          >
                            <CaretDown
                              className="options"
                              style={{
                                color: el.incoming
                                  ? theme.palette.text
                                  : "#fff",
                              }}
                              p={1}
                            />
                          </Stack>
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
                          <Stack
                            direction={"row"}
                            alignItems="center"
                            justifyContent={"end"}
                          >
                            <CaretDown
                              className="options"
                              style={{
                                color: el.incoming ? "#696969" : "#fff",
                              }}
                              p={1}
                            />
                          </Stack>
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
                                  variant="cption"
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
                              ? alpha(theme.palette.background.default, 1)
                              : "#0162C4",
                            borderRadius: 1.5,
                            width: "max-content",
                          }}
                        >
                          <Stack
                            direction={"row"}
                            alignItems="center"
                            justifyContent={"end"}
                          >
                            <CaretDown
                              className="options"
                              style={{
                                color: el.incoming ? "#696969" : "#fff",
                              }}
                              p={1}
                            />
                          </Stack>
                          <Stack spacing={2}>
                            <Stack
                              p={2}
                              direction="column"
                              spacing={3}
                              alignItems="center"
                              sx={{
                                backgroundColor: alpha(
                                  theme.palette.background.default,
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
                          <Stack
                            direction={"row"}
                            alignItems="center"
                            justifyContent={"end"}
                          >
                            <CaretDown
                              className="options"
                              style={{
                                color: el.incoming
                                  ? theme.palette.text
                                  : "#fff",
                              }}
                              p={1}
                            />
                          </Stack>
                          <Typography
                            variant="body2"
                            color={el.incoming ? theme.palette.text : "#fff"}
                          >
                            {el.message}
                          </Typography>
                        </Box>
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

export default Conversation;
