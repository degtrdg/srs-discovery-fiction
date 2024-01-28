import { useChat, Message } from "ai/react";
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';


type ChatFrameProps = {
    selectedText: string;
    bodyText: string;
};

export default function ChatFrame({ bodyText, selectedText }: ChatFrameProps) {
    const initialMessage: Message = {
        id: "1",
        role: "system",
        content: `Reference Text: ${bodyText}, Selected Text: ${selectedText}`,
    }

    const { messages, input, handleInputChange, handleSubmit } = useChat(
        { initialMessages: [initialMessage] },
    );

    return (
        <div className="flex flex-col p-2 max-w-lg justify-text">
            <div>
                <div className="flex flex-col gap-2">
                    {messages.slice(1).map((m) => (
                        <div key={m.id} className="whitespace-pre-wrap">
                            {m.role === "user" ? "User: " : "AI: "}
                            {m.content}
                        </div>
                    ))}
                </div>
                <form className="flex align-center gap-1 pt-2 mt-1" onSubmit={(e) => handleSubmit(e, )}>
                    <input
                        className="width-full flex-grow px-4 py-2 border border-blue-300 rounded shadow placeholder-slate-700 text-sm"
                        value={input}
                        placeholder="Say something..."
                        onChange={handleInputChange}
                    />
                    <button type="submit">
                        <ArrowRightCircleIcon className="h-7 w-7 text-blue-400 hover:text-blue-700 hover:translate-x-0.5 transition ease-in-out delay-100" />
                    </button>
                </form>
            </div>
        </div>
    );
}
