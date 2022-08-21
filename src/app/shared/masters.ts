export interface Master{
    id: number;
    name: string;
    field: string;
    role: string;
}

export interface GuidanceAll{
    id: number;
    name: string;
    fields: string[];
    role: string;
    email: string;
    website: string;
    picture: string;
    address: string;
    phone: string;
}