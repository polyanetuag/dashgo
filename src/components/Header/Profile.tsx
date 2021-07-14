import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
          <Box marginRight="4" textAlign="right">
            <Text>Polyane Tuag</Text>
            <Text color="gray.300" fontSize="small">
              pollyportugues@hotmail.com
            </Text>
          </Box>

          <Avatar size="md" name="Polyane Tuag" src="https://github.com/polyanetuag.png" />
        </Flex>
  )
}