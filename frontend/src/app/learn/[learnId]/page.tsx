"use client";
import { useState, useEffect, useRef } from 'react';
import { Popover } from '@headlessui/react'
import Markdown from '@/components/Markdown';
import { markdown } from '@/app/config';
import ChatBox from '@/components/ChatBox';


const logo = "https://tailwindui.com/img/logos/mark.svg?color=blue&shade=300";
const companyName = "Your Company";

const topicImage = "https://www.fast.ai/images/enlightenment.jpeg";
const topicDescription = "test description";

const highlightColor = "bg-yellow-200";

type Params = {
    learnId: string;
};

export default function Example({ params: { learnId } }: { params: Params }) {
    const [selectedText, setSelectedText] = useState("");
    const [boxPosition, setBoxPosition] = useState({ left: 0, top: 0 });
    const [boxVisible, setBoxVisible] = useState<boolean>(false);
    const markdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (markdownRef.current && !markdownRef.current.contains(event.target)) {
                setBoxVisible(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [markdownRef]);

    const handleSelection = async () => {
        const selection = window.getSelection()

        if (selection) {

            const text = selection.toString();
            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();
            const left = rect.left + window.scrollX;
            const top = rect.bottom + window.scrollY;

            await setBoxVisible(false);
            setSelectedText(text);
            await setBoxVisible(true);
            await setBoxPosition({ left, top });
        }
    };

    return (
        <>
            <div className="min-h-full">
                {
                    boxVisible && (
                        <div id="chatbox">
                            <ChatBox bodyText={markdown} boxPosition={boxPosition} selectedText={selectedText} />
                        </div>
                    )
                }
                <Popover as="header" className="bg-blue-800 pb-24 pt-8">
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
                <main className="-mt-16 md:-mt-20 pb-8">
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-5xl lg:px-8">
                        <h1 className="sr-only">Learn a Topic</h1>
                        <div className="bg-white rounded-md shadow py-16 px-12 flex justify-center">
                            <div ref={markdownRef}>
                                <Markdown onMouseUp={handleSelection} className="flex flex-col selection:bg-blue-500 selection:text-blue-50">{markdown}</Markdown>
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
