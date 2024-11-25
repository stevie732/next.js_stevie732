import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:732-239-7341">732-239-7341</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:stephenprahl@gmail.com">stephenprahl@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>&copy; 2024 Created & Designed By Stephen Prahl - USA</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/stevie732">
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/stephen-prahl-0270222a4">
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61562688098032">
          <AiFillFacebook size='3rem' />
        </SocialIcons>
        <SocialIcons href="https://www.youtube.com/@Stevie732">
            <AiFillYoutube size='3rem' />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
    );
};

export default Footer;
