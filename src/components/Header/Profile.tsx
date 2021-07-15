import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData= true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Polyane Tuag</Text>
          <Text color="gray.300" fontSize="small">
            pollyportugues@hotmail.com
          </Text>
        </Box>
      )}

          <Avatar size="md" name="Polyane Tuag" src="https://github.com/polyanetuag.png" />
        </Flex>
  )
}