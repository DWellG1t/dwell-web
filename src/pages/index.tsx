import Head from 'next/head';

import SectionIntro from '@/components/pages/index/sectionIntro';
import SectionInfo from '@/components/pages/index/sectionInfo';
import SectionTec from '@/components/pages/index/sectionTec';
import SectionAnswers from '@/components/pages/index/sectionAnswers';
import SectionWorks from '@/components/pages/index/sectionWorks';
import SectionPrice from '@/components/pages/index/sectionPrice';
import SectionTextFullstack from '@/components/pages/index/sectionTextFullstack';

import Title from '@/components/templates/title';

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Denis Atwell</title>
      </Head>

      <SectionIntro />
      <SectionTextFullstack />
      <Title text='Мои ' accent='работы' pos='left'/>
      <SectionWorks />
      <Title text='Порядок ' accent='работы' pos='right'/>
      <SectionInfo />
      <Title text='Мои ' accent='технологии' pos='left'/>
      <SectionTec />
      <Title text='Ответы на ' accent='вопросы' pos='right'/>
      <SectionAnswers />
      <SectionPrice />

    </>
  )
} 