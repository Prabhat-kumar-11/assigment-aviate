import { Box } from "@chakra-ui/react";
import { BiCheckCircle } from "react-icons/bi";
import { JobsDetails } from "./JobsDetails";

export const JobsBox = () => {
  return (
    <Box
      margin="3%"
      boxShadow="0 0 5px rgba(0, 0, 0, 0.3)"
      p={"5%"}
      borderRadius={"5%"}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={4}
      >
        <Box fontWeight="bold" fontSize="2xl">
          My Jobs
        </Box>
        <Box display="flex" alignItems="center">
          <Box as={BiCheckCircle} color="green.500" fontSize="lg" mr={2} />
          <Box fontSize="sm">Job Search Status</Box>
        </Box>
      </Box>
      <Box mb={6}>
        <Box fontWeight="bold" fontSize="lg" mb={2}>
          Applications
        </Box>
        <JobsDetails
          jobTitle="Product Designer"
          company="Techiint"
          workLocation="On Site"
          salaryRange="50k - 70k"
          salaryType="per month"
          status="Rejected"
          statusColor="red"
        />
        <JobsDetails
          jobTitle="Product Designer"
          company="Unacademy"
          workLocation="Work from Home"
          salaryRange="60k - 70k"
          salaryType="per month"
          status="In Process"
          statusColor="yellow.200"
        />
        <JobsDetails
          jobTitle="UX Designer"
          company="TechNovus"
          workLocation="Onsite"
          salaryRange="70k - 95k"
          salaryType="per month"
          status="Selected"
          statusColor="green.500"
        />
        <JobsDetails
          jobTitle="Product Designer"
          company="Techiint"
          workLocation="On Site"
          salaryRange="50k - 70k"
          salaryType="per month"
          status="Rejected"
          statusColor="red"
        />
        <JobsDetails
          jobTitle="Product Designer"
          company="Unacademy"
          workLocation="Work from Home"
          salaryRange="60k - 70k"
          salaryType="per month"
          status="In Process"
          statusColor="yellow.200"
        />
        <JobsDetails
          jobTitle="UX Designer"
          company="TechNovus"
          workLocation="Onsite"
          salaryRange="70k - 95k"
          salaryType="per month"
          status="Selected"
          statusColor="green.500"
        />
      </Box>
    </Box>
  );
};
