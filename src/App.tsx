import { Header } from './components/header';
import { Footer } from './components/footer';
import { Profile } from './components/profile';
import { Skill } from './components/skills';
import { Project } from './components/project';
import { WorkExperience } from './components/work-experiences';
import { Education } from './components/education';
import { Contact } from './components/contact';
import { Reference } from './components/references';
import { useObservableState, useSubscription } from 'observable-hooks';
import { IPortfolio } from './utils/interfaces/interfaces';
import { getPorfolioData$, portfolioData$ } from './services/profile-service';
import { defaultValues } from './utils/consts/portfolio';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css'
import AOS from 'aos';
import { ScrollToTop } from './components/scroll-to-top';

export const App = () => {
  const [fullName, setFullName] = useState('');

  const portfolioData = useObservableState<IPortfolio>(
    portfolioData$, defaultValues
  );

  useSubscription(getPorfolioData$, (p) => { portfolioData$.next(p) });

  useEffect(() => {
    setFullName(
      portfolioData.profile.firstName.concat(' ')
        .concat(portfolioData.profile.lastName));
  }, [portfolioData])

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header fullName={fullName} />
      <div className="page-content">
        <div>
          <Profile fullName={fullName}
            profile={portfolioData.profile}
            socialMedias={portfolioData.socialMedia} />
          <Skill></Skill>
          <Project></Project>
          <WorkExperience></WorkExperience>
          <Education></Education>
          <Reference></Reference>
          <Contact></Contact>
        </div>
      </div>
      <Footer fullName={fullName}
        socialMedias={portfolioData.socialMedia} />
    </>
  );
};