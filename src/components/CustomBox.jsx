import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Badge,
} from "@chakra-ui/react";
import { BiSearch, BiPin, BiFilter, BiMenu } from "react-icons/bi";

export const CustomBox = () => {
  return (
    <Box
      bgColor="#E2E8F0"
      p={4}
      borderRadius="md"
      display="flex"
      alignItems="center"
    >
      <Box flex="1">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<BiSearch />}
            color="gray.500"
          />
          <Input type="text" placeholder="Search" backgroundColor="white" />
        </InputGroup>
      </Box>
      <Box flex="1" mx={4}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<BiPin />}
            color="gray.500"
          />
          <Input type="text" placeholder="Anywhere" backgroundColor="white" />
        </InputGroup>
      </Box>
      <Box flex="1">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<BiFilter />}
            color="gray.500"
          />
          <Input type="text" placeholder="Filter" backgroundColor="white" />
        </InputGroup>
      </Box>
      <Box>
       
        <IconButton
          aria-label="Notifications"
          icon={
            <Badge colorScheme="blue" borderRadius="full" px={2}>
              8
            </Badge>
          }
          variant="ghost"
          colorScheme="gray"
          fontSize="20px"
        />
      </Box>
    </Box>
  );
};
