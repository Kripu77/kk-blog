import React from 'react'
import { TypographyProps } from '@/types';


interface AnimatedTypographyH2Props extends TypographyProps {
    animatedElement?: React.ReactNode;
  }

const AnimatedTypographyH2 = ({text, animatedElement}:AnimatedTypographyH2Props) => {

    return (
        <h2 className="text-3xl font-bold">
          {text.split('👋')[0]} 
          <span className="inline-flex items-center">
            {animatedElement}
           
          </span>
          {text.split('👋')[1]} 
        </h2>
      );
  
}

export default AnimatedTypographyH2