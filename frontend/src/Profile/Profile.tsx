import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core";
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus } from "@tabler/icons-react";
import CertificationCard from "./Certification/CertificationCard";
import ExperienceCard from "./Experience/ExperienceCard";
import { useState } from "react";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";
import ExperienceInput from "./Experience/ExperienceInput";
import CertificationInput from "./Certification/CertificationInput";

const Profile = (props: any) => {

    const [edit, setEdit] = useState([false, false, false, false, false]);
    const select = fields
    const [about, setAbout] = useState(props.about);
    const [skills, setSkills] = useState(props.skills);
    const [addExperience, setAddExperience] = useState(false);
    const [addCertificate, setAddCertificate] = useState(false);

    const iconDeviceFloppy = <IconDeviceFloppy className={'h-4/5 w-4/5'} />;
    const iconPencil = <IconPencil className={'h-4/5 w-4/5'} />;
    const iconPlus = <IconPlus className={'h-4/5 w-4/5'} />;

    const handleEdit = (index: any) => {
        const newEdit = [...edit];
        newEdit[index] = !newEdit[index]; 
        setEdit(newEdit);
    }

    const handleAddExperience = () => {
        setAddExperience(!addExperience);
    }

    const handleAddCertificate = () => {
        setAddCertificate(!addCertificate);
    }

    return (
        <div className="w-4/5 mx-auto">
            <div className="relative">
                <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
                <img className={`
                        w-48 
                        h-48 
                        border-mine-shaft-950 
                        border-8 
                        absolute 
                        -bottom-1/4 
                        left-3 
                        rounded-full
                    `}
                    src="/avatar1.png"
                    alt=""
                />
            </div>
            <div className="px-3 mt-16">
                
                {/* Personal inofrmation section */}
                <div className="text-3xl font-semibold flex justify-between">
                    {props.name}
                    <ActionIcon 
                        onClick={() => handleEdit(0)}
                        variant="subtle" 
                        color="bright-sun.4"
                        size="lg"
                    >
                        { edit[0] ? iconPencil : iconDeviceFloppy }
                    </ActionIcon>
                </div>
                {
                    edit[0] ? 
                        <>
                            <div className="text-x flex gap-1 items-center">
                                <IconBriefcase className="h-5 w-5" />
                                {props.role} &bull; {props.company}
                            </div>
                            <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                                <IconMapPin className="h-5 w-5" stroke={1.5} /> {props.location}
                            </div>
                        </> :
                        <>
                            <div className="flex gap-10 [&>*]:w-1/2">
                                <SelectInput {...select[0]} edit={edit[1]} />
                                <SelectInput {...select[1]} edit={edit[2]} />
                            </div>
                            <SelectInput {...select[2]} edit={edit[3]} />
                        </>
                }
                
                {/* About section */}
                <Divider my={'xl'} />
                <div className="px-3">
                    <div className="text-2xl font-semibold mb-5 flex justify-between">
                        About
                        <ActionIcon 
                            onClick={() => handleEdit(1)}
                            variant="subtle" 
                            color="bright-sun.4"
                            size="lg"
                        >
                            { edit[1] ?  iconPencil : iconDeviceFloppy }
                        </ActionIcon>
                    </div>
                    {
                        edit[1] ? 
                            <div className="text-sm text-mine-shaft-300 text-justify">
                                {about}
                            </div> :
                            <Textarea 
                                value={about}
                                onChange={(event) => setAbout(event.currentTarget.value)}
                                minRows={3}
                                autosize
                                placeholder="Write something about yourself..."
                            />
                    }
                </div>
                
                {/* Skills section */}
                <Divider my={'xl'} />
                <div className="px-3">
                    <div className="text-2xl font-semibold mb-5 flex justify-between">
                        Skills
                        <ActionIcon 
                            onClick={() => handleEdit(2)}
                            variant="subtle" 
                            color="bright-sun.4"
                            size="lg"
                        >
                            { edit[2] ? iconDeviceFloppy : iconPencil }
                        </ActionIcon>
                    </div>
                    {
                        edit[2] ? 
                            <TagsInput 
                                value={skills}
                                onChange={(value) => setSkills(value)}
                                placeholder="Add your skills..."
                            /> :
                            <div className="flex flex-wrap gap-2">
                                {props.skills.map((skill: any, index: any) => (
                                    <div
                                        key={index}
                                        className={`
                                            bg-bright-sun-300 
                                            bg-opacity-15 
                                            rounded-3xl 
                                            px-3 
                                            py-1 
                                            text-bright-sun-400 
                                            text-sm 
                                            font-medium
                                        `}>
                                        {skill}
                                    </div>
                                ))}
                            </div>
                    }
                </div>
                
                {/* Experience section */}
                <Divider my={'xl'} />
                <div className="px-3">
                    <div className="text-2xl font-semibold mb-5 flex justify-between">
                        Experience
                        <div className="flex gap-2">
                            <ActionIcon 
                                onClick={() => handleAddExperience()}
                                variant="subtle" 
                                color="bright-sun.4"
                                size="lg"
                            >
                                {iconPlus}
                            </ActionIcon>
                            <ActionIcon 
                                onClick={() => handleEdit(3)}
                                variant="subtle" 
                                color="bright-sun.4"
                                size="lg"
                            >
                                { edit[3] ? iconDeviceFloppy : iconPencil }
                            </ActionIcon>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        {!addExperience && props.experience.map((exp: any, index: any) => (
                            <ExperienceCard 
                                key={index} 
                                {...exp}
                                edit={edit[3]} 
                            />
                        ))}
                        { addExperience && <ExperienceInput add setEdit={setAddExperience} /> }
                    </div>
                </div>
                
                {/* Certifications section */}
                <Divider my={'xl'} />
                <div className="px-3">
                    <div className="text-2xl font-semibold mb-5 flex justify-between">
                        Certifications
                        <div className="flex gap-2">
                            <ActionIcon 
                                onClick={() => handleAddCertificate()}
                                variant="subtle" 
                                color="bright-sun.4"
                                size="lg"
                            >
                                {iconPlus}
                            </ActionIcon>
                            <ActionIcon 
                                onClick={() => handleEdit(4)}
                                variant="subtle" 
                                color="bright-sun.4"
                                size="lg"
                            >
                                { edit[4] ? iconDeviceFloppy : iconPencil }
                            </ActionIcon>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        {!addCertificate && props.certifications.map((cert: any, index: any) => (
                            <CertificationCard 
                                key={index} 
                                {...cert}
                                edit={edit[4]}
                            />
                        ))}
                        { addCertificate && <CertificationInput add setEdit={setAddCertificate} /> }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;