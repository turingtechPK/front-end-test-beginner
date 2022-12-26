import ContactNumber from './ContactNumber';
import Heading from './Heading';

export default function Contact() {
    return (
        <div className="flex flex-col gap-9 sm:items-center px-4 max-w-[1112px] mx-auto">
            <Heading headingText="Still have questions about how HubSpot's software can help your business?" />
            <ContactNumber />
        </div>
    );
}
