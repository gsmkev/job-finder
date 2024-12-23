import { Button } from "@mantine/core";
import { useState } from "react";
import ExperienceInput from "./ExperienceInput";
import { formatDate } from "../../../Services/Utils";

const ExperienceCard = (props: any) => {

    const [edit, setEdit] = useState(false);

    return (
            edit ? 
                <ExperienceInput setEdit={setEdit} description={props.description} /> : 
                <div className="flex flex-col gap-2">
                    <div className={'flex justify-between'}>
                        <div className={'flex gap-2 items-center'}>
                            <div className={'p-2 bg-mine-shaft-800 rounded-md'}>
                                <img className={'h-7'} src={`/Icons/${props.company}.png`} alt="" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className={'font-semibold'}>{props.title}</div>
                                <div className={'text-sm text-mine-shaft-300'}>{props.company} &#x2022; {props.location}</div>
                            </div>
                        </div>
                        <div className="text-sm text-mine-shaft-300">
                            {formatDate(props.startDate)} - {formatDate(props.endDate)}
                        </div>
                    </div>
                    <div className="text-sm text-mine-shaft-300 text-justify">
                        {props.description}
                    </div>
                    <div className="flex gap-5">
                        {
                            props.edit && 
                                <>
                                    <Button onClick={() => setEdit(true)} color="bright-sun.4" variant="outline">Edit</Button>
                                    <Button color="red.8" variant="light">Delete</Button>
                                </>
                        }
                    </div>
                </div>
    );
}

export default ExperienceCard;