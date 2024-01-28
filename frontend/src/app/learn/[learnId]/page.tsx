"use client";
import { Popover } from '@headlessui/react'
import ChatFrame from '@/components/ChatFrame';
import Image from 'next/image';

const logo = "https://tailwindui.com/img/logos/mark.svg?color=blue&shade=300";
const companyName = "Your Company";

const topicImage = "https://www.fast.ai/images/enlightenment.jpeg";
const topicDescription = "test description";

type Params = {
    learnId: string;
};

export default function Example({ params: { learnId } }: { params: Params }) {
    return (
        <>
            <div className="min-h-full">
                <Popover as="header" className="bg-blue-800 pb-24">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                                <div className="relative flex items-center justify-center py-5 lg:justify-between">
                                    {/* Logo */}
                                    <div className="absolute left-0 flex-shrink-0 lg:static">
                                        <a href="#">
                                            <span className="sr-only">{companyName}</span>
                                            <img
                                                className="h-8 w-auto"
                                                src={logo}
                                                alt={companyName}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </Popover>
                <main className="-mt-20 md:-mt-24 pb-8">
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h1 className="sr-only">Learn a Topic</h1>
                        {/* Main 3 column grid */}
                        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
                            {/* Left column */}
                            <div className="grid grid-cols-1 gap-4">
                                <section aria-labelledby="section-2-title">
                                    <h2 className="sr-only" id="section-2-title">
                                        Topic
                                    </h2>
                                    <div className="overflow-hidden rounded-lg bg-white shadow">
                                        <div className="p-6 ">
                                            <img className='max-w-xs rounded-md drop-shadow mx-auto' src={topicImage} />
                                            <p className='mt-3 text-center'>{topicDescription}</p>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* Right column */}
                            <div className="grid grid-cols-1 gap-4 lg:col-span-2 h-max">
                                <section aria-labelledby="section-1-title">
                                    <div className="overflow-hidden rounded-lg bg-white shadow">
                                        <div className="p-6">
                                            <ChatFrame />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left">
                            <span className="block sm:inline">&copy; 2024 {companyName}.</span>{' '}
                            <span className="block sm:inline">All rights reserved.</span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
