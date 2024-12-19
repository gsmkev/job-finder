import { Button, Divider, Text } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled, IconCalendarMonth, IconClockHour3 } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const JobHistoryCard = (props: any) => {
    const className = props.className || "w-96";
    return (
        <Link to={'/jobs'} className={`bg-mine-shaft-900 p-4 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 ${className}`}>
            <div className={'flex justify-between'}>
                <div className={'flex gap-2 items-center'}>
                    <div className={'p-2 bg-mine-shaft-800 rounded-md'}>
                        <img className={'h-7'} src={`/Icons/${props.company}.png`} alt="" />
                    </div>
                    <div>
                        <div className={'font-semibold'}>{props.jobTitle}</div>
                        <div className={'text-xs text-mine-shaft-300'}>{props.company} &#x2022; {props.applicants} Applicants</div>
                    </div>
                </div>
                {
                    props.saved ? 
                        <IconBookmarkFilled className={'text-bright-sun-400 cursor-pointer'} stroke={1.5} />:
                        <IconBookmark className={'text-mine-shaft-300 cursor-pointer'} stroke={1.5} />
                }
            </div>
            <div className={'flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs'}>
                <div>{props.experience}</div>
                <div>{props.jobType}</div>
                <div>{props.location}</div>
            </div>
            <Text className={'!text-xs text-justify text-mine-shaft-300'} lineClamp={3}>
                {props.description}
            </Text>
            <Divider size="xs" color={'mine-shaft.7'} />
            <div className={'flex justify-between font-normal'}>
                <div className={'font-semibold text-mine-shaft-200 text-sm'}>
                    &#36; {props.package}/hr
                </div>
                <div className={'flex gap-1 text-sm text-mine-shaft-400 items-center'}>
                    <IconClockHour3 className={'h-5 w-5'} stroke={1.5}/> {props.applied ? "Applied" : props.offered ? "Interviewed" : "Posted"} {props.postedDaysAgo} days ago
                </div>
            </div>
            {
                props.offered && (
                    <div className="flex gap-2 font-normal">
                        <Button variant="outline" color="bright-sun.4" fullWidth>Accept</Button>
                        <Button variant="light" color="bright-sun.4" fullWidth>Reject</Button>
                    </div>
                )
            }
            {
                props.interviewing && (
                    <div className="flex gap-1 text-sm items-center font-normal">
                        <IconCalendarMonth className="text-bright-sun-400 w-5 h-5" stroke={1.5} />August 27, 2024 &bull; <span className="text-mine-shaft-400">10:00 AM</span> 
                    </div>
                )
            }
        </Link>
    );
}

export default JobHistoryCard;