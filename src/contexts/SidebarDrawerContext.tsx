import { useDisclosure } from "@chakra-ui/hooks"
import { UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { createContext, ReactNode } from "react"

interface SidebarDrawerProviderProps {
  children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose        //FECHAR A SIDEBAR QUANDO MUDAR DE PÁGINA/ TROCA DE ROTAS
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)