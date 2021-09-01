
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
    description: string;
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
];

export const sections: Section[] = [
    {
        id: 1,
        number: 1,
        title: 'مقدمه و معرفی منابع و پیش نیازها',
        links: [],
        date: '14 شهریور 1400',
        description: 'تمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفید'
    },
    {
        id: 2,
        number: 2,
        title: 'توضیحات به رزومه نویسی',
        links: [],
        date: '15 شهریور 1400',
        description: 'تمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفید'

    },
    {
        id: 3,
        number: 3,
        title: 'اهمیت درست نوشتن',
        links: [],
        date: '16 شهریور 1400',
        description: 'تمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفید'

    },
    {
        id: 4,
        number: 4,
        title: 'مقاله چه طوری بنویسیم',
        links: [],
        date: '20 شهریور 1400',
        description: 'تمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفید'

    },
    {
        id: 5,
        number: 5,
        title: 'موضوع پنجم',
        links: [],
        date: '20 شهریور 1400',
        description: 'تمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفید'

    },
    {
        id: 6,
        number: 6,
        title: 'بدون عنوان',
        links: [],
        date: '21 شهریور 1400',
        description: 'تمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفید'

    },
    {
        id: 7,
        number: 7,
        title: 'شما بگویید',
        links: [],
        date: '21 شهریور 1400',
        description: 'تمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفید'

    },
    {
        id: 8,
        number: 8,
        title: 'لتک نیاز است؟',
        links: [],
        date: '22 شهریور 1400',
        description: 'تمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفیدتمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفیدتمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفیدتمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفیدتمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفیدتمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفیدتمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفیدتمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفید'

    },
    {
        id: 9,
        number: 9,
        title: 'شیوه صحیح نگارش',
        links: [],
        date: '23 شهریور 1400',
        description: 'تمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفید'

    }
];