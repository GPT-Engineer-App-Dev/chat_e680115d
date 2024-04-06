import { Box, Flex, VStack, Text, Input, Button, Avatar, Divider, Stack, useColorModeValue } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const messages = [
  { name: "John Doe", message: "Hey! How's it going?", time: "3:45 PM", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEyMzgzNjU1fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { name: "Jane Smith", message: "Did you finish the project?", time: "1:32 PM", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTIzODM2NTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  // Add more message history data here
];

const Index = () => {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex h="100vh" bg={bg}>
      <VStack w="300px" p="4" borderRight="1px" borderColor="gray.200">
        {messages.map((contact, index) => (
          <Flex key={index} w="100%" align="center" p="2" borderRadius="lg" _hover={{ bg: "gray.200" }}>
            <Avatar size="md" name={contact.name} src={contact.avatar} mr="3" />
            <Box flex="1">
              <Text fontWeight="bold">{contact.name}</Text>
              <Text fontSize="sm" color="gray.500">
                {contact.message}
              </Text>
            </Box>
            <Text fontSize="xs" color="gray.500">
              {contact.time}
            </Text>
          </Flex>
        ))}
      </VStack>
      <VStack flex="1" p="4">
        <Stack w="100%" h="calc(100% - 80px)" overflowY="auto" spacing="4" p="3">
          {/* Map through messages here and display them */}
          {messages.map((msg, index) => (
            <Flex key={index} w="100%" justify={index % 2 === 0 ? "flex-start" : "flex-end"}>
              <Box maxW="70%" p="3" bg="blue.100" borderRadius="lg">
                <Text>{msg.message}</Text>
                <Divider mt="2" mb="2" />
                <Text fontSize="xs" alignSelf="flex-end">
                  {msg.time}
                </Text>
              </Box>
            </Flex>
          ))}
        </Stack>
        <Flex w="100%" align="center">
          <Input placeholder="Type a message..." flex="1" mr="2" />
          <Button colorScheme="blue">
            <FaPaperPlane />
          </Button>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Index;
