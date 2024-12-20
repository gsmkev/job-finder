import { Button, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold">Login Account</div>
            <TextInput label="Email" placeholder="Enter your email" withAsterisk leftSection={<IconAt style={{width: rem(16), height: rem(16)}} />} />
            <PasswordInput leftSection={<IconLock style={{width: rem(16), height: rem(16)}} />} label="Password" placeholder="Enter your password" withAsterisk />
            <Button autoContrast variant="filled" className="">Register</Button>
            <div className="mx-auto">Don't have an account? <Link className="text-bright-sun-400 hover:underline font-medium" to={'/register'}>Register here</Link></div>
        </div>
    );
}

export default Login;