import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExperienceCard from "./ExperienceCard";
import CertificationCard from "./CertificationCard";

const Profile = (props:any) => {
    return (
        <div className="w-2/3">
            <div className="relative">
                <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
                <img className="w-48 h-48 rounded-full absolute left-3 top-[8.5rem] transform -translate-y-1/2 border-mine-shaft-950 border-8" src="/avatar1.png" alt="" />
                <div className="px-3 mt-16">
                    <div className="text-3xl font-semibold flex justify-between">{props.name} <Button color="bright-sun.4" variant="light">Message</Button></div>
                    <div className="text-x flex gap-1 items-center"><IconBriefcase className="h-5 w-5" stroke={1.5} /> {props.role} &bull; {props.company}</div>
                    <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                        <IconMapPin className="h-5 w-5" stroke={1.5} /> {props.location}
                    </div>
                </div>
                <Divider mx={'xs'} my={'xl'} />
                <div className="px-3">
                    <div className="text-2xl font-semibold mb-3">About</div>
                    <div className="text-sm text-mine-shaft-300 text-justify">
                        {props.about}
                    </div>
                </div>
                <Divider mx={'xs'} my={'xl'} />
                <div className="px-3">
                    <div className="text-2xl font-semibold mb-3">Skills</div>
                    <div className="flex flex-wrap gap-2">
                        {props.skills.map((skill: any, index: any) => (
                            <div key={index} className="bg-bright-sun-300 bg-opacity-15 rounded-3xl px-3 py-1 text-bright-sun-400 text-sm font-medium">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
                <Divider mx={'xs'} my={'xl'} />
                <div className="px-3">
                    <div className="text-2xl font-semibold mb-5">Experience</div>
                        <div className="flex flex-col gap-8">
                            {props.experience.map((exp: any, index: any) => (
                                <ExperienceCard key={index} {...exp} />
                            ))}
                        </div>
                </div>
                <Divider mx={'xs'} my={'xl'} />
                <div className="px-3">
                    <div className="text-2xl font-semibold mb-5">Certifications</div>
                    <div className="flex flex-col gap-8">
                        {props.certifications.map((cert: any, index: any) => (
                            <CertificationCard key={index} {...cert} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;