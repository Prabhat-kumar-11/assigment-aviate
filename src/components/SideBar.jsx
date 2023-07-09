import { Box, Button, IconButton } from "@chakra-ui/react";
import {
  BiMenu,
  BiMessageAlt,
  BiCalendar,
  BiHelpCircle,
  BiLogOut,
} from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";

export const Sidebar = () => {
  return (
    <Box
      bg="#22506C"
      color="white"
      width="150px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      top="0"
      left="0"
     
    >
      <Box mb={5}>
        <IconButton
          fontSize="45px"
          aria-label="Hamburger"
          icon={<BiMenu />}
          variant="ghost"
          colorScheme="white"
          m={"25px"}
        />
      </Box>
      <Box textAlign={"center"}>
        <Box m={"50px"} label="Dashboard" placement="right" hasArrow>
          <IconButton
            fontSize="45px"
            aria-label="Dashboard"
            icon={<RxDashboard />}
            variant="ghost"
            colorScheme="white"
          />
          <h3>Dashoboard</h3>
        </Box>
        <Box m={"50px"} label="Messages" placement="right" hasArrow>
          <IconButton
            fontSize="45px"
            aria-label="Messages"
            icon={<BiMessageAlt />}
            variant="ghost"
            colorScheme="white"
          />
          <h3>Messages</h3>
        </Box>
        <Box label="Calendar" placement="right" hasArrow>
          <IconButton
            fontSize="45px"
            aria-label="Calendar"
            icon={<BiCalendar />}
            variant="ghost"
            colorScheme="white"
          />
          <h3>Upcoming Events</h3>
        </Box>
      </Box>
      <Box>
        <Box mb={8}>
          <Button
            borderRadius="0"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
            }}
            justifyContent="center"
            h="29px"
            fontSize="10px"
            m={2}
          >
            help
          </Button>
        </Box>
        <Box>
          <Box label="Logout" placement="right" hasArrow>
            <IconButton
              fontSize="45px"
              aria-label="Logout"
              icon={<BiLogOut />}
              variant="ghost"
              colorScheme="white"
            />
          </Box>
          <h3>Log out</h3>
        </Box>
      </Box>
    </Box>
  );
};
