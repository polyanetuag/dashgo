import { Flex, useBreakpointValue } from "@chakra-ui/react"
import { Logo } from "./Logo"
import { NotificationsNav } from "./NotificationsNav"
import { Profile } from "./Profile"
import { SearchBox } from "./SearchBox"

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

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
      <Logo />

      { isWideVersion && <SearchBox />}
    
      <Flex align="center" marginLeft="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}