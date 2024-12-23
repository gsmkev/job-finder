import { ActionIcon } from "@mantine/core";
import SelectInput from "./SelectInput";
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil } from "@tabler/icons-react";
import fields from "../../Data/Profile";
import { useState } from "react";
import { useForm } from "@mantine/form";

const PersonalSection = (props: any) => {
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
    const handleEdit = () => {
        if (!edit) {
            setEdit(true);
        } else {
            console.log("form.getValues() ", form.getValues());
        }
    };
    return (
        <>
        <div className="text-3xl font-semibold flex justify-between">
                {props?.user?.name}
                <ActionIcon 
                    onClick={handleEdit}
                    variant="subtle" 
                    color="bright-sun.4"
                    size="lg"
                >
                    { edit ? 
                        <IconDeviceFloppy className={'h-4/5 w-4/5'} /> : 
                        <IconPencil className={'h-4/5 w-4/5'} /> 
                    }
                </ActionIcon>
            </div>
            {
                edit ? 
                    <>
                        <div className="flex gap-10 [&>*]:w-1/2">
                            <SelectInput {...select[0]} />
                            <SelectInput {...select[1]} />
                        </div>
                        <SelectInput {...select[2]} />
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