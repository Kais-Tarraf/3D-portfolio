import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Showcase from "./components/sections/Showcase";
import LogoSection from "./components/sections/LogoSection";
import FeatureCards from "./components/sections/FeatureCards";
const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Showcase />
			<LogoSection />
			<FeatureCards />
		</>
	);
};

export default App;
