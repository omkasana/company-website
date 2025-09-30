"use client";

import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";

const BlogDetail = () => {
    const { slug } = useParams();

    return (
        <>
            <div className="mt-20  h-[300px] w-full" style={{
                background: "linear-gradient(to right, rgb(201, 96, 66), rgb(206, 106, 156), rgb(85, 128, 206))",
            }}>
                <div className=" container text-start pt-2 items-center text-white w-[800px] ">
                    <h1 className="sm:text-2xl md:text-3xl lg:text-4xl mt-[40px]" >
                        What is the Difference Between Headless and Composable Commerce?
                    </h1>
                    <div className="flex gap-4 mt-4">
                        <p className="border-1 px-2 py-1 rounded-md text-center">
                            Aug 29th, 2025
                        </p>
                        <p className="border-1 px-2 py-1 rounded-md text-center">
                            eCommerce
                        </p>
                    </div>

                </div>
            </div >

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-4">
                {/* LEFT: Written by / TOC */}
                <aside className={"lg:col-span-1 p-2"}>
                    <div>
                        <h6 className="text-sm lg:text-base">Written by</h6>

                        <div className="flex items-center gap-3 mt-2">
                            <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                                <Image
                                    src="/images/blog/sunil-1img.jpg"
                                    alt="Sunil Kumar"
                                    width={50}
                                    height={50}
                                    className="object-cover"
                                />
                            </div>
                            <h6 className="text-sm lg:text-base">Sunil Kumar</h6>
                        </div>
                    </div>

                    <h6 className="mt-6 mb-2 font-bold text-[#9CA3AF] text-xs lg:text-sm">
                        TABLE OF CONTENTS
                    </h6>

                    {/* NOTE: only allow internal scrolling on lg (desktop). On md/sm it's full height auto so no scrollbar */}
                    <nav className="text-sm lg:text-sm  overflow-visible lg:overflow-auto lg:max-h-[50vh]">
                        <ul className="list-disc pl-5 space-y-1 lg:space-y-2 lg:leading-6">
                            <li>
                                <a className="hover:text-red-500" href="#What_is_Headless_Commerce">
                                    What is Headless Commerce?
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-red-500" href="#What_is_Composable_Commerce">
                                    What is Composable Commerce?
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-red-500"
                                    href="#Headless_vs_Composable_Commerce_The_Core_Differences"
                                >
                                    Headless vs Composable Commerce: The Core Differences
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-red-500" href="#Why_Composable_Commerce_is_Gaining_Momentum">
                                    Why Composable Commerce is Gaining Momentum
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-red-500"
                                    href="#Practical_Considerations_for_Choosing_the_Right_eCommerce_Architecture"
                                >
                                    Practical Considerations for Choosing the Right eCommerce Architecture
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-red-500"
                                    href="#Case_Examples_Composable_Commerce_for_B2C_and_Headless_Implementations"
                                >
                                    Case Examples
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-red-500" href="#Choosing_the_Right_eCommerce_Tech_Stack">
                                    Choosing the Right eCommerce Tech Stack
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-red-500" href="#Key_Trends_Shaping_the_Future_of_Commerce_Architectures">
                                    Key Trends
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-red-500" href="#SparxITs_Take">
                                    SparxIT’s Take
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside>

                {/* MIDDLE: Content */}
                <main className="lg:col-span-3 overflow-visible lg:overflow-auto lg:max-h-[80vh] lg:hide-scrollbar">
                    <article className="prose prose-invert max-w-none lg:prose-lg">
                        <p>
                            Have you noticed how quickly digital commerce is evolving, and how businesses are redefining customer experiences? Companies that once depended on rigid platforms are now exploring models such as headless commerce and composable commerce to build flexible and scalable online ecosystems. This shift is not simply a technology upgrade, it is a response to the rising expectations of today’s digital-first customers. <br /><br />

                            In the early years of eCommerce, platforms were developed as single, all-in-one solutions. While these systems served their purpose, they lacked the agility to support new business models or deliver seamless omnichannel experiences. As consumer behavior became more complex, businesses required an approach that could adapt quickly to changing market demands.<br /><br />

                            This transformation introduced the concept of decoupled commerce architecture, where the front-end presentation layer is separated from the back-end commerce engine. By moving away from tightly coupled monolithic architecture, organizations gained the ability to innovate on customer-facing experiences while keeping the core operations stable.<br /><br />


                        </p>

                        <Image
                            src="/images/blog/blog-content-img.webp"
                            alt="Blog Detail Image"
                            width={1200}
                            height={600}
                            className="my-4 rounded-lg w-full h-auto object-cover"
                        />

                        <p>
                            Gartner predicts that by 2023 organizations that adopt a composable commerce approach will outpace competition by 80 percent in the speed of new feature implementation. This insight highlights how modular commerce strategies are becoming essential for companies seeking agility and innovation.<br /><br />

                            The adoption of decoupled systems created the foundation for two influential models: headless commerce and composable commerce. Both extend the benefits of separation, but they differ in scope, scalability, and flexibility. As a result, companies today can choose between these architectures based on their long-term vision, innovation goals, and growth strategy.<br /><br />
                        </p>

                        <h4 className="mt-4 lg:mt-6">What is Headless Commerce?</h4>
                        <p>
                            The fundamental concept of headless commerce involves the separation
                            of the frontend from the backend, allowing them to operate
                            independently.
                        </p>

                        {/* rest of content... */}
                    </article>
                </main>

                {/* RIGHT: Card / Form */}
                <aside className="lg:col-span-1 p-2 text-white">
                    <div>
                        <Image
                            src="/images/blog/product-design.webp"
                            alt="Product Design"
                            width={200}
                            height={200}
                            className="w-full h-[200px] lg:h-[200px] rounded-tl-2xl rounded-tr-2xl"
                        />

                        <div className="bg-[#000] text-white p-4 lg:p-6 rounded-bl-2xl rounded-br-2xl mt-0">
                            <form method="post" className="">
                                <input type="hidden" name="action" value="my_form_submission" />

                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        required
                                        autoComplete="off"
                                        className="w-full border-b border-gray-400 bg-transparent text-white focus:outline-none mt-2 text-sm lg:text-base"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        required
                                        autoComplete="off"
                                        className="w-full border-b border-gray-400 bg-transparent text-white focus:outline-none mt-2 text-sm lg:text-base"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phoneNumber"
                                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                            const key = (e as any).key;
                                            if (!/^[0-9]$/.test(key) && key !== "Backspace" && key !== "Delete" && key !== "ArrowLeft" && key !== "ArrowRight") {
                                                e.preventDefault();
                                            }
                                        }}
                                        maxLength={11}
                                        placeholder="Phone"
                                        required
                                        autoComplete="off"
                                        className="w-full border-b border-gray-400 bg-transparent text-white focus:outline-none mt-2 text-sm lg:text-base"
                                    />
                                </div>

                                <input type="hidden" name="g-recaptcha-response" value="hidden-value" />

                                <div>
                                    <input
                                        type="submit"
                                        id="contactSubmitBtn"
                                        value="Submit"
                                        className="bg-red-500 text-white px-6 py-2 mt-2 lg:px-8 lg:py-3 rounded cursor-pointer hover:bg-red-600 transition w-full"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
};

export default BlogDetail;
