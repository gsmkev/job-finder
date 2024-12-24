import { ActionIcon } from "@mantine/core";
import SelectInput from "./SelectInput";
import { 
    IconBriefcase, 
    IconCheck, 
    IconMapPin, 
    IconPencil, 
    IconX 
} from "@tabler/icons-react";
import fields from "../../Data/Profile";
import { useState } from "react";
import { useForm } from "@mantine/form";
import { updateProfile } from "../../Services/ProfileService";
import { useDispatch } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { notifications } from "@mantine/notifications";

const PersonalSection = (props: any) => {
    const dispatch = useDispatch();
    const select = fields;
    const [edit, setEdit] = useState(false);

    const form = useForm({
        mode: 'controlled',
        initialValues: {
            jobTitle: '',
            company: '',
            location: ''
        }
    });

    const handleEdit = async () => {
        if (!edit) {
            setEdit(true);
            form.setValues({
                jobTitle: props?.profile?.jobTitle,
                company: props?.profile?.company,
                location: props?.profile?.location
            });
        } else {
            setEdit(false);
            const updates = { ...props.profile, ...form.getValues() };
            try {
                const updatedProfile = await updateProfile(updates);
                dispatch(changeProfile(updatedProfile));
                notifications.show({
                    title: 'Profile updated',
                    message: 'Your profile has been updated successfully',
                    color: 'teal',
                    autoClose: 3000
                })
            } catch (error) {
                console.error("Failed to update profile:", error);
                notifications.show({
                    title: 'Failed to update profile',
                    message: 'An error occurred while updating your profile',
                    color: 'red',
                    autoClose: 3000
                })
            }
        }
    };
    return (
        <>
            <div className="text-3xl font-semibold flex justify-between">
                {props?.user?.name}
                <div className="flex gap-2">
                    <ActionIcon 
                        onClick={handleEdit}
                        variant="subtle" 
                        color= {edit ? 'green.8' : 'bright-sun.4'}
                        size="lg"
                    >
                        { edit ? 
                            <IconCheck className={'h-4/5 w-4/5'} /> : 
                            <IconPencil className={'h-4/5 w-4/5'} /> 
                        }
                    </ActionIcon>
                    { edit && 
                        <ActionIcon
                            onClick={() => setEdit(false)}
                            variant="subtle" 
                            color="red.8"
                            size="lg"
                        >
                            <IconX className={'h-4/5 w-4/5'} />
                        </ActionIcon>
                    }
                </div>
            </div>
            {
                edit ? 
                    <>
                        <div className="flex gap-10 [&>*]:w-1/2">
                            <SelectInput 
                                form={form}
                                name="jobTitle"
                                {...select[0]} 
                            />
                            <SelectInput
                                form={form}
                                name="company"
                                {...select[1]}
                            />
                        </div>
                        <SelectInput 
                            form={form}
                            name="location"
                            {...select[2]} 
                        />
                    </> :
                    <>
                        <div className="text-x flex gap-1 items-center">
                            <IconBriefcase className="h-5 w-5" />
                            {props?.profile?.jobTitle} &bull; {props?.profile?.company}
                        </div>
                        <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                            <IconMapPin className="h-5 w-5" stroke={1.5} /> {props?.profile?.location}
                        </div>
                    </>
            }
        </>
    );
}

export default PersonalSection;