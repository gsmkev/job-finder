import JobHistory from "../JobHistory/JobHistory";

const JobsHistoryPage = () => {
    return (
        <div className={'min-h-[90vh] bg-mine-shaft-950 font-[poppins] p-4'}>
            <div className="my-5">
                <JobHistory />
            </div>
        </div>
    );
}

export default JobsHistoryPage;