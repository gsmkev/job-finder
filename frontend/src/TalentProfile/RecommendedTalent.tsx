import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalents/TalentCard";

const RecommendedTalent = () => {
    return (
        <div className="flex flex-col gap-2">
            <div className="text-xl font-semibold mb-5">Recommended Talent</div>
            <div className="flex flex-col flex-wrap gap-5 justify-around">
                {talents.map((talent, index) => (index < 4) && (<TalentCard key={index} {...talent} />))}
            </div>
        </div>
    );
}

export default RecommendedTalent;