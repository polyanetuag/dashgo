import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react"
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from "react-icons/ri"

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"              //80px
      marginX="auto"
      marginTop="4"       //16px
      paddingX="6"        //24px
      align="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dashgo
        <Text as="span" marginLeft="1" color="pink.500">.</Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        paddingY="4"
        paddingX="8"
        marginLeft="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input 
          color="gray.50"
          variant="unstyled"
          paddingX="4"
          marginRight="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400'}}
        />

        <Icon as={RiSearchLine} fontSize="20" /> 
      </Flex>
    
      <Flex
      align="center"
      marginLeft="auto"
      >
        <HStack 
          spacing="4"
          marginX="8"
          paddingRight="8"
          paddingY="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box marginRight="4" textAlign="right">
            <Text>Polyane Tuag</Text>
            <Text color="gray.300" fontSize="small">
              pollyportugues@hotmail.com
            </Text>
          </Box>

          <Avatar size="md" name="Polyane Tuag" src="https://github.com/polyanetuag.png" />
        </Flex>
      </Flex>
    </Flex>
  )
}