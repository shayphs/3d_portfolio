import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks,
  Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            19:36
            https://www.youtube.com/watch?v=0fYi8SGA20k&t=3218s&ab_channel=JavaScriptMastery
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
