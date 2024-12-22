import { similar } from "../../Data/Company";
import CompanyCard from "./CompanyCard";

const Similar = () => {
    return (
        <div className="w-1/4">
            <div className="text-xl font-semibold mb-5">
                <div className={'flex flex-col flex-wrap gap-5'}>Similar Companies
                    {similar.map((company, index) => (<CompanyCard key={index} {...company} />))}
                </div>
            </div>
        </div>
    );
}

export default Similar;