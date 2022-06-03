import Sidebar from "./components/Sidebar";
import NavItem from "./components/NavItem";

import {
  Avatar,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Input,
  theme,
} from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      
      <Flex w="100vw" minH="100vh" justify="center" align="center">
        <Flex w="60%" h="auto" flexDirection="column" mt="50px">
          <Heading mb="50px">Profile</Heading>
          <Flex w="100%" flexDirection={["column", "column", "row"]}>
            <Flex w={["90%", "90%", "30%"]}>
            <Sidebar />
              <Avatar
                size="2xl"
                name="Segun Adebayo"
                src="devil.jpg"
              />
            
            </Flex>
            <Flex
              w={["90%", "90%", "60%"]}
              flexDirection={"column"}
              justify="space-evenly"
              minH="50vh"
            >
              
              <NavItem/>
              <Heading size="sm" textTransform="uppercase">
                Profile Information
              </Heading>

              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <Input placeholder="Keywords" />
              <Button colorScheme="cyan">Save</Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
