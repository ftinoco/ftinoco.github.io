import React from 'react'; 
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Profile } from './components/profile';
import { Skill } from './components/skills';
import { Project } from './components/project';
import { WorkExperience } from './components/work-experiences';
import { Education } from './components/education';
import { Contact } from './components/contact';
import { Reference } from './components/references';

export const App = () => { 
  return (
    <>
      <Header></Header>
      <div className="page-content">
        <div>
          <Profile></Profile>
          <Skill></Skill>
          <Project></Project>
          <WorkExperience></WorkExperience>
          <Education></Education>
          <Reference></Reference>
          <Contact></Contact>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};