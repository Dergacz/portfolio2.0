import React from 'react';
import './App.css';
import {Contacts} from './Contacts/Contacts';
import {Footer} from './Footer/Footer';
import {Header} from './Header/Header';
import {Skills} from './Skills/Skills';
import {Projects} from './Projects/Projects';
import {Main} from './Main/Main';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
