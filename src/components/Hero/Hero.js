import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          My name is Cesar Pandares from Venezuela, I'm a fullstack developer with four years of experience in web development,
          analytical and responsible, committed to meeting goals,
          Self-taught and able to adapt to different work methods.
          Passionate about technology, I have refined my skills with a lot of effort
          and dedication.
        </SectionText>
       
      </LeftSection>
    </Section>
  </>
);

export default Hero;