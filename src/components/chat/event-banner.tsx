import React from 'react';
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Coins, Crown, HandCoins } from 'lucide-react';

interface EventBannerProps {
    title: React.ReactNode;
    description: string;
    action?: React.ReactNode;
}

export function EventBanner({ title, description, action }: EventBannerProps) {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <CardAction>{action}</CardAction>
            </CardHeader>
        </Card>
    );
}

interface CoinEventBannerProps {
    count: number;
    increment: () => void;
}

export function CoinEventBanner({count, increment} : CoinEventBannerProps) {
    return EventBanner({
        title: (
            <div className="flex items-center gap-1">
                <Crown />
                COIN JACKPOT
            </div>
        ),
        description: "Contribute for a chance to win it all",
        action: (
            <div className="flex items-center gap-2">
                <Button
                    className='w-auto'
                    variant="ghost"
                    size="icon"
                    disabled
                >
                    <Coins /> {count.toLocaleString('en-US')}
                </Button>
                <Button
                    onClick={increment}
                >
                    <HandCoins />
                </Button>
            </div>
        )
    });
}