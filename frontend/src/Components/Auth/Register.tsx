import { 
    Anchor, 
    Button, 
    Checkbox, 
    Group, 
    LoadingOverlay, 
    PasswordInput, 
    Radio, 
    rem, 
    TextInput 
} from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../Services/UserService";
import { registerValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";

const form = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: 'APPLICANT',
}

const Register = () => {

    const iconAt = <IconAt style={{width: rem(16), height: rem(16)}} />;
    const iconLock = <IconLock style={{width: rem(16), height: rem(16)}} />;

    const [data, setData] = useState<{[key: string]: string}>(form);

    const [formErrors, setFormErrors] = useState<{[key: string]: string}>(form);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const handleChange = (event: any) => {
        
        let { name, value } = event.target;

        if (typeof(event) === 'string') {
            setData({
                ...data,
                accountType: event
            });
            return;
        } else {
            setData({
                ...data,
                [name]: value
            });
        }
        
        setFormErrors({
            ...formErrors, 
            [name]: registerValidation(name, value)
        });
        if ((name === 'password' && data.confirmPassword) || name === 'confirmPassword') {
            const otherPassword = name === 'password' ? data.confirmPassword : data.password;
            if (value !== otherPassword) {
                setFormErrors(prev => ({
                    ...prev,
                    [name === 'password' ? 'confirmPassword' : name]: 'Passwords do not match'
                }));
            }
        }
    }

    const handleSubmit = () => {
        setLoading(true);
        const newFormErrors = Object.keys(data)
            .filter(key => key !== 'accountType')
            .reduce((errors: {[key: string]: string}, key) => {
                if (key === 'confirmPassword') {
                    errors[key] = data[key] !== data['password'] ? 'Passwords do not match' : '';
                } else {
                    errors[key] = registerValidation(key, data[key]);
                }
                return errors;
            }, {});

        setFormErrors(newFormErrors);

        if (Object.values(newFormErrors).some(error => error !== '')) {
            return;
        }

        registerUser(data)
            .then((data) => {
                console.log(data);
                notifications.show({
                    title: 'Account created successfully',
                    message: 'Redirecting to login page',
                    color: 'teal',
                    withCloseButton: true,
                    icon: <IconCheck style={{width: "90%", height: "90%"}} />,
                    withBorder: true,
                    className: '!border-green-500/40',                    
                });
                setTimeout(() => {
                    setLoading(false);
                    navigate('/login');
                    setData(form);
                }, 4000);
            })
            .catch((error) => {
                setLoading(false);
                console.log(error.response.data);
                notifications.show({
                    title: 'Account creation failed',
                    message: error.response?.data?.errorMessage || 'An error occurred during registration',
                    color: 'red',
                    icon: <IconX style={{width: "90%", height: "90%"}} />,
                    withCloseButton: true,
                    withBorder: true,
                    className: '!border-red-500/40',
                });
            });
    }

    return (
        <>  
            <LoadingOverlay
                visible={loading}
                className="translate-x-1/2"
                color="gray"
                zIndex={1000}
                overlayProps={{radius: 'sm', blur: 2}}
                loaderProps={{color: 'bright-sun.4', type: 'bars'}}
            />
            <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
                <div className="text-2xl font-semibold">Register Account</div>
                <TextInput 
                    value={data.name}
                    onChange={handleChange}
                    error={formErrors.name}
                    name="name"
                    withAsterisk
                    label="Full Name" 
                    placeholder="Enter your name"
                /> 
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
                <PasswordInput 
                    value={data.confirmPassword}
                    onChange={handleChange}
                    error={formErrors.confirmPassword}
                    name="confirmPassword"
                    withAsterisk 
                    leftSection={iconLock} 
                    label="Confirm Password" 
                    placeholder="Confirm your password" 
                />
                <Radio.Group
                    value={data.accountType}
                    onChange={handleChange}
                    name="accountType"
                    label="What you are looking for?"
                    withAsterisk
                >
                    <Group mt="xs">
                        <Radio 
                            className={`
                                py-4 
                                px-6 
                                border 
                                hover:bg-mine-shaft-900
                                has-[:checked]:bg-bright-sun-400/5
                                rounded-lg
                                has-[:checked]:border-bright-sun-400
                                border-mine-shaft-800 
                            `}
                            value="APPLICANT" 
                            label="Jobs" 
                        />
                        <Radio 
                            className={`
                                py-4 
                                px-6 
                                border 
                                hover:bg-mine-shaft-900
                                has-[:checked]:bg-bright-sun-400/5
                                rounded-lg
                                has-[:checked]:border-bright-sun-400
                                border-mine-shaft-800 
                            `}
                            value="EMPLOYER" 
                            label="Talents" 
                        />
                    </Group>
                </Radio.Group>
                <Checkbox autoContrast label={<>I agree to the <Anchor>terms and conditions</Anchor></>} />
                <Button 
                    autoContrast 
                    variant="filled" 
                    onClick={handleSubmit}
                >
                        Register
                </Button>
                <div className="mx-auto">
                    Already have an account? 
                    <span className={`
                            text-bright-sun-400 
                            hover:underline 
                            font-medium
                            cursor-pointer
                        `} 
                        onClick={() => {
                            navigate('/login');
                            setData(form);
                            setFormErrors(form);
                        }}
                    >
                        Sign in here
                    </span>
                </div>
            </div>
        </>
    );
}

export default Register;