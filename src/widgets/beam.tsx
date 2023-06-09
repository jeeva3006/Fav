import { memo } from 'react';
import Image from 'next/image';
import beams from '../assets/images/beams.jpg';

const Rainbow = () => {
  return (
    <>
      <div className='absolute top-[-10rem] left-[20rem] -z-50 transform-gpu overflow-hidden blur-3xl'>
        <Image src={beams} alt='beams' width={5000} height={500} loading='lazy'
          className={'relative right-[calc(50%-11rem)] -z-10'}
        />
      </div>
    </>
  );
};

export default memo(Rainbow);