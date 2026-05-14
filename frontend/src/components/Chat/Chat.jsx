import React, { useEffect, useState } from 'react';
import ReactMarkdown from "react-markdown";
import './Chat.scss'

const Chat = () => {

    const [text, setText] = useState("")
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    async function send_message(message) {
        try {
            setLoading(true);
            const raw = await fetch("http://127.0.0.1:8000/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: message,
                    role: "user"
                })
            })
            const data = await raw.json()
            setLoading(false);
            setMessages((prev) => [
                ...prev,
                // {
                //     role: "user",
                //     message: message
                // },
                {
                    role: "ai",
                    message: data.data.ai,
                    timestamp: data.meta.timestamp
                }
            ]);
            console.log(data)
        } catch (err) {
            console.error("Something went wrong", err)
        } finally {
            setLoading(false);
        }
    }

    async function get_messages() {
        try {
            const raw = await fetch("http://127.0.0.1:8000/generate/messages");
            const data = await raw.json();
            setMessages(data.data);
        } catch (err) {
            console.error("Something went wrong", err);
        }
    }

    useEffect(() => {
        get_messages();
    }, [])
    

    function handle_submit() {
    if (!text.trim()) return;

    send_message(text);

    setMessages((prev) => [
        ...prev,
        {
            role: "user",
            message: text,
        }
    ]);

    setText("");
    }



    return (
        <div className='chat-area'>
            <div className="message-container">
                {
                    messages.map((msg, index) => (
                        <div key={index} className='message-wrapper'>
                            {msg.role === "user" ? (
                                <div className='message-content-user'>{msg.message}</div>
                            ) : (
                                <>
                                    <div className='message-content-ai'><ReactMarkdown>
                                    {msg.message}
                                </ReactMarkdown></div>
                                    {/* <div className="timestamp">
                                        {msg.timestamp}
                                    </div> */}
                                </>
                            )}
                        </div>
                    ))
                }

                {loading && (
                    <div className='message-wrapper'>
                        <div className='message-content-ai'>
                            Thinking...
                        </div>
                    </div>
                )}
            </div>

            <div className="input-area">
                <div className="prompt-wrapper">
                    <textarea className='prompt-input' placeholder='Ask Anything...' rows={1} value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handle_submit(); } }} />
                    <div className="submit-prompt" onClick={handle_submit}>
                        <svg width="45" height="45" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="16" fill="black" /><g transform="translate(0,1)"><path d="M20 9 C19.7 9 19.5 9.1 19.3 9.4 L13.8 15.8 C13.4 16.2 13.5 16.8 13.9 17.1 C14.3 17.5 14.9 17.4 15.2 17 L19 12.5 V28 C19 28.6 19.4 29 20 29 C20.6 29 21 28.6 21 28 V12.5 L24.8 17 C25.1 17.4 25.7 17.5 26.1 17.1 C26.5 16.8 26.6 16.2 26.2 15.8 L20.7 9.4 C20.5 9.1 20.3 9 20 9Z" fill="white" className='submit-prompt-svg' /></g></svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
