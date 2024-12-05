import { Divider, RangeSlider } from "@mantine/core";
import { dropdownData } from "../Data/JobsData";
import MultiInput from "./MultiInput";
import { useState } from "react";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([1, 100]);
    return (
        <div className={'flex gap-2 justify-around px-5 py-8'}>
            {dropdownData.map((item, index) => (
                <>
                    <div key={index} className={'w-1/5'}>
                        <MultiInput {...item}/>
                    </div>
                    <Divider mr={'xs'} size="xs" orientation="vertical" />
                </>
            ))}
            <div className={'w-1/5 [&_.mantine-Slider-label]:!translate-y-10'}>
                <div className={'flex text-sm justify-between'}>
                    <div>Salary</div>
                    <div>&#36;{value[0]} - &#36;{value[1]}</div>
                </div>
                <RangeSlider color={'bright-sun.4'} size={'xs'} value={value} onChange={setValue} 
                    labelTransitionProps={{
                        transition: 'skew-down',
                        duration: 150,
                        timingFunction: 'linear',
                    }}
                />
            </div>
        </div>
    );
}

export default SearchBar;