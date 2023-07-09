import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { BsBellFill, BsSearch } from "react-icons/bs";
import { BiSolidMessage } from "react-icons/bi";
import { PiMedalBold } from "react-icons/pi";
import aviateimg from "../utilites/aviate.png";

export const NavBar = () => {
  const messageNotificationCount = 3;
  const notificationCount = 8;

  return (
    <Flex
      bgColor="#22506C"
      alignItems="center"
      justifyContent="space-between"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
      }}
      p={4}
    >
      <Box>
        <img src={aviateimg} alt="Company Icon" />
      </Box>
      <Box>
        <InputGroup width="300px" borderRadius="10px" backgroundColor="white">
          <InputLeftElement
            pointerEvents="none"
            fontSize="large"
            children={<BsSearch />}
            fontWeight="extrabold"
          />
          <Input type="text" placeholder="Search..." />
        </InputGroup>
      </Box>
      <Box>
        <IconButton
          fontSize="35px"
          color="white"
          aria-label="Messages"
          icon={<BiSolidMessage />}
          variant="ghost"
          mr={5}
        >
          {messageNotificationCount > 0 && (
            <Box
              width="15px"
              height="15px"
              borderRadius="50%"
              backgroundColor="yellow"
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontSize="10px"
              fontWeight="bold"
              position="absolute"
              top="-5px"
              right="-5px"
            >
              {messageNotificationCount}
            </Box>
          )}
        </IconButton>
        <IconButton
          fontSize="35px"
          color="white"
          aria-label="Notifications"
          icon={<BsBellFill />}
          variant="ghost"
          mr={5}
        >
          {notificationCount > 0 && (
            <Box
              width="15px"
              height="15px"
              borderRadius="50%"
              backgroundColor="yellow"
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontSize="10px"
              fontWeight="bold"
              position="absolute"
              top="-5px"
              right="-5px"
            >
              {notificationCount}
            </Box>
          )}
        </IconButton>
        <IconButton
          fontSize="35px"
          color="white"
          aria-label="Notifications"
          icon={<PiMedalBold />}
          variant="ghost"
          mr={5}
        >
          <Box
            width="15px"
            height="15px"
            borderRadius="50%"
            backgroundColor="yellow"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            top="-5px"
            right="-5px"
          />
        </IconButton>
      </Box>
      <Box display="flex" gap="5px" alignItems="center">
        <Avatar
          size="lg"
          name="Prosper Otemuyiwa"
          src="https://bit.ly/prosper-baba"
        />
        <Box textAlign="center">
          <h1 ml={2}>Akash Mishra</h1>
          <Button
            borderRadius="0"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
            }}
            justifyContent="center"
            h="15px"
            fontSize="10px"
            m={2}
          >
            Edit my Profile
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};
