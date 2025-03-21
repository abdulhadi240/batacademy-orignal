'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/motion';
import  ExploreCard  from './ExploreCards';




export const exploreWorlds = [
    {
      id: 'world-1',
      imgUrl: '/about3.jpg',
      title: 'The Hogwarts',
    },
    {
      id: 'world-2',
      imgUrl: '/about2.jpg',
      title: 'The Upside Down',
    },
    {
      id: 'world-3',
      imgUrl: '/about3.jpg',
      title: 'Kadirojo Permai',
    },

  ];



const Hero = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`paddings`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth mx-auto flex flex-col`}
      >
        
        <div className="mt-[50px] flex flex-row  min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;