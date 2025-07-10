import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { type Message } from '@/types/message';
import { cn } from '@/lib/utils';
import { MessageBadge } from '@/components/chat/message-badge';
import { Crown } from 'lucide-react';


interface MessageItemProps {
    message: Message;
}

export function MessageItem({ message }: MessageItemProps) {
    if (message.type === 'event') {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>{message.eventTitle}</CardTitle>
                    <CardDescription>{message.eventDescription}</CardDescription>
                </CardHeader>
                {message.eventContent && <CardContent>{message.eventContent}</CardContent>}
            </Card>
        )
    }

    if (message.type === 'text') {
        return (
            <div className={cn(
                "mb-2 flex flex-col",
                message.isUserMessage ? "items-end" : "items-start"
            )}>
                {/* User name and level badge */}
                <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-xs text-muted-foreground">
                        {message.user.name}
                    </span>
                    {message.isUserMessage && (<MessageBadge value={<Crown />} />)}
                    {message.user.level && (<MessageBadge value={message.user.level} />)}
                </div>
                {/* Message bubble */}
                <div
                    className={cn(
                        "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                        message.isUserMessage
                            ? "bg-primary text-primary-foreground ml-auto"
                            : "bg-muted"
                    )}
                >
                    {message.content}
                </div>
            </div>
        );
    }
}
