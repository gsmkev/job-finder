import { Button, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../Services/UserService";

const form = {
    email: '',
    password: '',
}

const Login = () => {
    
    const iconAt = <IconAt style={{width: rem(16), height: rem(16)}} />;
    const iconLock = <IconLock style={{width: rem(16), height: rem(16)}} />;

    const [data, setData] = useState(form);

    const handleChange = (event: any) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = () => {
        loginUser(data)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error.response.data);
        });
    }

    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold">Login Account</div>
            <TextInput 
                value={data.email}
                onChange={handleChange}
                name="email"
                withAsterisk 
                leftSection={iconAt} 
                label="Email" 
                placeholder="Enter your email" 
            />
            <PasswordInput 
                value={data.password}
                onChange={handleChange}
                name="password"
                withAsterisk
                leftSection={iconLock}
                label="Password" 
                placeholder="Enter your password"
            /> 
            <Button 
                autoContrast 
                variant="filled" 
                onClick={handleSubmit}
            >
                Login
            </Button>
            <div className="mx-auto">
                Don't have an account? 
                <Link className="text-bright-sun-400 hover:underline font-medium" to={'/register'}>
                    Register here
                </Link>
            </div>
        </div>
    );
}

export default Login;