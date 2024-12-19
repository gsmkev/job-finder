import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const TalentCard = (props : any) => {
    const className = props.className || "w-96";
    const [opened, { open, close }] = useDisclosure(false);
    const [value, setValue] = useState<Date | null>(null);
    const ref = useRef<HTMLInputElement>(null);
    return (
        <div className={`bg-mine-shaft-900 p-4 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 ${className}`}>
            <div className={'flex justify-between'}>
                <div className={'flex gap-2 items-center'}>
                    <div className={'p-2 bg-mine-shaft-800 rounded-full'}>
                        <Avatar size="lg" src={`/${props.image}.png`} alt="" />
                    </div>
                    <div>
                        <div className={'font-semibold text-lg'}>{props.name}</div>
                        <div className={'text-sm text-mine-shaft-300'}>{props.company} &#x2022; {props.role}</div>
                    </div>
                </div>
                <IconHeart className={'text-mine-shaft-300 cursor-pointer'} />
            </div>
            <div className={'flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs'}>
                {props.topSkills.map((skill: string, index: number) => (
                    <div key={index}>{skill}</div>
                ))}
            </div>
            <Text className={'!text-xs text-justify text-mine-shaft-300'} lineClamp={3}>
                {props.about}
            </Text>
            <Divider size="xs" color={'mine-shaft.7'} />
            {
                props.invited ? 
                    <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
                        <IconCalendarMonth className="w-5 h-5" stroke={1.5} />
                        <span className="text-sm">Interview: August 27, 2024 10:00 AM</span>
                    </div> : 
                    <div className={'flex justify-between'}>
                        <div className={'font-semibold text-mine-shaft-200 text-sm'}>
                            &#36; {props.expectedCtc}/hr
                        </div>
                        <div className={'flex gap-1 text-mine-shaft-400 text-sm items-center'}>
                            <IconMapPin className={'h-5 w-5'} stroke={1.5}/> <span className="text-sm">{props.location}</span>
                        </div>
                    </div>
            }
            <div className="flex [&>*]:w-1/2 [&>*]:p-1">
                {
                    !props.invited && <>
                        <Link to={`/talent-profile`}>
                            <Button color="bright-sun.4" variant="outline" fullWidth className="text-sm">View Profile</Button>
                        </Link>
                        <div>
                            {props.posted ?  <Button onClick={open}  rightSection={<IconCalendarMonth className="w-5 h-5" />} color="bright-sun.4" variant="outline" fullWidth className="text-sm">Schedule</Button> :
                                <Button color="bright-sun.4" variant="light" fullWidth className="text-sm">Message</Button>}
                        </div>
                    </>
                }
                {
                    props.invited && <>
                        <div>
                            <Button color="bright-sun.4" variant="outline" fullWidth className="text-sm">Accept</Button>
                        </div>
                        <div>
                            <Button color="bright-sun.4" variant="light" fullWidth className="text-sm">Reject</Button>
                        </div>
                    </>
                }
            </div>
            <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
                <div className="flex flex-col gap-4">
                    <DateInput value={value} minDate={new Date() } onChange={setValue} label="Date" placeholder="Enter date" />
                    <TimeInput label="Time" placeholder="Enter time" ref={ref} onClick={() => ref.current?.showPicker()} />
                    <Button color="bright-sun.4" variant="light" fullWidth>Schedule</Button>
                </div>
            </Modal>
        </div>
    );
}

export default TalentCard;