import { companyData } from "../../Data/Company";

const About = () => {
    const company : {[key: string]: any} = companyData;
    return (
        <div className="flex flex-col gap-5">
            {Object.keys(company).map((key: string, index: number) => (key !== 'Name') &&
            ( 
                <div key={index}>
                    <div className="text-xl mb-4 font-semibold">{key}</div>
                    {key !== 'Website' && <div className="text-mine-shaft-300 text-justify">
                        {key !== 'Specialties' ? 
                            company[key] : 
                            company[key].map((item: string, index: number) => (
                                <span key={index}> &bull; {item}</span>)
                        )}
                    </div>}
                    {key === 'Website' && <a href={company[key]} target="_blank" rel="noreferrer" 
                    className="text-sm text-bright-sun-400">
                        {company[key]}
                    </a>}
                </div>
            ))}
        </div>
    );

}

export default About;