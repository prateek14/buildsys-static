export interface BlogPost {
    title: string;
    url: string;
    slug?: string;
    description: string;
    date: string;
    img?: string;
    tags?: string[];
    publisher?: string;
    external?: boolean;
}
