import React from 'react'
import Title from './Title';
import { BookUserIcon } from 'lucide-react';

function AboutUs() {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-10 max-md:px-4 scroll-mt-24">
                <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

                <div className="mt-5 flex items-center gap-2 text-sm text-green-600 bg-green-400/10 rounded-full px-4 py-1.5">
                    <BookUserIcon className='size-4.5 stroke-green-600' />
                    <span>Testinomials</span>
                </div>

                    <Title
                        title="Build Job-Winning Resumes with AI"
                        description="Create, customize, and download professional resumes in minutes using smart AI suggestions, modern templates, and real-time preview."
                    />
                <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">


                    <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
                        <img className="max-w-md w-full object-cover rounded-2xl"
                            src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
                            alt="" />
                        <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
                            <div className="flex -space-x-4 shrink-0">
                                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="image"
                                    className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1" />
                                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="image"
                                    className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]" />
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                                    alt="image"
                                    className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]" />
                                <div
                                    className="flex items-center justify-center text-xs  text-white size-9 rounded-full border-[3px] border-white bg-green-600 hover:-translate-y-1 transition z-[4]">
                                    50+
                                </div>
                            </div>
                            <p className="text-sm font-medium text-slate-800">Join our developer community</p>
                        </div>
                    </div>
                    <div className="text-sm text-slate-600 max-w-lg">
                        <h1 className="text-xl uppercase font-semibold text-slate-700">
                            What we do?
                        </h1>

                        <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>

                        <p className="mt-8">
                            Our platform helps you create professional, ATS-friendly resumes effortlessly using AI-powered tools.
                        </p>

                        <p className="mt-4">
                            Whether you're a fresher or an experienced professional, you can build, edit, and customize your resume with ease using modern templates and real-time preview.
                        </p>

                        <p className="mt-4">
                            From content suggestions to formatting, we simplify the entire resume-building process so you can focus on landing your dream job.
                        </p>
                       
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutUs