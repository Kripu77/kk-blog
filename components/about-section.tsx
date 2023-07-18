import React from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image, { type StaticImageData } from 'next/image'
import { TypographyH2 } from './ui/typography-h2';
import { TypographyP } from './ui/typography-p';

interface HeroSectionProps {
  ImageLink: StaticImageData
  title:string;
  description:string;
}

export const AboutSection= ({ImageLink, title, description}:HeroSectionProps) => {
  return (
    <section className='max-w-screen-lg mx-auto flex flex-col items-center space-y-6 pt-24'>
      <Image src={ImageLink} alt={title}
       placeholder='blur'
       height={450}
        width={450}
       className="rounded-md object-cover" ></Image>
      <section>
        <TypographyH2 text={title}/>
      </section>
      <section>
        <TypographyP text={description}/>
      </section>
    </section>
  )
}

