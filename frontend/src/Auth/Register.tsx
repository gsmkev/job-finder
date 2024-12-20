import { Anchor, Button, Checkbox, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Register = () => {

    const iconAt = <IconAt style={{width: rem(16), height: rem(16)}} />;
    const iconLock = <IconLock style={{width: rem(16), height: rem(16)}} />;

    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold">Register Account</div>
            <TextInput 
                withAsterisk
                label="Full Name" 
                placeholder="Enter your name"
            /> 
            <TextInput 
                withAsterisk 
                leftSection={iconAt}
                label="Email" 
                placeholder="Enter your email"
            /> 
            <PasswordInput 
                withAsterisk 
                leftSection={iconLock} 
                label="Password" 
                placeholder="Enter your password" 
            />
            <PasswordInput 
                withAsterisk 
                leftSection={iconLock} 
                label="Confirm Password" 
                placeholder="Confirm your password" 
            />
            <Checkbox autoContrast label={<>I agree to the <Anchor>terms and conditions</Anchor></>} />
            <Button autoContrast variant="filled" className="">Register</Button>
            <div className="mx-auto">
                Already have an account? 
                <Link className="text-bright-sun-400 hover:underline font-medium" to={'/login'}>
                    Sign in here
                </Link>
            </div>
        </div>
    );
}

export default Register;