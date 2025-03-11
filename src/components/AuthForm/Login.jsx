import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";

const Login = () => {
    const [inputs, setInputs] = useState({
        email:'',
        password:'',
    });
    
    const { loading, error, login } = useLogin();
    console.log("Error:", error);

    return (
        <>
            <Input
                placeholder="Email"
                fontSize={14}
                type="email"
                value={inputs.email}
                size="sm"
                onChange={(e) => setInputs({...inputs, email: e.target.value})}
            />
            <Input
                placeholder="Password"
                fontSize={14}
                size="sm"
                type="password"
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
            {error && (
                <Alert status="error" fontSize={13} p={2} borderRadius={4} mt={2}>
                    <AlertIcon fontSize={12} />
                    { "Invalid email or password. Please try again."}
                </Alert>
            )}

            <Button
                w="full"
                colorScheme="blue"
                size="sm"
                fontSize={14}
                isLoading={loading}
                onClick={() => login(inputs)}
                mt={2}
            >
                Log in
            </Button>   
        </>
    );
}

export default Login;
