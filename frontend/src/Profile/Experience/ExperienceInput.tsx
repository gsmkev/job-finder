import { useState } from "react";
import fields from "../../Data/Profile";
import { Button, Checkbox, Textarea } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import SelectInput from "../SelectInput";

const ExperienceInput = (props: any) => {

    const select = fields;
    const [description, setDescription] = useState(props.description);
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const [checked, setChecked] = useState(false);

    return (
        <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">{props.add ? "Add": "Edit"} Experience</div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput {...select[0]} />
                <SelectInput {...select[1]} />
            </div>
            <SelectInput {...select[2]} />
            <Textarea 
                value={description}
                onChange={(event) => setDescription(event.currentTarget.value)}
                minRows={3}
                autosize
                withAsterisk
                label="Summary"
                placeholder="Write something about job..."
            />
            <div className="flex gap-10 [&>*]:w-1/2">
                <MonthPickerInput
                    value={startDate}
                    onChange={setStartDate}
                    maxDate={endDate || undefined}
                    withAsterisk
                    label="Start Date"
                    placeholder="Select start date"
                />
                <MonthPickerInput
                    value={endDate}
                    onChange={setEndDate}
                    maxDate={new Date()}
                    minDate={startDate || undefined}
                    withAsterisk
                    disabled={checked}
                    label="End Date"
                    placeholder="Select end date"
                />
            </div>
            <Checkbox
                autoContrast
                label="Currently Working Here"
                checked={checked}
                onChange={(event) => setChecked(event.currentTarget.checked)}
            />
            <div className="flex gap-5">
                <Button
                    color="bright-sun.4"
                    variant="outline"
                    onClick={() => props.setEdit(false)}
                >
                    Save
                </Button>
                <Button
                    color="red.8"
                    variant="light"
                    onClick={() => props.setEdit(false)}
                >
                    Cancel
                </Button>
            </div>
        </div>
    )
}

export default ExperienceInput;