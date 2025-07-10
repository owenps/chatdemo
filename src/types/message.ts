export type User = {
    name: string;
    initials: string;
    level?: number;
}

export type TextMessage = {
    isUserMessage: boolean;
    type: 'text';
    user: User;
    content: string;
    timestamp: string;
};

export type EventMessage = {
    isUserMessage: false;
    type: 'event';
    eventTitle: string;
    eventDescription: string;
    eventContent?: string;
    timestamp: string;
}

export type Message = TextMessage | EventMessage;