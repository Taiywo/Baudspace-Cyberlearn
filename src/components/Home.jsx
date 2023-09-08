import Hero from "./Hero"
import Course from "./pages/Course"
import Faq from "./pages/Faq"

import Program from "./pages/Program"
import Cyberjourney from "./pages/Cyberjourney"
import Whyus from "./pages/Whyus"
import Requirement from "./pages/Requirement"
import { Whatsapp } from "./molecules/Whatsapp"





const Home = () => {

   


    return (
        <div className="font-mono" id="home">
            <Hero />
            <Cyberjourney/>
            <Whyus/>
            <Course/>
            <Program />
            <Requirement/>
            <Faq/>
            <Whatsapp/>
            
            
</div>
    )
}

export default Home