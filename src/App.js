import CallUs from './components/CallUs';
import Contact from './components/Contact';
import CustomerSupport from './components/CustomerSupport';
import FooterContainer from './components/FooterContainer';
import FreePlan from './components/FreePlan';
import Header from './components/Header';
import HubspotForStarters from './components/HubspotForStarters';
import NavBar from './components/NavBar';
import PricingPlansContainer from './components/PricingPlansContainer';
import QuestionsContainer from './components/QuestionsContainer';
import RecommendedBundle from './components/RecommendedBundle';
import SecondaryNavbar from './components/SecondaryNavBar';
import ServiceHubHeader from './components/ServiceHubHeader';

export default function App() {
    return (
        <>
            <NavBar />
            <SecondaryNavbar />
            <Header />
            <div className="space-y space-y-20">
                <ServiceHubHeader />
                <PricingPlansContainer />
                <FreePlan />
                <HubspotForStarters />
                <RecommendedBundle />
                <CallUs />
                <CustomerSupport />
                <QuestionsContainer />
                <Contact />
                <FooterContainer />
            </div>
        </>
    );
}
