import { Button, Divider, FileInput, LoadingOverlay, Notification, NumberInput, rem, Textarea, TextInput } from "@mantine/core";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplyJob = () => {
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [timer, setTimer] = useState(5);
    const navigate = useNavigate();
    const handlePreview = () => {
        setPreview(!preview);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const handleSubmit = () => {
        setSubmit(true);
        let time = 5;
        setInterval(() => {
            time--;
            setTimer(time);
            if (time === 0) navigate('/find-jobs');
        }, 1000);
    }
    return (
        <>
            <div className="w-2/3 mx-auto">
                <LoadingOverlay
                    className="!fixed"
                    visible={submit}
                    zIndex={1000}
                    overlayProps={{ radius: 'sm', blur: '2' }}
                    loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
                />
                <div className={'flex justify-between'}>
                    <div className={'flex gap-2 items-center'}>
                        <div className={'p-3 bg-mine-shaft-800 rounded-xl'}>
                            <img className={'h-14'} src={`/Icons/Google.png`} alt="" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className={'font-semibold text-2xl'}>Software Engineer</div>
                            <div className={'text-lg text-mine-shaft-300'}>Google &bull; 3 days ago &bull; 48 Applicants</div>
                        </div>
                    </div>
                </div>
                <Divider my={'xl'} />
                <div className="text-xl font-semibold mb-5">Submit your Application</div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-10 [&>*]:w-1/2">
                        <TextInput readOnly={preview} variant={preview ? "unstyled" : "default"} className={preview ? "text-mine-shaft-300 font-semibold" : ""} label="Full Name" withAsterisk placeholder="John Doe" />
                        <TextInput readOnly={preview} variant={preview ? "unstyled" : "default"} className={preview ? "text-mine-shaft-300 font-semibold" : ""} label="Email" withAsterisk placeholder="john@doe.com" />
                    </div>
                    <div className="flex gap-10 [&>*]:w-1/2">
                        <NumberInput readOnly={preview} variant={preview ? "unstyled" : "default"} className={preview ? "text-mine-shaft-300 font-semibold" : ""} label="Phone Number" withAsterisk placeholder="1 234 567 890" hideControls min={0} max={9999999999} clampBehavior="strict" />
                        <TextInput readOnly={preview} variant={preview ? "unstyled" : "default"} className={preview ? "text-mine-shaft-300 font-semibold" : ""} label="Website" withAsterisk placeholder="johndoe.com" />
                    </div>
                    <FileInput readOnly={preview} variant={preview ? "unstyled" : "default"} className={preview ? "text-mine-shaft-300 font-semibold" : ""} leftSection={<IconPaperclip />} label="Resume" placeholder="Upload your resume" withAsterisk leftSectionPointerEvents="none" />
                    <Textarea readOnly={preview} variant={preview ? "unstyled" : "default"} className={preview ? "text-mine-shaft-300 font-semibold" : ""} label="Cover Letter" placeholder="Write a cover letter" withAsterisk autosize minRows={4} />
                    {!preview && <Button onClick={handlePreview} color="bright-sun.4" variant="light">Preview</Button>}
                    {preview && (
                        <div className="flex gap-10 [&>*]:w-1/2">
                            <Button fullWidth onClick={handlePreview} color="bright-sun.4" variant="outline">Edit</Button>
                            <Button fullWidth onClick={handleSubmit} color="bright-sun.4" variant="light">Submit</Button>
                        </div>
                    )}
                </div>
            </div>
            <Notification icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />} className={`!border-bright-sun-400 -translate-y-20 !fixed z-[1001] top-0 left-[35%] transition duration-300 ease-in-out ${submit ? "translate-y-0" : "-translate-y-20"}`} title="Your application has been submitted successfully." color="bright-sun.4" mt="md" withCloseButton={false} withBorder>Redirecting to Find Jobs in {timer} seconds.
            </Notification>
        </>
    );
}

export default ApplyJob;