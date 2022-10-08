import { Stack, Box, Typography, Divider } from "@mui/material";
import React from "react";

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
    message: "Do you need a panda image or abstract?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    message: "Abstract would be better",
    incoming: false,
    outgoing: true,
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

            default:
                return <></>;
           
          }
        })}
      </Stack>
    </Box>
  );
};

export default Conversation;
