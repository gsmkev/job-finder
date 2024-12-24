import { ActionIcon, Avatar, Divider, FileInput, Indicator, TagsInput } from "@mantine/core";
import { IconDeviceFloppy, IconPencil, IconPlus } from "@tabler/icons-react";
import CertificationCard from "./Certification/CertificationCard";
import ExperienceCard from "./Experience/ExperienceCard";
import { useEffect, useState } from "react";
import ExperienceInput from "./Experience/ExperienceInput";
import CertificationInput from "./Certification/CertificationInput";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../Services/ProfileService";
import { setProfile } from "../../Slices/ProfileSlice";
import PersonalSection from "./PersonalSection";
import AboutSection from "./AboutSection";

const Profile = (props: any) => {

    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);
    const profile = useSelector((state: any) => state.profile);

    const [edit, setEdit] = useState([false, false, false, false, false]);
    const [skills, setSkills] = useState(profile?.skills);
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

    useEffect(() => {
        if (user.id) {
            getProfile(user.id)
            .then((response: any) => {
                dispatch(setProfile(response));
            })
            .catch((error: any) => {
            });
        }
    }, [user.id, dispatch]);

    return (
        <div className="w-4/5 mx-auto">
            <div className="relative">
                <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
                <div className="absolute -bottom-[20%] left-3">
                    <Indicator className={`
                            [&_.mantine-Indicator-indicator]:!border-4
                            [&_img]:hover:opacity-80
                        `}
                        inline
                        autoContrast
                        offset={30}
                        label={<IconPencil className={'h-4/5 w-4/5'} />}
                        size={45}
                        position="bottom-end"
                        color="bright-sun.4"
                        withBorder
                    >
                        <Avatar className={`
                                !w-48 
                                !h-48 
                                border-mine-shaft-950 
                                border-8 
                                rounded-full`}
                            src="/avatar1.png"
                            alt=""
                        />
                        <FileInput className={`
                                absolute
                                bottom-2
                                right-2
                                z-[201]
                                w-12
                                [&_div]:text-transparent
                            `}
                            variant="unstyled"
                            size="lg"
                            radius="xl"
                            accept="image/png, image/jpeg"
                        />
                    </Indicator>
                </div>
            </div>
            <div className="px-3 mt-16">
                
                <PersonalSection user={user} profile={profile} />
                
                <Divider my={'xl'} />

                <AboutSection profile={profile} />
                
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
                                {profile?.skills?.map((skill: any, index: any) => (
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
                        {!addExperience && profile?.experiences?.map((exp: any, index: any) => (
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
                        {!addCertificate && profile?.certifications?.map((cert: any, index: any) => (
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