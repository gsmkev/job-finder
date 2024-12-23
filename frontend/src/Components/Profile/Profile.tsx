import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core";
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

const Profile = (props: any) => {

    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);
    const profile = useSelector((state: any) => state.profile);

    const [edit, setEdit] = useState([false, false, false, false, false]);
    const [about, setAbout] = useState(profile?.about);
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
            console.log("Fetching profile for user ID:", user.id);
            getProfile(user.id)
                .then((response: any) => {
                    console.log("Profile fetched:", response);
                    dispatch(setProfile(response));
                })
                .catch((error: any) => {
                    console.log("Error fetching profile:", error);
                });
        }
    }, [user.id, dispatch]);
    
    useEffect(() => {
        if (profile?.about) {
            console.log("Updating local state with profile data");
            setAbout(profile.about);
            setSkills(profile.skills);
            
            console.log("Profile: ", profile.about);
        }
    }, [profile]);

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
                
                <PersonalSection user={user} profile={profile} />
                
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
                            { edit[1] ?  iconDeviceFloppy : iconPencil }
                        </ActionIcon>
                    </div>
                    {
                        edit[1] ? 
                                <Textarea 
                                    value={about}
                                    onChange={(event) => setAbout(event.currentTarget.value)}
                                    minRows={3}
                                    autosize
                                    placeholder="Write something about yourself..."
                                /> :
                            <div className="text-sm text-mine-shaft-300 text-justify">
                                {about}
                            </div>
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