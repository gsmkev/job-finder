import { Avatar, Menu, Switch, rem } from '@mantine/core';
import {
    IconMessageCircle,
    IconUserCircle,
    IconFileText,
    IconMoon,
    IconSun,
    IconLogout2
} from '@tabler/icons-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeUser } from '../../Slices/UserSlice';

const ProfileMenu = () => {

    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);
    const navigate = useNavigate();

    const [checked, setChecked] = useState(false);
    const [opened, setOpened] = useState(false);

    const iconUser = <IconUserCircle style={{ width: rem(14), height: rem(14) }} />;
    const iconMessage = <IconMessageCircle style={{ width: rem(14), height: rem(14) }} />;
    const iconFile = <IconFileText style={{ width: rem(14), height: rem(14) }} />;
    const iconMoon = <IconMoon className='text-mine-shaft-300' style={{ width: rem(14), height: rem(14) }} />;
    const iconSun = <IconSun className='text-bright-sun-400' style={{ width: rem(14), height: rem(14) }} />;
    const iconLogout = <IconLogout2 style={{ width: rem(14), height: rem(14) }} />;

    const switchDarkMode = <Switch
        size="md"
        color='dark.4'
        offLabel={iconSun}
        onLabel={iconMoon}
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
    />;

    const handleLogout = () => {
        dispatch(removeUser());
        navigate('/');
    }

    return (
        <Menu opened={opened} onChange={setOpened} shadow="md" width={200}>
            <Menu.Target>
                <div className={'flex cursor-pointer gap-3 items-center'}>
                    <div>{user.name}</div>
                    <Avatar src="avatar1.png" alt="it's me" />
                </div>
            </Menu.Target>

            <Menu.Dropdown onChange={() => setOpened(true)}>
                <Menu.Item leftSection={iconUser}>
                    <Link to={'/profile'}>
                        Profile
                    </Link>
                </Menu.Item>
                <Menu.Item leftSection={iconMessage}>Messages</Menu.Item>
                <Menu.Item leftSection={iconFile}>Resume</Menu.Item>
                <Menu.Item leftSection={iconMoon} rightSection={switchDarkMode}>Dark Mode</Menu.Item>
                <Menu.Divider />
                <Menu.Item 
                    color='red' 
                    leftSection={iconLogout}
                    onClick={handleLogout}
                >
                    Logout
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}

export default ProfileMenu;