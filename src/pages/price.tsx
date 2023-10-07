import Head from 'next/head';

import SectionIntro from '@/components/pages/index/sectionIntro';
import SectionInfo from '@/components/pages/index/sectionInfo';
import SectionTec from '@/components/pages/index/sectionTec';
import SectionAnswers from '@/components/pages/index/sectionAnswers';
import SectionWorks from '@/components/pages/index/sectionWorks';
import SectionPrice from '@/components/pages/index/sectionPrice';
import SectionTextFullstack from '@/components/pages/index/sectionTextFullstack';
import SectionTextDebug from '@/components/pages/index/sectionTextDebug';
import SectionTextContract from '@/components/pages/index/sectionTextContract';
import SectionNews from '@/components/pages/index/sectionNews';

import Title from '@/components/templates/title';

export default function Price() {
  
  return (
    <>
      <Head>
        <title>Denis Atwell</title>
      </Head>


      <SectionPrice />


    </>
  )
} 