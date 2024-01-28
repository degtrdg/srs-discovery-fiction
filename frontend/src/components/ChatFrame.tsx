import { useChat } from "ai/react";


export default function ChatFrame() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    console.log(messages)
    return (
        <div className="flex min-h-64 flex-col mx-auto max-w-md justify-between">
            <div>
                {messages.map((m) => (
                    <div key={m.id} className="whitespace-pre-wrap">
                        {m.role === "user" ? "User: " : "AI: "}
                        {m.content}
                    </div>
                ))}
            </div>
            <div className="mt-2">
                <form onSubmit={handleSubmit}>
                    <input
                        className="w-full max-w-md p-2 border border-gray-300 rounded shadow-xl"
                        value={input}
                        placeholder="Say something..."
                        onChange={handleInputChange}
                    />
                </form>
            </div>
        </div>
    );
}
