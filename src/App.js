import { Box, Text } from "@chakra-ui/react";
import { NavBar } from "./Pages/NavBar";
import { Sidebar } from "./components/SideBar";
import { CustomBox } from "./components/CustomBox";
import { ButtonBox } from "./components/ButtonBox";
import { JobsBox } from "./components/JobsBox";

function App() {
  return (
    <div>
      <NavBar />
      <Box display={"flex"}>
        <Sidebar />
        <Box m={"3%"}>
          <Text fontSize="4xl">Search for jobs</Text>
          <CustomBox />
          <ButtonBox />
          <JobsBox />
        </Box>
      </Box>
    </div>
  );
}

export default App;
