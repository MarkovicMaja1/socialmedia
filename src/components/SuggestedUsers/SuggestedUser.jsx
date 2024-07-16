import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import useFollowUser from "../../hooks/useFollowUser";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

const SuggestedUser = ({ user, setUser }) => {
    const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(user.uid);
    const authUser = useAuthStore((state) => state.user);

    const onFollowUser = async () => {
        await handleFollowUser();
        setUser({
            ...user,
            followers: isFollowing
                ? user.followers.filter((follower) => follower.uid !== authUser.uid)
                : [...user.followers, authUser],
        });
    };

    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            w="full"
            p={3}
            borderBottom="1px solid"
            borderColor="gray.200"
        >
            <Flex alignItems="center" gap={4}>
                <Link to={`/${user.username}`}>
                    <Avatar src={user.profilePicURL} size="md" />
                </Link>
                <VStack spacing={1} alignItems="flex-start">
                    <Link to={`/${user.username}`}>
                        <Box fontSize="sm" fontWeight="semibold">
                            {user.fullName}
                        </Box>
                    </Link>
                    <Box fontSize="xs" color="gray.500">
                        {user.followers.length} followers
                    </Box>
                </VStack>
            </Flex>
            {authUser.uid !== user.uid && (
                <Button
                    fontSize="xs"
                    variant="link"
                    fontWeight="medium"
                    colorScheme={isFollowing ? "blue" : "gray"}
                    onClick={onFollowUser}
                    isLoading={isUpdating}
                    _hover={{ textDecoration: "none", color: isFollowing ? "blue.600" : "gray.600" }}
                >
                    {isFollowing ? "Unfollow" : "Follow"}
                </Button>
            )}
        </Flex>
    );
};

export default SuggestedUser;
