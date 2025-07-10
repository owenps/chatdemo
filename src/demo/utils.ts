import type { Message, User } from '@/types/message';

const users: User[] = [
    { name: 'LJay', initials: 'LJ', level: 42 },
    { name: 'Danie1', initials: 'DA', level: 10 },
    { name: 'Winterz', initials: 'WI', level: 8 },
    { name: 'RinItoshi', initials: 'RI', level: 19 },
    { name: 'IsagiYoichi', initials: 'IY', level: 48 },
    { name: 'MichaelKaiser', initials: 'MK', level: 55 },
    { name: 'pr0fane', initials: 'PF', level: 22 },
    { name: 's0mething', initials: 'SO', level: 61 },
    { name: 'kiraaa', initials: 'KI', level: 3 },
    { name: 'jakeDez', initials: 'JD', level: 99 },
    { name: 'osmith6', initials: 'OS', level: 50 },
    { name: 'septemberRain', initials: 'SR', level: 1 },
    { name: 'dogTamer', initials: 'DT', level: 40 }
]

export function getRandomUsers(length: number = 1): User[] {
    const shuffledUsers = [...users].sort(() => 0.5 - Math.random());
    return shuffledUsers.slice(0, length);
}

export function getRandomUser(): User {
    return users[Math.floor(Math.random() * users.length)];
}

export function getFakeMessage(): Message {
    const contents: string[] = [
        'When is the drop?',
        'gg',
        'gl!',
        'W',
        'LFG!!!',
        'Need this one',
        '🚀🚀🚀',
        '🙏',
        '💀 aint no way',
        '📈📈📈 to the moon!!',
        'anyone bored?',
        'LULE',
        'so clutch',
        'bangg! ez',
        'hello hello wsg boys',
        'wsggg',
        'damn',
        'im up but losing now',
        'CAN I SEE SOME ENERGY HERE',
        'hello everyone',
        'why do the bots always screw me',
        'next one is mine fs',
        'last bet i stg',
        'YESS',
        'mb guys got a little too excited there',
        '🚨🚨🚨🚨🚨',
        'double?',
        'yea',
        'trust the process 🙏',
        'gl bro',
        'cmon man',
        'ezz W boys',
        'ok this is too addicting, run it back',
        'YOOOO',
        'yooo',
        'under me is poor',
        'idk what is going on rn',
        'better hurry up',
        'lmao',
        'BIG',
        'cash outtt',
        'good win tho',
        'you gotta go all in',
        'im bout to crash out',
        'wp',
        '😭',
        '🤣',
        'bro spoke too soon',
        'i need to get in on this',
        'im not even playing and im hyped',
        'i need a win',
        'yessir',
        'might just go all in',
    ]
    const user = getRandomUser();
    const content = contents[Math.floor(Math.random() * contents.length)];
    return {
        type: "text",
        user,
        content,
        timestamp: new Date().toISOString(),
        isUserMessage: false, 
    }
}

export function getRandomStartJackpot() {
    // Random start jackpot between 100 and 1100
    return Math.floor(100 + Math.random() * 1000);
}

export function getRandomIncrement() {
    // Random increment between 10 and 260
    return Math.floor(10 + Math.random() * 250);
}