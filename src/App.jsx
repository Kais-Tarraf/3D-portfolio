import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Showcase from "./components/sections/Showcase";
import LogoSection from "./components/sections/LogoSection";
import FeatureCards from "./components/sections/FeatureCards";
import ExperienceSection from "./components/sections/ExperienceSection";
import TechStack from "./components/sections/TechStack";
import Testimonails from "./components/sections/Testimonails";
import Contact from "./components/sections/Contact";
const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Showcase />
			<LogoSection />
			<FeatureCards />
			<ExperienceSection />
			<TechStack />
			<Testimonails />
			<Contact />
		</>
	);
};

export default App;
