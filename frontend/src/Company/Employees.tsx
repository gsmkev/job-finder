import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalents/TalentCard";

const Employees = () => {
    return (
        <div className="flex mt-10 flex-wrap gap-9">
            {talents.map((talent, index) => <TalentCard key={index} {...talent} className="w-72" />)}
        </div>
    );
}

export default Employees;