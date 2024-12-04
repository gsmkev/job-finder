import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../Data/Data";

const Testimonials = () => {
    return (
        <div className={'mt-20 pb-5'}>
            <div className={'text-4xl mb-3 text-center font-semibold text-mine-shaft-100'}>
                What <span className={'text-bright-sun-400'}>users</span> says about us?
            </div>
            <div className={'flex justify-evenly'}>
                {testimonials.map((item, index) => (
                    <div key={index} className={'flex flex-col gap-3 w-[20%] border border-bright-sun-400 p-3 rounded-xl mt-10'}>
                        <div className={'flex gap-2 items-center'}>
                            <Avatar className={'!h-14 !w-14'} src={'/avatar1.png'} alt="it's me" />
                            <div className={'flex flex-col'}>
                                <div className={'text-lg text-mine-shaft-100 font-semibold'}>{item.name}</div>
                                <Rating value={item.rating} fractions={2} readOnly />
                            </div>
                        </div>
                        <div className={'text-xs text-mine-shaft-300'}>
                            {item.testimonial}
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default Testimonials;