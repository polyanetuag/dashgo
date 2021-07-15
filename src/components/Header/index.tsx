import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react"
import { RiMenuLine } from "react-icons/ri"
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext"
import { Logo } from "./Logo"
import { NotificationsNav } from "./NotificationsNav"
import { Profile } from "./Profile"
import { SearchBox } from "./SearchBox"

export function Header() {
  const { onOpen } = useSidebarDrawer();

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
      { !isWideVersion && (
        <IconButton
          aria-label="Abrir navegação"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        >

        </IconButton>
      )}

      <Logo />

      { isWideVersion && <SearchBox />}
    
      <Flex align="center" marginLeft="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}