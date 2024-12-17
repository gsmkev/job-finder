import { Button, TagsInput } from "@mantine/core";
import { fields } from "../Data/PostJob";
import SelectInput from "./SelectInput";
import TextEditor from "./RichTextEditor";

const UploadJob = () => {
    const select = fields;

    return (
        <div className="w-4/5 mx-auto">
            <div className="text-2xl font-semibold mb-5">Post a Job</div>
            <div className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-10">
                    {select.map((field, index) => (
                        <SelectInput key={index} {...field} />
                    ))}
                </div>
                <div className="flex gap-10">
                    <TagsInput withAsterisk label="Skills" placeholder="Enter Skills" clearable acceptValueOnBlur className="w-full"  splitChars={[',', ' ', '|']}/>
                </div>
                <div className="[&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:!bg-bright-sun-400/20">
                    <div className="text-sm font-medium">Job Description</div>
                    <TextEditor/>
                </div>
                <div className="flex gap-4">
                    <Button color="bright-sun.4" variant="light">Upload Job</Button>
                    <Button color="bright-sun.4" variant="outline">Save as Draft</Button>
                </div>
            </div>
        </div>
    );
}

export default UploadJob;