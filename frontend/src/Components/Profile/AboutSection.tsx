import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import { useDispatch } from 'react-redux';
import { notifications } from '@mantine/notifications';
import { Textarea, ActionIcon } from '@mantine/core';
import { updateProfile } from '../../Services/ProfileService';
import { changeProfile } from '../../Slices/ProfileSlice';
import { IconCheck, IconPencil, IconX } from '@tabler/icons-react';

const AboutSection = (props: any) => {
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();

    const form = useForm({
        initialValues: {
            about: props?.profile?.about || '',
        }
    });

    const handleEdit = async () => {
        if (!edit) {
            setEdit(true);
            form.setValues({
                about: props?.profile?.about || ''
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
                About
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
            {edit ? (
                <Textarea
                    value={form.values.about}
                    onChange={(event) => {
                        form.setFieldValue('about', event.currentTarget.value);
                    }}
                    minRows={3}
                    autosize
                    placeholder="Write something about yourself..."
                />
            ) : (
                <div className="text-sm text-mine-shaft-300 text-justify">
                    {props?.profile?.about}
                </div>
            )}
        </div>
    );
};

export default AboutSection;