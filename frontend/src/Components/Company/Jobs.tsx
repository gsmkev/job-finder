import { jobList } from "../../Data/JobsData";
import JobCard from "../FindJobs/JobCard";

const Jobs = () => {
    return (
        <div className="flex mt-10 flex-wrap gap-9">
            {jobList.map((job, index) => <JobCard key={index} {...job} className="w-72" />)}
        </div>
    );
}

export default Jobs;