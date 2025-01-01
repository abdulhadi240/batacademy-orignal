'use client'
import { InfiniteSlider } from '@/components/ui/infinite-slider';

export default function CustomerCarasoul() {
  return (
    <InfiniteSlider gap={24} reverse>
      <img
        src='/slider.webp'
        alt='Apple Music logo'
        className='h-[120px] w-auto'
      />
      <img
        src='/slider.webp'
        alt='Chrome logo'
        className='h-[120px] w-auto'
      />
      <img
        src='/slider.webp'
        alt='Strava logo'
        className='h-[120px] w-auto'
      />
      <img
        src='/slider.webp'
        alt='Nintendo logo'
        className='h-[120px] w-auto'
      />
      <img
        src='/slider.webp'
        alt='Jquery logo'
        className='h-[120px] w-auto'
      />
      <img
        src='/slider.webp'
        alt='Prada logo'
        className='h-[120px] w-auto'
      />
    </InfiniteSlider>
  );
}
