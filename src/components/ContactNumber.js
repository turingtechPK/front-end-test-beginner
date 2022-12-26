import companyNumber from '../companyNumber';

export default function ContactNumber() {
    return (
        <p className="flex gap-[15px] items-center">
            <img
                src={`${require('../images/call-icon.png')}`}
                alt="call icon"
            />
            <span className="text-magenta text-xl">{companyNumber}</span>
        </p>
    );
}
