export interface Highlight {
    text: string;
    link: string;
}

export interface CardProps {
    id: string;
    title: string;
    subTitle: {
        text: string;
        url?: string;
    };
    location?: string;
    period?: string;
    description?: string;
    technologies?: string[];
    highlights: (string | Highlight)[];
    headerImage: string;
    category?: 'Web Development' | 'Mobile App' | 'Design';
    liveUrl?: string;
    githubUrl?: string;
    onClick?: () => void;
}
