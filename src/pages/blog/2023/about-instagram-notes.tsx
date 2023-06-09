import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import BlogLayout from '~/components/blog/BlogLayout';
import notesImage from '~/assets/images/blog/notes_image.webp';
import Headsection from '~/components/seo/Headsection';
import AuthorSection from '~/components/common/AuthorSection';
import { SD_instagramNotes } from '~/content/structuredData';
import { SeoParams } from '~/components/seo/types';

const Image = dynamic(() => import('next/image'), { ssr: true });
const ShareButtons = dynamic(() => import('~/components/common/Share'));

const BlogContainer = ({ children }: any) => <div className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert`'>{children}</div>;

const InstaNotes = () => {
  const { pathname } = useRouter();
  const datePublished = '30 May 2023';

  const richData = {
    questions: [
      'What are Instagram Notes?',
      'Who can see my Instagram Notes?',
      'Some Instagram notes ideas',
      'Advantages of Instagram Notes'
    ],
    answers: [
      'A brief messages appear at the top of your followers, inboxes, like a thought bubble above your profile photo or icon.',
      'You can pick who sees your Instagram Notes while you create them.',
      'Use emojis or other formatting options and Keep your Notes short and candy to make your Notes more visually attractive.',
      'Instagram Notes allow you to share short updates with specific people, while Stories are visible to all your followers'
    ],
    image: notesImage,
    datePublished
  };

  const seoParams: SeoParams = {
    title: 'Instagram Notes: A Guide to Using and Sharing Personal Updates on Instagram Notes',
    description: 'Instagram Notes allow you to share short updates with specific people, while Stories are visible to all your followers.',
    keywords: 'instagram, notes, instagram notes, instagram note ideas, instagram notes ideas, instagram reels, instagram stories, notes',
    pageUrl: pathname,
    richData: richData,
    structuredData: SD_instagramNotes
  };

  return (
    <>
      <Headsection seoParams={seoParams} />

      <BlogLayout>
        <main className='pt-8 pb-16 lg:pt-8 lg:px-5 md:px-10 px-5 lg:pb-8 bg-white dark:bg-gray-900'>

          <BlogContainer>
            <header className='mb-4 lg:mb-6 not-format'>
              <AuthorSection date={datePublished} />

              <h1 className='mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white'>
                Instagram Notes: A Guide to Using and Sharing Personal Updates
              </h1>

              <div className='my-5'>
                <p className='text-lg mb-6'>
                  Instagram is a popular social media platform that allows users to post pictures, videos, and stories with your followers.
                  In addition, Instagram has released an additional feature named as Notes. Which lets users to share private updates as brief messages for your followers. Here&apos;s a short article to the usage of and sharing Instagram Notes.</p>
              </div>
            </header>

            <figure className='text-sm font-medium my-10'>
              <Image
                width={700}
                height={450}
                quality={50}
                loading='lazy'
                decoding='async'
                src={notesImage} alt='Instagram Notes ideas' className='rounded-md aspect-video' />
              <figcaption>Photo by <a className='underline text-blue-600' href='https://unsplash.com/ja/@freegraphictoday?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>AbsolutVision</a> on <a className='underline text-blue-600' href='https://unsplash.com/photos/82TpEld0_e4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a></figcaption>
            </figure>

            <div className='container mx-auto'>
              <h2 className='text-xl font-bold mb-2'>What are Instagram Notes?</h2>
              <p className='mb-4'>Instagram Notes are a new way for users to share updates with all followers or a share between particular followers. These brief messages appear at the top of your followers, inboxes, like a bubble above your profile photo or icon.
                Notes may be custom designed with textual content and/or emojis which restrict of 60 characters or much less.</p>

              <h2 className='text-xl font-bold mb-2'>How to create an Instagram Note?</h2>
              <p className='mb-4'>To create an Instagram Note, follow these simple steps:</p>
              <ol className='list-decimal mb-6 pl-6'>
                <li className='my-3'>Open the Instagram app and click on the &apos;Messages&apos; icon located at the top right corner to access Instagram Notes.</li>
                <li className='my-3'>Tap at the &apos;Create a Note&apos; button at the lowest of the screen.</li>
                <li className='my-3'>Type your message, customise it with emojis or different formatting options, and hit &apos;Post&apos;.</li>
              </ol>

              <h2 className='text-xl font-bold mb-2'>Who can see your Instagram Notes?</h2>
              <p className='mb-4'>You can pick who sees your Instagram Notes while you create them. You can proportion your Notes together with your fans or with a choose organization of people in your Close Friends listing. You also can preserve your Notes non-public and only viewable with the aid of yourself.</p>
              <h2 className='text-xl font-bold mb-2'>Why use Instagram Notes?</h2>
              <p className='mb-4'>Instagram Notes are an effective manner to share personal updates with precise human beings. They can be used to carry anything from a brief notion or feeling to a vast declaration or event. Since Notes are private and most effective viewable by way of positive human beings, they can also be used to put up more touchy or non-public updates that you may no longer need to share with every body.</p>

              <h2 className='text-xl font-bold mb-2'>Tips for Instagram Notes:</h2>
              <ul className='list-disc mb-6 pl-6'>
                <li className='my-3'>Use emojis or other formatting options to make your Notes more visually attractive.</li>
                <li className='my-3'>Keep your Notes short and candy - with a person limit of 60, there may be now not tons area for long messages.</li>
                <li className='my-3'>Consider sharing your Notes with a choose institution of humans to your Close Friends listing for more privateness.</li>
                <li className='my-3'>Don&apos;t sense forced to use Notes all of the time - they are simply some other device for sharing updates, not a demand.</li>
              </ul>

              <h2 className='text-2xl font-bold mb-4'>Advantages of Instagram Notes over Instagram Stories</h2>
              <ul className='list-disc ml-6 space-y-2'>
                <li className='pb-5'>
                  <span className='font-bold'>Personalization: </span>
                  Instagram Notes allow you to share short updates with specific people, while Stories are visible to all your followers. This means that Notes provide a more personalized way to share something with your close friends or family.
                </li>
                <li className='pb-5'>
                  <span className='font-bold'>Longer lifespan: </span>
                  Instagram Stories are only visible for 24 hours, after that they disappear. Notes, on the other hand, remain visible until you delete them. This means that your message will be available to your followers for a longer time.
                </li>
                <li className='pb-5'>
                  <span className='font-bold'>Direct messaging: </span>
                  Notes can be used as a starting point for direct messaging with your friends. If someone replies to your Note, you can continue the conversation through direct messaging, allowing for more intimate and focused communication.
                </li>
                <li className='pb-5'>
                  <span className='font-bold'>Improved organization: </span> Instagram Notes are organized in a separate section in your inbox, making them easier to find and manage. You can access all your Notes in one place and respond to them at your convenience.
                </li>
                <li className='pb-5'>
                  <span className='font-bold'>Increased privacy: </span> Notes are visible only to the people you choose to share them with. This means that you can share updates with close friends and family without broadcasting them to your entire follower base.
                </li>
              </ul>
            </div>

            <div>
              <ShareButtons url={pathname} />
            </div>
          </BlogContainer>
        </main>

      </BlogLayout>
    </>
  );
};

export default InstaNotes;