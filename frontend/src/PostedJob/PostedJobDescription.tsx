import { Badge, Tabs } from "@mantine/core";
import JobDescription from "../JobDescription/JobDescription";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalents/TalentCard";

const PostedJobDescription = () => {
    return (
        <div className="mt-4 w-3/4 px-5">
            <div className="text-2xl font-semibold flex items-center">
                Software Enginner
                <Badge variant="light" size="sm" color="bright-sun.4" ml="sm">Badge</Badge>
            </div>
            <div className="font-medium text-mine-shaft-300 mb-5">
                New York, United States
            </div>
            <div>
                <Tabs variant="outline" radius={'lg'} defaultValue={'overview'}>
                    <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
                        <Tabs.Tab value="overview">Overview</Tabs.Tab>
                        <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                        <Tabs.Tab value="invited">Invited</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="overview" className="[&>div]:w-full">
                        <JobDescription edit />
                    </Tabs.Panel>
                    <Tabs.Panel value="applicants">
                        <div className="flex mt-10 flex-wrap gap-10 justify-around">
                            {talents.map((talent, index) => <TalentCard key={index} {...talent} className="w-96" posted />)}
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="invited">
                        <div className="flex mt-10 flex-wrap gap-10 justify-around">
                            {talents.map((talent, index) => <TalentCard key={index} {...talent} className="w-96" invited />)}
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    );
}

export default PostedJobDescription;