import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/hero_img.jpg'
// const bannerImg = '/hero_img.jpg';


const Banner = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 items-center gap-10 overflow-hidden rounded-3xl bg-linear-to-br from-slate-100 to-slate-200 px-6 py-10 md:px-12 md:py-14">
          {/* Content */}
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Discover Your Next Read
            </span>

            <h2 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              Books to freshen up
              <br />
              your <span className="text-green-600">bookshelf</span>
            </h2>

            <p className="max-w-md text-base leading-7 text-slate-600 md:text-lg">
              Explore amazing books, discover new stories, and find your next
              favorite read all in one place.
            </p>

            <button className="btn btn-success rounded-full px-7 text-white shadow-lg transition-transform duration-300 hover:scale-105">
              View The List
            </button>
          </div>

          {/* Image */}
          <div className="relative flex justify-center">
            <div className="absolute h-64 w-64 rounded-full bg-green-200/50 blur-3xl" />

            <Image
              src={bannerImg}
              alt="Books collection"
              priority
              className="relative w-full max-w-md rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
