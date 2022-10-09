import { Stack, Box, Typography, Divider } from "@mui/material";
import React from "react";
import { faker } from "@faker-js/faker";

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
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
];

const Conversation = () => {
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
                  <Typography variant="caption" sx={{ color: "#696969" }}>
                    {el.text}
                  </Typography>
                  <Divider width="46%" />
                </Stack>
              );

            case "msg":
              switch (el.subtype) {
                case "img":
                  return (
                    <Stack
                      direction="row"
                      justifyContent={el.incoming ? "start" : "end"}
                    >
                      <Box
                        px={1.5}
                        py={1.5}
                        sx={{
                          backgroundColor: el.incoming ? "#ffffff" : "#5B96F7",
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
                            color={el.incoming ? "#696969" : "#fff"}
                          >
                            {el.message}
                          </Typography>
                        </Stack>
                      </Box>
                    </Stack>
                  );

                default:
                  return (
                    <Stack
                      direction="row"
                      justifyContent={el.incoming ? "start" : "end"}
                    >
                      <Box
                        px={1.5}
                        py={1.5}
                        sx={{
                          backgroundColor: el.incoming ? "#ffffff" : "#5B96F7",
                          borderRadius: 1.5,
                          width: "max-content",
                        }}
                      >
                        <Typography
                          variant="body2"
                          color={el.incoming ? "#696969" : "#fff"}
                        >
                          {el.message}
                        </Typography>
                      </Box>
                    </Stack>
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
