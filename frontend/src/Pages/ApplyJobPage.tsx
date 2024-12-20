import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import ApplyJob from "../ApplyJobs/ApplyJob";

const ApplyJobPage = () => {
    return (
        <div className={'min-h-[100vh] bg-mine-shaft-950 font-[poppins] p-4'}>
            <Link className="my-4 inline-block" to={'/find-jobs'}>
                <Button leftSection={<IconArrowLeft size={20} />} color="bright-sun.4" variant="light">Back</Button>
            </Link>
            <ApplyJob />
        </div>
    );
}

export default ApplyJobPage;