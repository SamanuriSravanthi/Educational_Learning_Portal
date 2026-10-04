import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import CourseHighlights from './components/CourseHighlights';
import LearningSection from './components/LearningSection';
import PlacementAssistance from './components/PlacementAssistance';
import CallbackForm from './components/CallbackForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <CourseHighlights />
        <LearningSection />
        <PlacementAssistance />
        <CallbackForm />
      </main>
      <Footer />
    </>
  );
}

export default App;