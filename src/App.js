import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Feature from './components/Features';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import Faq from './components/Faq';


function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
        <Switch>
            <Route exact path="/" component={Layout} />
            <Route exact path="/feature" component={Feature} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/testimonial" component={Testimonial} />
            <Route exact path="/faq" component={Faq} />
        </Switch>
     
      <Footer/>
    </div>

    </Router>
    
  );
}

export default App;
