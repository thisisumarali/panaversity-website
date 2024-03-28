"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Shape the world with the most cutting-edge technologies.",
        description:
            "Panaversity is the world's first online university dedicated to empowering you to master the technologies shaping our future. We offer intensive online programs focused on Generative AI, Spatial Computing, Cloud Native Computing, and Web 3.0.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <Image
                    src="/metaverse.jpg"
                    width={500}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "More than just technology.",
        description:
            "We go beyond the code. Panaversity equips you with the skills to not just understand these technologies, but to innovate with them. Master project management methodologies like Agile, Lean Startup, and Design Thinking. Learn DevOps principles to streamline your development process.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <Image
                    src="/metaverse.jpg"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Why Panaversity?",
        description:
            "Cutting-Edge Curriculum: Dive deep into the most transformative technologies alongside industry experts.            Learn by Doing: Gain practical experience through real- world projects and simulations.            Flexible Learning: Pursue your education online, on your schedule, from anywhere.            Thriving Community: Network with passionate students and professionals from around the globe.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <Image
                    src="/metaverse.jpg"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Become a Future Leader:",
        description:
            "Guest Lectures: Hear from industry leaders and pioneers in each field.        Mentored Projects: Receive personalized guidance on your capstone projects.  Career Services: Get dedicated support on crafting your resume and landing your dream job.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <Image
                    src="/metaverse.jpg"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
];
export function StickyScrollRevealDemo() {
    return (
        <div className="p-10">
            <h1 className="text-4xl sm:text-6xl text-center font-bold py-5  ">Panaversity: Forge the Future Online.
            </h1>
            <StickyScroll content={content} />
        </div>
    );
}
