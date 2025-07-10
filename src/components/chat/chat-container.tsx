import { useEffect, useRef, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageList } from '@/components/chat/message-list';
import { MessageInput } from '@/components/chat/message-input';
import { type Message } from '@/types/message';
import { CoinEventBanner } from '@/components/chat/event-banner';
import { getFakeMessage, getRandomIncrement, getRandomStartJackpot, getRandomUser, getRandomUsers } from '@/demo/utils';

export function ChatContainer() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [jackpot, setJackpot] = useState<number>(getRandomStartJackpot());

    const jackpotRef = useRef(jackpot);
    useEffect(() => {
        jackpotRef.current = jackpot;
    }, [jackpot]);

    // Create fake messages and set up interval to add new messages
    useEffect(() => {
        setMessages(Array.from({ length: 5 }, getFakeMessage));

        const interval = setInterval(() => {
            setMessages((prev) => [...prev, getFakeMessage()]);
        }, 4000)

        return () => clearInterval(interval);
    }, []);

    // Increment Jackpot and cashout logic
    useEffect(() => {
        const incrementInterval = setInterval(() => {
            const increment: number = getRandomIncrement();
            const user = getRandomUser();
            const newJackpot = jackpotRef.current + increment;
            setJackpot(newJackpot);
            setMessages((msgs) => [
                ...msgs,
                {
                    type: 'event',
                    eventTitle: 'JACKPOT UPDATE 🚀',
                    eventDescription: `${user.name} has increased the jackpot by ${increment.toLocaleString()}! Current jackpot: ${newJackpot.toLocaleString()} coins.`,
                    timestamp: new Date().toISOString(),
                    isUserMessage: false,
                }
            ]);
        }, 5500);

        const cashoutInterval = setInterval(() => {
            const cashoutAmount = jackpotRef.current;
            if (cashoutAmount <= 0) return;
            setJackpot(0);

            const winners = getRandomUsers(3);
            const firstPrize = Math.floor(cashoutAmount * 0.6);
            const secondPrize = Math.floor(cashoutAmount * 0.3);
            const thirdPrize = cashoutAmount - firstPrize - secondPrize;

            const winText = 
                `🥇 ${winners[0].name} wins ${firstPrize.toLocaleString()} coins!\n` +
                `🥈 ${winners[1].name} wins ${secondPrize.toLocaleString()} coins!\n` +
                `🥉 ${winners[2].name} wins ${thirdPrize.toLocaleString()} coins!`;


            setMessages((msgs) => [
                ...msgs,
                {
                    type: 'event',
                    eventTitle: 'JACKPOT CASHOUT 💰',
                    eventDescription: `Jackpot total ${cashoutAmount.toLocaleString()} coins!`,
                    eventContent: winText,
                    timestamp: new Date().toISOString(),
                    isUserMessage: false,
                }
            ]);
        }, 25000);

        return () => {
            clearInterval(incrementInterval);
            clearInterval(cashoutInterval);
        };
    }, []);

    const handleIncrementJackpot = () => {
        const increment = 100;
        const newJackpot = jackpot + increment;
        setJackpot(newJackpot);
        setMessages(msgs => [
            ...msgs,
            {
                type: 'event',
                eventTitle: 'JACKPOT UPDATE 🚀',
                eventDescription: `Admin has increased the jackpot by ${increment}! Current jackpot: ${newJackpot.toLocaleString()} coins.`,
                timestamp: new Date().toISOString(),
                isUserMessage: false,
            }
        ]);
    };

    const handleSendMessage = (content: string) => {
        const newMessage: Message = {
            type: 'text',
            content,
            isUserMessage: true,
            timestamp: new Date().toISOString(),
            user: {
                name: 'Admin',
                initials: 'AD',
                level: 999
            }
        }
        setMessages((msgs) => [...msgs, newMessage]);
    }

    return (
        <div className="flex h-full w-full flex-col gap-4">
            <CoinEventBanner count={jackpot} increment={handleIncrementJackpot} />
            <ScrollArea className="h-[65vh] px-4 py-2 border rounded-lg bg-background">
                <MessageList messages={messages} />
            </ScrollArea>
            <MessageInput onSend={handleSendMessage} />
        </div>
    );
};