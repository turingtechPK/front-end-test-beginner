import ContactNumber from './ContactNumber';

export default function CallUs() {
    return (
        <div className="flex flex-col items-center px-4">
            <p>Not sure which plan is right for you?</p>
            <p className="mb-5">Give us a call.</p>
            <div className="border border-border rounded-full py-5 w-full flex justify-center max-w-md">
                <ContactNumber />
            </div>
        </div>
    );
}
