import {Avatar, Indicator} from "@mantine/core";
import {IconAsset, IconBell, IconSettings} from "@tabler/icons-react"

const Header = () => {
    return (
        <div className={'w-full bg-mine-shaft-950 text-white h-20 px-6 flex justify-between items-center'}>
            <div className={'flex gap-3 items-center text-bright-sun-400'}>
                <IconAsset className={'h-10 w-10'} stroke={1.25}/>
                <div className={'text-3xl font-semibold'}>JobFinder</div>
            </div>
            <div className={'flex gap-5'}>
                <a href="#">Find Jobs</a>
                <a href="#">Find Talent</a>
                <a href="#">Upload Job</a>
                <a href="#">About Us</a>
            </div>
            <div className={'flex gap-3 items-center'}>
                <div className={'flex gap-3 items-center'}>
                    <div>Kevin</div>
                    <Avatar src="avatar-1.png" alt="it's me"/>
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