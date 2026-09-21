import Image from "next/image";
import Link from "next/link";
import React from "react";
import BannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="bg-base-200">
      <div className="hero min-h-[650px] max-w-7xl mx-auto px-4">
        <div className="hero-content flex-col-reverse gap-10 lg:flex-row-reverse lg:gap-16">
          {/* Image */}
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl"></div>

            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={BannerImg}
                alt="A person reading a book"
                className="h-[420px] w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full text-center lg:text-left">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              📚 Welcome to Book Vibe
            </div>

            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Discover Your
              <span className="block text-primary">Next Favorite Book</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-base-content/70 md:text-lg">
              Explore amazing books, discover new stories, and find the perfect
              read for every moment. Build your reading list and keep track of
              the books you love with Book Vibe.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link href="/books" className="btn btn-primary px-8">
                Explore Books →
              </Link>

              <Link href="/listed-books" className="btn btn-outline px-8">
                My Reading List
              </Link>
            </div>

            {/* Small Stats */}
            <div className="mt-10 flex justify-center gap-8 lg:justify-start">
              <div>
                <h3 className="text-2xl font-bold">100+</h3>
                <p className="text-sm text-base-content/60">Books</p>
              </div>

              <div className="border-l border-base-content/20 pl-8">
                <h3 className="text-2xl font-bold">50+</h3>
                <p className="text-sm text-base-content/60">Authors</p>
              </div>

              <div className="border-l border-base-content/20 pl-8">
                <h3 className="text-2xl font-bold">4.8★</h3>
                <p className="text-sm text-base-content/60">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
