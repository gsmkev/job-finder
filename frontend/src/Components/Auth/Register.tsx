import { 
    Anchor, 
    Button, 
    Checkbox, 
    Group, 
    PasswordInput, 
    Radio, 
    rem, 
    TextInput 
} from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../Services/UserService";

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

    const [data, setData] = useState(form);

    const handleChange = (event: any) => {
        setData({
            ...data,
            [event?.target?.name ?? 'accountType']: event?.target?.value ?? event
        });
    }

    const handleSubmit = () => {
        registerUser(data)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold">Register Account</div>
            <TextInput 
                value={data.name}
                onChange={handleChange}
                name="name"
                withAsterisk
                label="Full Name" 
                placeholder="Enter your name"
            /> 
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
            <PasswordInput 
                value={data.confirmPassword}
                onChange={handleChange}
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
                <Link className="text-bright-sun-400 hover:underline font-medium" to={'/login'}>
                    Sign in here
                </Link>
            </div>
        </div>
    );
}

export default Register;