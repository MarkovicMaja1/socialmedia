import { Avatar, Box, Link, Tooltip, useBreakpointValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const ProfileLink = () => {
    const authUser = useAuthStore((state) => state.user);
    const isMobile = useBreakpointValue({ base: true, md: false });

	if(!authUser) return null;

    return (
        <Tooltip
            hasArrow
            label={"Profile"}
            placement='right'
            ml={1}
            openDelay={500}
            display={{ base: "block", md: "none" }}
        >
            <Link
                display={"flex"}
                to={`/${authUser?.username}`}
                as={RouterLink}
                alignItems={"center"}
                gap={isMobile ? 2 : 6}  
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius="full" 
                p={isMobile ? 2 : 4} 
                w={{ base: 10, md: "full" }}
                justifyContent={{ base: "center", md: "flex-start" }}
            >
                <Avatar size={isMobile ? "sm" : "lg"} src={authUser?.profilePicURL || ""} />  
                <Box fontSize={isMobile ? "sm" : "lg"} display={{ base: "none", md: "block" }}>{authUser.username}</Box>  
            </Link>
        </Tooltip>
    );
};

export default ProfileLink;
