import { IconArrowLeft, IconAsset } from "@tabler/icons-react";
import Register from "../Components/Auth/Register";
import Login from "../Components/Auth/Login";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

const AuthPage = () => {
    const locattion = useLocation();
    const navigate = useNavigate();
    return (
        <div className={'min-h-[90vh] bg-mine-shaft-950 font-[poppins] overflow-hidden relative'}>
            <Button 
                leftSection={ <IconArrowLeft size={20} /> }
                color="bright-sun.4" 
                variant="light" 
                my={'md'} 
                className={`
                    !absolute 
                    z-10
                    left-5
                `}
                onClick={() => navigate('/')}
            >
                Home
            </Button>
            <div className={`
                    w-[100vw] 
                    h-[100vh] 
                    transition-all 
                    ease-in-out 
                    duration-1000 
                    flex 
                    [&>*]:flex-shrink-0 
                    ${locattion.pathname === '/register' ? 
                        '-translate-x-1/2' : 
                        'translate-x-0'
                    }
                `}
            >
                <Login />
                <div className={`
                        w-1/2 
                        h-full 
                        bg-mine-shaft-900 
                        flex 
                        items-center 
                        gap-5 
                        justify-center 
                        transition-all 
                        ease-in-out 
                        duration-1000 
                        flex-col 
                        ${locattion.pathname === '/register' ? 
                            'rounded-r-[200px]' : 
                            'rounded-l-[200px]'
                        }
                    `}
                >                    
                    <div className={'flex gap-1 items-center text-bright-sun-400'}>
                        <IconAsset className={'h-20 w-20'} stroke={1.25}/>
                        <div className={'text-6xl font-semibold'}>
                            JobFinder
                        </div>
                    </div>
                    <div className="text-2xl text-mine-shaft-200 font-semibold">
                        Find the job made for you
                    </div>
                </div>
                <Register />
            </div>
        </div>
    );
}

export default AuthPage;