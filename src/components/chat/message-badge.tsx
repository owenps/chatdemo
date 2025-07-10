import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface MessageBadgeProps {
    value: React.ReactNode;
}

export function MessageBadge({ value }: MessageBadgeProps) {
    function getLevelBadgeColour(level: number) {
        if (level >= 100) return "bg-yellow-400 text-yellow-900";        // Legendary/Gold
        if (level >= 75)  return "bg-orange-500 text-white";             // Master/Orange
        if (level >= 50)  return "bg-purple-500 text-white";             // Epic/Purple
        if (level >= 35)  return "bg-blue-600 text-white";               // Rare/Deep Blue
        if (level >= 20)  return "bg-blue-400 text-white";               // Uncommon/Blue
        if (level >= 5)  return "bg-green-500 text-white";              // Common/Green
        return "bg-gray-400 text-gray-900";                              // Starter/Red
    }

    return (
        <Badge variant="secondary" className={cn("text-xs", getLevelBadgeColour(typeof value === 'number' ? value : 100))}>
            {value}
        </Badge>
    );
}