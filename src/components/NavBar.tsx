import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import { px } from "framer-motion"
import ToggleColorMode from "./ToggleColorMode"
import SearchInput from "./SearchInput"

interface Props {
  onSearch: (searchText: string) => void
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize="60px"></Image>
        <SearchInput onSearch={onSearch}/>
        <ToggleColorMode/>
    </HStack>
  )
}

export default NavBar