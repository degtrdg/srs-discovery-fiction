"use client";
import { useState, useEffect, useRef } from 'react';
import BaseOutlet from '@/outlets/BaseOutlet';
import Markdown from '@/components/Markdown';
import { markdown } from '@/app/config';
import ChatBox from '@/components/ChatBox';
import { RectangleStackIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

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
        <BaseOutlet className='py-16 px-12 flex justify-center'>
            <div ref={markdownRef}>
                <Markdown onMouseUp={handleSelection} className="flex flex-col selection:bg-blue-500 selection:text-blue-50">{markdown}</Markdown>
                {
                    boxVisible && (
                        <div id="chatbox">
                            <ChatBox bodyText={markdown} boxPosition={boxPosition} selectedText={selectedText} />
                        </div>
                    )
                }
            </div>
            <div className="fixed right-28 bottom-10">
                <a href={`/cards/${learnId}`}>
                    <button className="bg-blue-400 rounded-full p-3 hover:bg-blue-500">
                        <RectangleStackIcon className="w-12 h-12 fill-blue-50" />
                    </button>
                </a>
            </div>

        </BaseOutlet>
    )
}