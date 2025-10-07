// src/app/blog/[slug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import { blogDetailData } from "@/utils/dummy/blog/blogDetailData";

const BlogDetail = () => {
    useParams();

    // Smooth scroll function
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <>
            {/* Banner - Fully Responsive */}
            <div 
                className="pt-16 sm:pt-20 min-h-[120px] sm:min-h-[160px] md:min-h-[200px] w-full flex items-center" 
                style={{
                    background: "linear-gradient(to right, rgb(201, 96, 66), rgb(206, 106, 156), rgb(85, 128, 206))",
                }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-white py-3 sm:py-5 md:py-7">
                    <h1 className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-2 sm:mb-3 leading-tight">
                        {blogDetailData.title}
                    </h1>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        <span className="border border-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[9px] sm:text-xs">
                            {blogDetailData.date}
                        </span>
                        <span className="border border-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[9px] sm:text-xs">
                            {blogDetailData.category}
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Content - Better Sidebar Width */}
            <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 md:py-8 max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
                    
                    {/* LEFT SIDEBAR - Better Width & Readable Font */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="lg:sticky lg:top-24">
                            {/* Author Section */}
                            <div className="mb-6 pb-5 border-b border-gray-200">
                                <h6 className="text-xs font-semibold mb-3 text-gray-500 uppercase tracking-wide">Written by</h6>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-gray-200">
                                        <Image
                                            src={blogDetailData.author.image}
                                            alt={blogDetailData.author.name}
                                            width={48}
                                            height={48}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <h6 className="text-sm font-medium text-gray-800 leading-tight">{blogDetailData.author.name}</h6>
                                </div>
                            </div>

                            {/* Table of Contents */}
                            <div>
                                <h6 className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wide">
                                    Table of Contents
                                </h6>
                                <nav className="text-sm">
                                    <ul className="space-y-3">
                                        {blogDetailData.tableOfContents.map((item) => (
                                            <li key={item.id}>
                                                <a 
                                                    className="text-gray-600 hover:text-red-500 transition-colors block leading-snug"
                                                    href={`#${item.id}`}
                                                    onClick={(e) => scrollToSection(e, item.id)}
                                                >
                                                    {item.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </aside>

                    {/* MIDDLE - Blog Content */}
                    <main className="lg:col-span-6">
                        <article className="prose prose-gray max-w-none">
                            {/* Introduction */}
                            {blogDetailData.sections[0].content.map((paragraph, idx) => (
                                <p key={idx} className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-base leading-relaxed mb-3 sm:mb-4 md:mb-5">
                                    {paragraph}
                                </p>
                            ))}

                            {/* Featured Image */}
                            <div className="my-4 sm:my-6 md:my-8">
                                <Image
                                    src={blogDetailData.featuredImage}
                                    alt="Blog Featured Image"
                                    width={1200}
                                    height={600}
                                    className="rounded-lg w-full h-auto object-cover shadow-sm"
                                />
                            </div>

                            {/* Dynamic Sections */}
                            {blogDetailData.sections.slice(1).map((section) => (
                                <div key={section.id}>
                                    <h2 
                                        id={section.id} 
                                        className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mt-5 sm:mt-7 md:mt-9 mb-2 sm:mb-3 md:mb-4 scroll-mt-24"
                                    >
                                        {section.title}
                                    </h2>
                                    {section.content.map((paragraph, idx) => (
                                        <p key={idx} className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-base leading-relaxed mb-3 sm:mb-4 md:mb-5">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </article>

                        {/* Mobile Author Section - At Bottom */}
                        <div className="lg:hidden mt-8 mb-6 pt-6 border-t-2 border-gray-200">
                            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-gray-300">
                                    <Image
                                        src={blogDetailData.author.image}
                                        alt={blogDetailData.author.name}
                                        width={48}
                                        height={48}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-0.5">Written by</p>
                                    <h6 className="text-sm font-semibold text-gray-800">{blogDetailData.author.name}</h6>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Contact CTA */}
                        <div className="lg:hidden mt-6 p-4 bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl border border-gray-200">
                            <h3 className="text-sm font-bold text-gray-900 mb-1.5">Have a Project in Mind?</h3>
                            <p className="text-xs text-gray-600 mb-3 leading-relaxed">Let's discuss how we can help you succeed.</p>
                            <a 
                                href="/contact" 
                                className="inline-block bg-red-500 text-white px-5 py-2.5 rounded-lg font-medium text-xs hover:bg-red-600 transition shadow-sm"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </main>

                    {/* RIGHT SIDEBAR - Better Width & Readable Font */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="lg:sticky lg:top-24">
                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                                <div className="relative h-32 overflow-hidden">
                                    <Image
                                        src="/images/blog/product-design.webp"
                                        alt="Get in Touch"
                                        width={400}
                                        height={128}
                                        className="w-full h-full object-cover opacity-90"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                                    <h3 className="absolute bottom-3 left-4 text-white font-bold text-sm">Get in Touch</h3>
                                </div>

                                <div className="p-4">
                                    <p className="text-xs text-gray-600 mb-4 leading-relaxed">Have a project in mind? Let's discuss how we can help.</p>
                                    
                                    <form method="post" className="space-y-3">
                                        <input type="hidden" name="action" value="my_form_submission" />

                                        <div>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                required
                                                autoComplete="off"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                                            />
                                        </div>

                                        <div>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                                required
                                                autoComplete="off"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                                            />
                                        </div>

                                        <div>
                                            <input
                                                type="tel"
                                                name="phone"
                                                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                                    const key = e.key;
                                                    if (!/^[0-9]$/.test(key) && key !== "Backspace" && key !== "Delete" && key !== "ArrowLeft" && key !== "ArrowRight") {
                                                        e.preventDefault();
                                                    }
                                                }}
                                                maxLength={11}
                                                placeholder="Phone Number"
                                                required
                                                autoComplete="off"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-red-500 text-white px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-red-600 transition shadow-sm"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
};

export default BlogDetail;
