'use client'
import { InfiniteSlider } from '@/components/ui/infinite-slider';

export default function CustomerCarasoul({ client, accredited }) {
  return (
    <>
      {accredited ? (
        <InfiniteSlider gap={24} reverse>
          {client.map((data, index) => {
            return (
              <div key={index}>
                <img
                  src={data.image}
                  alt={data.name}
                  className="h-[200px] w-auto"
                />
              </div>
            );
          })}
        </InfiniteSlider>
      ) : (
        <InfiniteSlider gap={24} reverse>
          {client.data.map((data, index) => {
            return (
              <div key={index}>
                <img
                  src={data.image}
                  alt={data.name}
                  className="h-[120px] w-auto"
                />
              </div>
            );
          })}
        </InfiniteSlider>
      )}
    </>
  );
}