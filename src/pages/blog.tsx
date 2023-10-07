import Head from 'next/head';

import SectionNews from '@/components/pages/index/sectionNews';

import Title from '@/components/templates/title';

export default function Blog() {
  
  return (
    <>
      <Head>
        <title>Блог</title>
      </Head>

      <SectionNews />

    </>
  )
} 