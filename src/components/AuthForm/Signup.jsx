import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";

const Signup = () => {
    const [inputs, setInputs] = useState({
        email:'',
        password:'',
        fullName:'',
        username: '',
        confirmPassword:''
    });

    const [showPassword, setShowPassword] = useState(false);
    const { loading, error, signup } = useSignUpWithEmailAndPassword();

    return (
        <>
            <Input
                placeholder='Email'
                fontSize={14}
                type='email'
                size='sm'
                value={inputs.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <Input
                placeholder='Username'
                fontSize={14}
                type='text'
                size='sm'
                value={inputs.username}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
            <Input
                placeholder='Full Name'
                fontSize={14}
                type='text'
                size='sm'
                value={inputs.fullName}
                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
            <InputGroup size='sm'>
                <Input
                    placeholder='Password'
                    fontSize={14}
                    type={showPassword ? "text" : "password"}
                    value={inputs.password}
                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                />
                <InputRightElement>
                    <Button variant='ghost' size='sm' onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                </InputRightElement>
            </InputGroup>
            {error && (
                <Alert status='error' fontSize={13} p={2} borderRadius={4} mt={2}>
                    <AlertIcon fontSize={12} />
                    {error.message}
                </Alert>
            )}
            <Button
                w='full'
                colorScheme='blue'
                size='sm'
                fontSize={14}
                isLoading={loading}
                onClick={() => signup(inputs)}
                mt={2}
            >
                Sign Up
            </Button>
        </>
    );
}

export default Signup;
