import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import PostedJob from "../PostedJob/PostedJob";
import PostedJobDescription from "../PostedJob/PostedJobDescription";

const PostedJobPage = () => {
    return (
        <div className={'min-h-[90vh] bg-mine-shaft-950 font-[poppins] p-4'}>
            <Link className="my-4 inline-block" to={'/find-jobs'}>
                <Button leftSection={<IconArrowLeft size={20} />} color="bright-sun.4" variant="light">Back</Button>
            </Link>
            <div className="flex gap-5">
                <PostedJob />
                <PostedJobDescription />
            </div>
        </div>
    );
}

export default PostedJobPage;