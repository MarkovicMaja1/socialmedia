import { Box, VStack, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Login from "./Login";
import Signup from "./Signup";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
  
    return (
        <>
            <Box border="1px solid gray" borderRadius={4} padding={5}>
                <VStack spacing={4}>
                <Text
                    fontSize="3xl"
                    fontWeight="bold"
                    fontStyle="italic"
                    transform="skew(-10deg)"
                    color="#3f3f40"
                >
                    SOCIAL MEDIA APP
                </Text>
                    {isLogin ? <Login /> : <Signup />}
                </VStack>
            </Box>
            <Box border="1px solid gray" borderRadius={4} padding={5} mt={4}>
                <Flex alignItems="center" justifyContent="center">
                    <Text fontSize={14} mx={2}>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                    </Text>
                    <Text
                        fontSize={14}
                        color="blue.500"
                        cursor="pointer"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? "Sign up" : "Log in"}
                    </Text>
                </Flex>
            </Box>
        </>
    );
};

export default AuthForm;
