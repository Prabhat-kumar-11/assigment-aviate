import { Box, Button, Flex } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";

export const ButtonBox = () => {
  return (
    <Box margin="5% 0%" display="flex" justifyContent="space-between">
      <Button
        size="md"
        borderRadius="full"
        leftIcon={<IoClose />}
        colorScheme="gray"
        style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
      >
        UX Designer
      </Button>
      <Button
        size="md"
        borderRadius="full"
        leftIcon={<IoClose />}
        colorScheme="gray"
        style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
      >
        Full Time
      </Button>
      <Button
        size="md"
        borderRadius="full"
        leftIcon={<IoClose />}
        colorScheme="gray"
        style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
      >
        On-site
      </Button>
      <Button
        size="md"
        borderRadius="full"
        leftIcon={<IoClose />}
        colorScheme="gray"
        style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
      >
        Delhi NCR
      </Button>
      <Button
        size="md"
        borderRadius="full"
        leftIcon={<IoClose />}
        colorScheme="gray"
        style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
      >
        Bangalore
      </Button>
    </Box>
  );
};
