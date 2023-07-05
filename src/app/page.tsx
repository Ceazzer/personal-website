'use client';

import { Inter } from 'next/font/google'
import { FeaturesContext } from './injector'
import { useContext, useEffect } from 'react';
import HomeTemplate from '@/shared/components/templates/home_template';
import { Item } from '@/shared/components/templates/home_template/styles';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (<>
    <HomeTemplate>
      <HomeTemplate.Nav>
        <Item $position='top'>Home</Item>
        <Item $position='right'>about</Item>
        <Item $position='left'>contact</Item>
        <Item $position='bottom'>portfolio</Item>
      </HomeTemplate.Nav>
    </HomeTemplate>
  </>
  )
}
