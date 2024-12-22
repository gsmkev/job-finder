import { Tabs } from "@mantine/core";
import { jobList } from "../../Data/JobsData";
import JobHistoryCard from "./JobHistoryCard";

const JobHistory = () => {
    return (
        <div>
            <div className="text-2xl font-semibold mb-5">Google
                Job History
                <div>
                    <Tabs className="" variant="outline" radius={'lg'} defaultValue={'applied'}>
                        <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
                            <Tabs.Tab value="applied">Applied</Tabs.Tab>
                            <Tabs.Tab value="saved">Saved</Tabs.Tab>
                            <Tabs.Tab value="offered">Offered</Tabs.Tab>
                            <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
                        </Tabs.List>
                        <Tabs.Panel value="applied">
                            <div className="flex mt-10 flex-wrap gap-9 justify-around">
                                {jobList.map((job, index) => <JobHistoryCard key={index} {...job} applied />)}
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel value="saved">
                            <div className="flex mt-10 flex-wrap gap-9 justify-around">
                                {jobList.map((job, index) => <JobHistoryCard key={index} {...job} saved />)}
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel value="offered">
                            <div className="flex mt-10 flex-wrap gap-9 justify-around">
                                {jobList.map((job, index) => <JobHistoryCard key={index} {...job} offered />)}
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel value="interviewing">
                            <div className="flex mt-10 flex-wrap gap-9 justify-around">
                                {jobList.map((job, index) => <JobHistoryCard key={index} {...job} interviewing />)}
                            </div>
                        </Tabs.Panel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default JobHistory;