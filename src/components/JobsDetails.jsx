import { Box, Button, Text } from "@chakra-ui/react";
import { BsSquare, BsQuestion } from "react-icons/bs";

export const JobsDetails = (props) => {
  const {
    jobTitle,
    company,
    workLocation,
    salaryRange,
    salaryType,
    status,
    statusColor,
  } = props;

  return (
    <Box
      
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      margin="10px"
      padding="10px"
    >
      <Box display="flex" alignItems="center">
        <Box
          as={BsSquare}
          color="gray.500"
          borderRadius="10px"
          boxSize={8}
          mr={4}
        />
        <Box>
          <Box fontWeight="bold">{jobTitle}</Box>
          <Text fontSize='xs'>
            {company}, {workLocation}
          </Text>
        </Box>
      </Box>
      <Box>
        <Box fontWeight="bold" fontSize="lg" mb={2}>
          {salaryRange}
        </Box>
        <Box>{salaryType}</Box>
      </Box>
      <Box display="flex" alignItems="center">
        <Button
          colorScheme={statusColor}
          borderRadius="10px"
          py={2}
          px={4}
          bg={statusColor}
          color="white"
          fontWeight="bold"
          mr={4}
        >
          {status}
        </Button>
        <Box as={BsQuestion} color="red.500" fontSize="24px" />
      </Box>
    </Box>
  );
};
