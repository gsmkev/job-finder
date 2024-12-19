import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
    const links = [
        { name: 'Find Jobs', url: '/find-jobs' },
        { name: 'Find Talents', url: '/find-talents' },
        { name: 'Upload Jobs', url: '/upload-jobs' },
        { name: 'Posted Jobs', url: '/posted-jobs' },
    ];
    const location = useLocation();
    return (
        <div className={'flex gap-5 text-mine-shaft-300 h-full'}>
            {links.map((link, index) => (
                <Link key={index} to={link.url} className={`border-t-[3px] h-full flex items-center ${location.pathname === link.url ? 'text-bright-sun-400 border-bright-sun-400' : 'border-transparent'}`}>
                    {link.name}
                </Link>
            ))}
        </div>
    );
};

export default NavLinks;