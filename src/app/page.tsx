'use client';

import { Inter } from 'next/font/google'
import HomeTemplate from '@/shared/components/templates/home_template';
import { StyledItem } from '@/shared/components/templates/home_template/styles';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (<>
    <HomeTemplate>
      <HomeTemplate.Nav>
        <StyledItem $position='top'>about</StyledItem>
        <StyledItem $position='right'>contact</StyledItem>
        <StyledItem $position='left'>portfolio</StyledItem>
        <StyledItem $position='bottom'>strength</StyledItem>
      </HomeTemplate.Nav>
    </HomeTemplate>
  </>)
}
