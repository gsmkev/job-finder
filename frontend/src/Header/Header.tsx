import {Avatar, Indicator} from "@mantine/core";
import {IconAsset, IconBell, IconSettings} from "@tabler/icons-react"
import NavLinks from "./NavLinks";
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    return ['/register', '/login'].includes(location.pathname) ? <></> : (
        <div className={'w-full bg-mine-shaft-950 text-white h-20 px-6 flex justify-between items-center font-[poppins]'}>
            <div className={'flex gap-3 items-center text-bright-sun-400'}>
                <IconAsset className={'h-10 w-10'} stroke={1.25}/>
                <div className={'text-3xl font-semibold'}>JobFinder</div>
            </div>
            {NavLinks()}
            <div className={'flex gap-3 items-center'}>
                <div className={'flex gap-3 items-center'}>
                    <div>Kevin</div>
                    <Avatar src="avatar1.png" alt="it's me"/>
                </div>
                <div className={'bg-mine-shaft-900 p-1.5 rounded-full'}>
                    <IconSettings stroke={1.5}/>
                </div>
                <div className={'bg-mine-shaft-900 p-1.5 rounded-full'}>
                    <Indicator color="bright-sun.4" size={6} processing>
                        <IconBell stroke={1.5}/>
                    </Indicator>
                </div>
            </div>
        </div>
    )
}

export default Header;