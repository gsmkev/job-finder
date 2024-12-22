import { Button, TextInput } from "@mantine/core";
import fields from "../../../Data/Profile";
import SelectInput from "../SelectInput";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";

const CertificationInput = (props: any) => {

    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const select = fields;

    return (
        <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">Add Certificate</div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput
                    withAsterisk
                    label="Certificate Name"
                    placeholder="Enter certificate name"
                />
                <SelectInput {...select[1]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput
                    withAsterisk
                    label="Certification ID"
                    placeholder="Enter certification ID"
                />
                <MonthPickerInput
                    value={startDate}
                    maxDate={new Date()}
                    onChange={setStartDate}
                    withAsterisk
                    label="Certification Date"
                    placeholder="Select certification date"
                />
            </div>
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

export default CertificationInput;