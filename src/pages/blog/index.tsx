import { memo } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { TiSocialInstagramCircular } from 'react-icons/ti';
import { BsFilePostFill } from 'react-icons/bs';

import Headsection from '~/components/seo/Headsection';
import { blogRoutes } from '~/components/blog/blogRoutes';
import { Posts } from '~/components/blog/types';
import { SD_blogIndex } from '~/content/structuredData';
import { SeoParams } from '~/components/seo/types';
import { getWeekDifference } from '~/helpers';
import beam from '~/assets/images/breams/beams.jpg';
import grid from '~/assets/images/breams/grid-01.png';

const DynamicImage = dynamic(() => import('next/image'), { ssr: true });
const RightArrow = dynamic(() => import('~/widgets/RightArrow'));
const NewsLetter = dynamic(() => import('~/components/home/NewsLetter'), { ssr: false });

const BlogIndex = () => {
  const { pathname, push } = useRouter();

  const seoParams: SeoParams = {
    title: 'Blog posts about Instagram Related content',
    description: 'Blog posts about Instagram Related content which covers articel about Instagarm Captions, Instagram Hashtags, Instagram Notes, Instagram stories and FAQ',
    keywords: 'Instagram blog, blog post, Instagram captions, Instagram Hashtags, Instagram Notes, Instagram stories',
    pageUrl: pathname,
    canonical: false,
    structuredData: SD_blogIndex
  };

  return (
    <>
      <Headsection seoParams={seoParams} />

      <div className='flex flex-wrap justify-center'>
        <div className='flex flex-wrap justify-center min-h-screen w-full'>
          <div className='flex items-center justify-around w-full h-auto py-40'>
            <Image src={beam} alt='' className='fixed z-[-10] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] top-40 left-2/4 -translate-x-2/3 -translate-y-1/2 max-w-none' draggable={false} priority={true} />
            <Image src={grid} alt='' className='absolute [mask-image:linear-gradient(90deg,white,rgba(255,255,255,0))] top-0 left-0 -translate-y-28 h-full opacity-5' priority={true} draggable={false} width={1920} height={1080} />
            <div className='lg:w-6/12 w-full flex justify-center'>
              <div className=' text-indigo-600 absolute lg:top-20 lg:flex hidden pr-96'>
              </div>
              <div className='antialiased text-4xl font-extrabold sm:text-6xl -skew-y-6 select-none'>
                <div className='lg:w-fit md:w-full w-full bg-white hover:bg-slate-50 p-5 rounded-2xl shadow-lg'>
                  <span className='text-indigo-600 mx-5'>Fav - </span>
                  <span className='tracking-widest inline-flex align-middle'> BLOG</span>
                </div>
              </div>
            </div>
          </div>

          <div className='dark w-full z-10'>
            <section className='bg-white dark:bg-gray-900 w-full z-10 h-10/12'>
              <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
                <div className='mr-auto place-self-center lg:col-span-7'>
                  <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white uppercase'>Step into the spotlight</h1>
                  <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>Welcome to the Fav Blog where your ideas come alive. Join us,
                    where we decode the secrets to engaging posts, tips and tricks and latest ideas which may helps you to get more likes and followers on Instagram. And make your Instagram dreams a reality!</p>
                </div>
                <div className='hidden lg:mt-0 lg:col-span-5 lg:flex text-center justify-center items-center'>
                  <TiSocialInstagramCircular color='white' className='animate-spin' fontSize={300} style={{ animation: 'spin 25s linear infinite' }} />
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className='flex flex-wrap justify-center w-full z-10'>
          <section className='dark:bg-gray-900 lg:mt-10' id='postDiv'>
            <div className='py-8 px-4 mx-auto max-w-screen-xl lg:px-6'>
              <div className='mx-auto max-w-screen-lg text-center lg:mb-16 mb-8'>
                <h2 className='mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>POSTS</h2>

                <p className='font-light text-gray-500 sm:text-xl dark:text-gray-400'>
                  we&apos;re passionate about helping you achieve your Instagram goals. Our articles are provides valuable contents and step-by-step guides to helping you to increase your followers, like and engagement.
                </p>
              </div>

              <div className='grid gap-8 lg:grid-cols-2'>
                {blogRoutes.sort((a: Posts, b: Posts) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((page: Posts, index: number) => {
                  return (
                    <article key={index} className='p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                      <div className='flex justify-between items-center mb-5 text-gray-500'>
                        <span className='bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800'>
                          <BsFilePostFill className='mr-1' />
                          {page.category}
                        </span>
                        <span className='text-sm'>{getWeekDifference(page.createdAt)} weeks ago</span>
                      </div>
                      <h2 onClick={() => push(page.path)} className='mb-2 cursor-pointer text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{page.title}</h2>
                      <p className='mb-5 font-light text-gray-500 dark:text-gray-400 line-clamp-3'>{page.description}</p>
                      <div className='flex justify-between items-center'>
                        <div className='flex items-center space-x-4'>
                          <DynamicImage width={100} height={100} className='w-7 h-7 rounded-full' src={(page.authorImage as any)} alt='Fav Insta author' />
                          <span className='font-medium dark:text-white'>
                            {page.author}
                          </span>
                        </div>
                        <span onClick={() => push(page.path)} className='cursor-pointer inline-flex text-indigo-600 items-center font-medium text-primary-600 dark:text-primary-500 hover:underline'>
                          Read more
                          <RightArrow />
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        <NewsLetter />
      </div>
    </>
  );
};

export default memo(BlogIndex);