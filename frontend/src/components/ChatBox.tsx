import ChatFrame from '@/components/ChatFrame';

type ChatBoxProps = {
    boxPosition: BoxPosition;
    selectedText: string;
    bodyText: string;
};

type BoxPosition = {
    left: number;
    top: number;
};

export default function ChatBox({ bodyText, boxPosition, selectedText } : ChatBoxProps) {
    return (
        <div className='absolute bg-white rounded border-[1px] border-blue-300 p-2 rounded-md' style={{
            left: `${boxPosition.left}px`,
            top: `${boxPosition.top}px`
        }}>
            <h3 className='text-blue-800 text-sm flex pl-2 items-center gap-2'>
                <svg viewBox="0 0 100 100" className="fill-blue-400 h-3 w-3">
                    <circle cx="50" cy="50" r="50" />
                </svg>

                Ask a question
            </h3>

            <div>
                <ChatFrame bodyText={bodyText} selectedText={selectedText} />
            </div>
        </div>
    );
}