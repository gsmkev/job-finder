import { useEffect, useState } from "react";
import { changePassword, sendOTP, verifyOTP } from "../../Services/UserService";
import { Button, Modal, PasswordInput, PinInput, Text, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { registerValidation } from "../../Services/FormValidation";

export const ResetPassword = (props: any) => {    
    const [otp, setOtp] = useState('');
    const [optSent, setOtpSent] = useState(false);
    const [optSending, setOtpSending] = useState(false);
    const [verifiedOtp, setVerifiedOtp] = useState(false);
    
    const [otpCountdown, setOtpCountdown] = useState(300);
    const otpMinutes = Math.floor(otpCountdown / 60);
    const otpSeconds = otpCountdown % 60;

    const [resendOtpCountdown, setResendOtpCountdown] = useState(30);

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    useEffect(() => {
        if (otpCountdown > 0 && optSent) {
            const timer = setInterval(() => {
                setOtpCountdown(prev => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
        if (otpCountdown === 0) {
            notifications.show({
                title: 'OTP expired',
                message: 'Please try again.',
                color: 'red',
                autoClose: 5000
            });
        }
    }, [otpCountdown, optSent]);

    useEffect(() => {
        if (resendOtpCountdown > 0 && optSent) {
            const timer = setInterval(() => {
                setResendOtpCountdown(prev => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [resendOtpCountdown, optSent]);
    
    const handleSendOTP = () => {
        setOtpSending(true);
        sendOTP(email)
            .then((data) => {
                console.log(data);
                setOtpSent(true);
                setOtpSending(false);
                setOtpCountdown(300);
                setResendOtpCountdown(30);
                notifications.show({
                    title: 'OTP sent successfully',
                    message: 'Please check your email',
                    color: 'green',
                    autoClose: 3000
                });
            })
            .catch((error) => {
                console.error(error);
                setOtpSent(false);
                setOtpSending(false);
                notifications.show({
                    title: error.response?.data?.errorMessage,
                    message: 'Please try again.',
                    color: 'red',
                    autoClose: 5000
                });
            });
    };

    const handleVerifyOTP = () => {
        verifyOTP(email, otp)
        .then((data) => {
            console.log(data);
            setOtpSent(false);
            setVerifiedOtp(true);
            console.log('OTP verified successfully');
            setOtp('');
            notifications.show({
                title: 'OTP verified successfully',
                message: 'Now you can change your password',
                color: 'green',
                autoClose: 3000
            });
        })
        .catch((error) => {
            console.error(error.response?.data?.errorMessage);
            setOtp('');
            notifications.show({
                title: error.response?.data?.errorMessage,
                message: 'Please try again.',
                color: 'red',
                autoClose: 5000
            });
        });
    };
    
    const handleChangePassword = () => {
        changePassword(email, password)
        .then((data) => {
            console.log(data);
            props.close();
            setVerifiedOtp(false);
            setPassword('');
            setEmail('');
            notifications.show({
                title: 'Password changed successfully',
                message: 'You can now login with your new password',
                color: 'green',
                autoClose: 3000
            });
        })
        .catch((error) => {
            console.error(error.response?.data?.errorMessage);
            setPassword('');
            notifications.show({
                title: error.response?.data?.errorMessage,
                message: 'Please try again.',
                color: 'red',
                autoClose: 5000
            });
        });
    }

    return (
        <Modal 
            title={
                optSent 
                    ? "Enter your OTP code" 
                    : verifiedOtp 
                        ? "Write your new password" 
                        : "Reset your password"
            }
            onClose={() => {
                props.close();
                setOtpSent(false);
                setVerifiedOtp(false);
                setPassword('');
                setEmail('');
            }} 
            opened={props.opened}
        >   
            <div className="flex flex-col gap-6">
                {!optSent && !verifiedOtp && (
                    <TextInput 
                        value={email} 
                        onChange={(event) => setEmail(event.currentTarget.value)}
                        leftSection={<IconAt size={16} />}
                        rightSection={
                            <Button 
                                onClick={handleSendOTP}
                                loading={optSending}
                                autoContrast
                                size="xs"
                                className="mr-0.5"
                                variant="filled"
                                color="bright-sun.4"
                                disabled={email === '' || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) || optSent}
                            >
                                Reset
                            </Button>
                        }
                        rightSectionWidth="xl"
                        label="Email"
                        placeholder="Enter your email" 
                    />
                )}
                { optSent && (
                    <div className="flex items-center justify-center gap-4">
                        <PinInput
                            type="number"
                            placeholder="*"
                            length={6}
                            onComplete={handleVerifyOTP}
                            onAbort={() => setOtpSent(false)}
                            onChange={(event) => setOtp(event)}
                            disabled={otpCountdown === 0}
                        />
                        <Text size="sm" fw={500}>
                            {otpMinutes}:{otpSeconds < 10 ? `0${otpSeconds}` : otpSeconds}
                        </Text>
                    </div>
                )}  
                { optSent && (
                    <div className="flex justify-center gap-2">
                        <Button 
                            onClick={handleSendOTP}
                            loading={optSending}
                            autoContrast
                            size="xs"
                            className="mr-0.5"
                            variant="light"
                            color="bright-sun.4"
                            disabled={resendOtpCountdown > 0}
                        >
                            Resend OTP {resendOtpCountdown > 0 ? `(${resendOtpCountdown}s)` : ''}
                        </Button>
                        <Button
                            onClick={() => {
                                setOtpSent(false);
                                setOtp('');
                                setEmail('');
                            }}
                            autoContrast
                            size="xs"
                            className="mr-0.5"
                            variant="outline"
                            color="bright-sun.4"
                        >
                            Change Email
                        </Button>
                    </div>
                )}
                { !optSent && verifiedOtp && (
                    <div className="flex flex-col gap-6">
                        <PasswordInput 
                            value={password} 
                            onChange={(event) => {
                                const newPassword = event.currentTarget.value;
                                setPassword(newPassword);
                                setPasswordError(registerValidation('password', newPassword));
                            }}
                            leftSection={<IconLock size={16} />}
                            rightSectionWidth="xl"
                            label="New Password"
                            error={passwordError}
                            placeholder="Enter your new password"
                        />
                        <div className="flex justify-center gap-2">
                            <Button 
                                onClick={handleChangePassword}
                                autoContrast
                                variant="filled"
                                disabled={!!passwordError || !password}
                            >
                                Change Password
                            </Button>
                            <Button
                                onClick={() => {
                                    setVerifiedOtp(false);
                                    setOtpSent(false);
                                    setPassword('');
                                    setEmail('');
                                    props.close();
                                }}
                                autoContrast
                                variant="light"
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </Modal>
    );
}