import { useEffect, useRef } from 'react';
import { MessageItem } from '@/components/chat/message-item';
import { type Message } from '@/types/message';

interface MessageListProps {
    messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <div className="flex flex-col gap-4">
            {messages.map((message, index) => <MessageItem key={index} message={message} />)}
            <div ref={bottomRef} />
        </div>
    )
}