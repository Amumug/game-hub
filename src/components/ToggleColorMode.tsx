import { Button, HStack } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
    <Button onClick={() => toggleColorMode()} pos="absolute" top="0" right="0" m="1rem" padding="0">
      {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
    </HStack>
  );
};

export default ToggleColorMode;
