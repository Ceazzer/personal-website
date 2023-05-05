'use client';

import { Inter } from 'next/font/google'
import { FeaturesContext, features } from './injector'
import { useContext, useEffect } from 'react';
import { ProfileSummarySection } from '@/core/feature/resume/presentation/sections/profileSummary';
import { Details } from '@/core/feature/resume/presentation/sections/experience/details';
import { Experience } from '@/core/feature/resume/presentation/sections/experience';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { resume } = useContext(FeaturesContext)
  
  useEffect(() => {
    return resume.state.avatar.avatarUrl$.subscribe((avatarUrl) => {
      console.log(avatarUrl)
    }).unsubscribe
  }, []);

  return (<>
    <ProfileSummarySection />
    <Experience />
  </>
  )
}
