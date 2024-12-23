import { Button, Indicator } from "@mantine/core";
import { IconAsset, IconBell, IconLogin2, IconSettings, IconUser } from "@tabler/icons-react"
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "react-redux";

const Header = () => {
    const location = useLocation();

    const user = useSelector((state: any) => state.user);

    return ['/register', '/login'].includes(location.pathname) ? <></> : (
        <div className={'w-full bg-mine-shaft-950 text-white h-20 px-6 flex justify-between items-center font-[poppins]'}>
            <Link to={'/'} className={'flex gap-3 items-center text-bright-sun-400'}>
                <IconAsset className={'h-10 w-10'} stroke={1.25} />
                <div className={'text-3xl font-semibold'}>JobFinder</div>
            </Link>
            {NavLinks()}
            <div className={'flex gap-3 items-center'}>
                { user ?
                    <>
                        <ProfileMenu />
                        <div className={'bg-mine-shaft-900 p-1.5 rounded-full'}>
                            <IconSettings stroke={1.5} />
                        </div>
                        <div className={'bg-mine-shaft-900 p-1.5 rounded-full'}>
                            <Indicator color="bright-sun.4" size={6} processing>
                                <IconBell stroke={1.5} />
                            </Indicator>
                        </div>
                    </> :
                    <>
                        <Link
                            to={'/register'}
                            className={`
                                h-full 
                                flex 
                                items-center 
                                text-mine-shaft-300
                            `}
                        >
                            <Button leftSection={<IconLogin2 />} variant="outline" color="bright-sun.4">
                                Register
                            </Button>
                        </Link>
                        <Link
                            to={'/login'}
                            className={`
                                h-full 
                                flex 
                                items-center
                                text-mine-shaft-300
                            `}>
                            <Button leftSection={<IconUser />} variant="light" color="bright-sun.4">
                                Login
                            </Button>
                        </Link>
                    </>
                }
            </div>
        </div>
    )
}

export default Header;