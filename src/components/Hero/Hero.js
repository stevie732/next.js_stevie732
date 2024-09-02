import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Stephen Prahl Jr <br />
        Fullstack Developer
      </SectionTitle>
      <SectionText>
        Professional Fullstack Developer delivering Unique and breakthrough robost Services from UI/UX Design to Web Development, API's, and technical Applications.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.upwork.com/freelancers/~0169460e5e4d99ff5c'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;