import { Button, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Services/UserService";
import { loginValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";

const form = {
    email: '',
    password: '',
}

const Login = () => {
    
    const iconAt = <IconAt style={{width: rem(16), height: rem(16)}} />;
    const iconLock = <IconLock style={{width: rem(16), height: rem(16)}} />;

    const [data, setData] = useState<{[key: string]: string}>(form);

    const [formErrors, setFormErrors] = useState<{[key: string]: string}>(form);
    const navigate = useNavigate();

    const handleChange = (event: any) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
        setFormErrors({
            ...formErrors, 
            [event.target.name]: ""
        });
    }

    const handleSubmit = () => {
        const newFormErrors = Object.keys(data)
            .reduce((errors: {[key: string]: string}, key) => {
                errors[key] = loginValidation(key, data[key]);
                return errors;
            }, 
            {}
        );

        setFormErrors(newFormErrors);
        
        if (Object.values(newFormErrors).every(error => error === '')) {
            loginUser(data)
            .then((data) => {
                console.log(data);
                setData(form);
                notifications.show({
                    title: 'Login successful',
                    message: 'Redirecting to Home Page',
                    color: 'teal',
                    withCloseButton: true,
                    icon: <IconCheck style={{width: "90%", height: "90%"}} />,
                    withBorder: true,
                    className: '!border-green-500/40',                    
                });
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            })
            .catch((error) => {
                console.log(error.response.data);
                notifications.show({
                    title: 'Login failed',
                    message: error.response?.data?.errorMessage || 'Invalid email or password',
                    color: 'red',
                    icon: <IconX style={{width: "90%", height: "90%"}} />,
                    withCloseButton: true,
                    withBorder: true,
                    className: '!border-red-500/40',
                });
            });
        }
    }

    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold">Login Account</div>
            <TextInput 
                value={data.email}
                onChange={handleChange}
                error={formErrors.email}
                name="email"
                withAsterisk 
                leftSection={iconAt} 
                label="Email" 
                placeholder="Enter your email" 
            />
            <PasswordInput 
                value={data.password}
                onChange={handleChange}
                error={formErrors.password}
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
                <span className={`
                        text-bright-sun-400 
                        hover:underline 
                        font-medium
                        cursor-pointer
                    `} 
                    onClick={() => {
                        navigate('/register');
                        setData(form);
                        setFormErrors(form);
                    }}
                >
                    Register here
                </span>
            </div>
        </div>
    );
}

export default Login;