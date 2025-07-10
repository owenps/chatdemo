import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

interface MessageInputProps {
    onSend: (content: string) => void;
}

export function MessageInput({ onSend }: MessageInputProps) {
    const [value, setValue] = useState('');

    const handleSend = () => {
        const trimmedValue = value.trim();
        if (trimmedValue) {
            onSend(trimmedValue);
            setValue('');
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          handleSend();
        }
      };

    return (
        <div className="relative w-full">
            <Input
                type="text"
                placeholder="Send a message"
                className="flex-1 pr-10 focus:ring-inset"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete='off'
                autoFocus
            />
            <Button
                type="submit"
                variant="ghost"
                size="icon"
                onClick={handleSend}
                className="absolute top-1/2 right-2 size-6 -translate-y-1/2 rounded-full"
            >
                <Send />
            </Button>
        </div>
    )
}