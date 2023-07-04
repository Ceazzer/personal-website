'use client';

import { Inter } from 'next/font/google'
import { FeaturesContext } from './injector'
import { useContext, useEffect } from 'react';
import HomeTemplate from '@/shared/components/templates/home_template';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (<>
    <HomeTemplate />
  </>
  )
}
