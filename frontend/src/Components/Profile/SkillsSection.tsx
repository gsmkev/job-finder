import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import { useDispatch } from 'react-redux';
import { notifications } from '@mantine/notifications';
import { Textarea, ActionIcon, TagsInput } from '@mantine/core';
import { updateProfile } from '../../Services/ProfileService';
import { changeProfile } from '../../Slices/ProfileSlice';
import { IconCheck, IconPencil, IconX } from '@tabler/icons-react';

const Skills = (props: any) => {
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();

    const form = useForm({
        initialValues: {
            skills: props?.profile?.skills || '',
        }
    });

    const handleEdit = async () => {
        if (!edit) {
            setEdit(true);
            form.setValues({
                skills: props?.profile?.skills || ''
            });
        } else {
            setEdit(false);
            const updates = { ...props.profile, ...form.values };
            try {
                const updatedProfile = await updateProfile(updates);
                dispatch(changeProfile(updatedProfile));
                notifications.show({
                    title: 'Profile updated',
                    message: 'Your profile has been updated successfully',
                    color: 'teal',
                    autoClose: 3000
                });
            } catch (error) {
                console.error("Failed to update profile:", error);
                notifications.show({
                    title: 'Failed to update profile',
                    message: 'An error occurred while updating your profile',
                    color: 'red',
                    autoClose: 3000
                });
            }
        }
    };

    return (
        <div className="px-3">
            <div className="text-2xl font-semibold mb-5 flex justify-between">
                Skills
                <div className="flex gap-2">
                    <ActionIcon 
                        onClick={handleEdit}
                        variant="subtle" 
                        color={edit ? 'green.8' : 'bright-sun.4'}
                        size="lg"
                    >
                        {edit ? (
                            <IconCheck className={'h-4/5 w-4/5'} />
                        ) : (
                            <IconPencil className={'h-4/5 w-4/5'} />
                        )}
                    </ActionIcon>
                    {edit && (
                        <ActionIcon
                            onClick={() => setEdit(false)}
                            variant="subtle"
                            color="red.8"
                            size="lg"
                        >
                            <IconX className={'h-4/5 w-4/5'} />
                        </ActionIcon>
                    )}
                </div>
            </div>
            {edit ?
                <TagsInput 
                    value={form.values.skills}
                    onChange={(event) => {
                        form.setFieldValue('skills', event);
                    }}
                    placeholder="Add your skills..."
                    className = {`
                            [&_.mantine-TagsInput-pill]:!text-bright-sun-400 
                            [&_.mantine-Pill-root]:!text-bright-sun-400
                        `}
                /> :
                <div className="flex flex-wrap gap-2">
                    {props?.profile?.skills?.map((skill: any, index: any) => (
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
    );
};

export default Skills;