import { useColorMode, useColorModeValue} from "@chakra-ui/react"
const Theme = () => {
    const {toggleColorMode} = useColorMode();
    const bgColor = useColorModeValue('gray.50', 'whitealpha.50');
    const secondaryTextColor = useColorModeValue("gray.600", "gray.400");
    return (

    );
}