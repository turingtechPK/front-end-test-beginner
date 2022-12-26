import questionsData from '../questionsData';
import Heading from './Heading';
import Question from './Question';

export default function QuestionsContainer() {
    console.log(questionsData);
    const questionElements = questionsData.map((question) => (
        <Question question={question} />
    ));
    return (
        <div className="px-4 max-w-[1112px] mx-auto space-y-10 relative pt-1 pb-28">
            <img
                src={require('../images/faq-background.png')}
                alt="background"
                className="lgmax:hidden absolute -z-10 top-0"
            />
            <Heading headingText="Frequently Asked Questions" />
            <div className="space-y-5">{questionElements}</div>
            <p className="text-xs text-center">
                For more detailed information on product packaging and the
                limits that apply, please see our{' '}
                <a href="/" className="text-skyBlue">
                    Product and Services Catalog.
                </a>
                <img
                    className="inline ml-1"
                    src={`${require('../images/goto-link-icon.png')}`}
                    alt="goto link icon"
                />
            </p>
        </div>
    );
}
