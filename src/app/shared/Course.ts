
export interface Course{
    id: number;
    title: string;   
    description: string;
    lastPublished: string;
    instructor: string;
    cover: any;
    sections: Section[];
}
export interface Section{
    id: number;
    number: number;
    title: string;
    links: Link[];
    date: string;
}
export interface Link{
    type: string;
    link: string;
}



export const courses : Course[] = [
    {
        id: 1,
        title: 'داده کاوری',
        description: 'داده کاوی دانشکده ریاضی و علوم کامپیوتر',
        lastPublished: '20 شهریور 1400',
        instructor: 'عادل محمدپور',
        cover: null,
        sections: []
    },
    {
        id: 2,
        title: 'شبیه سازی',
        description: 'شبیه سازی دانشکده ریاضی و علوم کامپیوتر',
        lastPublished: '21 شهریور 1400',
        instructor: 'عادل محمدپور',
        cover: null,
        sections: []
    },
    {
        id: 3,
        title: 'روش تحقیق و گزارش نویسی',
        description: 'روش تحقیق و گزارش نویسی دانشکده ریاضی و علوم کامپیوتر',
        lastPublished: '21 شهریور 1400',
        instructor: 'عادل محمدپور',
        cover: null,
        sections: []
    }
]