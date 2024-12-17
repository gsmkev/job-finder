import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import JobDescription from "../JobDescription/JobDescription";

const JobsDescription = () => {
    return (
        <div className={'min-h-[100vh] bg-mine-shaft-950 font-[poppins] p-4'}>
            <Link className="my-4 inline-block" to={'/find-jobs'}>
                <Button leftSection={<IconArrowLeft size={20} />} color="bright-sun.4" variant="light">Back</Button>
            </Link>
            <div className="flex gap-5">
                <JobDescription/>
            </div>
        </div>
    );
}

export default JobsDescription;