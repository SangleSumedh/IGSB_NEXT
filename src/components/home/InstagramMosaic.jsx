"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Heart, MessageCircle, Play } from "lucide-react";

// STATIC DATA
const posts = [
  {
    id: 1,
    type: "image",
    link: "https://www.instagram.com/p/DQ3MMj_CEel/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA== ", // Replace with actual link
    src: "/socials/post1.jpg",
    alt: "Students celebrating at Indira College",
    likes: "518",
    comments: "2",
  },
  {
    id: 2,
    type: "image",
    link: "https://www.instagram.com/p/DR3laDlCHDd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    src: "/socials/post2.jpg",
    alt: "Campus event highlights",
    likes: "30",
    comments: "0",
  },
  {
    id: 3,
    type: "image",
    link: "https://www.instagram.com/p/DR1JCqViE6T/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    src: "/socials/post3.jpg",
    alt: "Academic achievement awards video",
    likes: "1862",
    comments: "5",
  },
];

export default function InstagramMosaic() {
  return (
    <section className="w-full py-16 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            <span className="text-secondary">#Connect</span> with us
          </h2>
          <p className="mt-3 text-gray-500 text-lg">
            Follow our journey on Instagram @indiracollege
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full aspect-square sm:aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              aria-label={`View post: ${post.alt}`}
            >
              {/* MEDIA RENDERER */}
              {post.type === "video" ? (
                <div className="relative w-full h-full">
                  <video
                    src={post.src}
                    autoPlay
                    loop
                    muted
                    playsInline // Crucial for iOS
                    className="w-full h-full object-cover"
                  />
                  {/* Video Indicator Icon (Top Right) */}
                  <div className="absolute top-3 right-3 bg-black/50 p-1.5 rounded-full backdrop-blur-md">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>
              ) : (
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}

              {/* OVERLAY (Appears on Hover) */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white gap-4 backdrop-blur-[2px] z-20">
                {/* Instagram Icon */}
                <Instagram className="w-10 h-10 mb-2" />

                {/* Stats */}
                <div className="flex items-center gap-6 font-semibold text-lg">
                  <div className="flex items-center gap-2">
                    <Heart className="w-6 h-6 fill-white" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-6 h-6 fill-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                <span className="mt-4 text-sm font-medium uppercase tracking-wider border border-white/50 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                  View Post
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            href="https://www.instagram.com/icem_pune?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" // Replace with actual profile link
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-white font-semibold rounded-full shadow-lg"
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </section>
  );
}
