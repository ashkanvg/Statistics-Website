
export interface Subject{
    id: number;
    title: string;
    lastPublished: string; // updated_at
    courses: []
    description: string;
}

export interface Course{
    id: number;
    title: string;   
    description: string;
    lastPublished: string;
    instructor: string;
    cover: any;
    sections: Section[];
    label: string;
    institution: string;
}
export interface Section{
    id: number;
    number: number;
    title: string;
    links: Link[];
    date: string;
    description: string;
    views: string;
}
export interface Link{
    type: number;
    // 1 --> slides/pdf
    // 2 --> videos
    // 3 --> others
    link: string;
    title: string;
    date: string;
}



// export const courses : Course[] = [
//     {
//         id: 1,
//         title: 'داده کاوری',
//         description: 'داده کاوی دانشکده ریاضی و علوم کامپیوتر',
//         lastPublished: '20 شهریور 1400',
//         instructor: 'عادل محمدپور',
//         cover: null,
//         sections: []
//     },
//     {
//         id: 2,
//         title: 'شبیه سازی',
//         description: 'شبیه سازی دانشکده ریاضی و علوم کامپیوتر',
//         lastPublished: '21 شهریور 1400',
//         instructor: 'عادل محمدپور',
//         cover: null,
//         sections: []
//     },
//     {
//         id: 3,
//         title: 'روش تحقیق و گزارش نویسی',
//         description: 'روش تحقیق و گزارش نویسی دانشکده ریاضی و علوم کامپیوتر',
//         lastPublished: '21 شهریور 1400',
//         instructor: 'عادل محمدپور',
//         cover: null,
//         sections: []
//     }
// ];

// export const sections: Section[] = [
//     {
//         id: 1,
//         number: 1,
//         title: 'مقدمه و معرفی منابع و پیش نیازها',
//         links: [],
//         date: '14 شهریور 1400',
//         description: 'تمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفید'
//     },
//     {
//         id: 2,
//         number: 2,
//         title: 'توضیحات به رزومه نویسی',
//         links: [],
//         date: '15 شهریور 1400',
//         description: 'تمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفید'

//     },
//     {
//         id: 3,
//         number: 3,
//         title: 'اهمیت درست نوشتن',
//         links: [],
//         date: '16 شهریور 1400',
//         description: 'تمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفید'

//     },
//     {
//         id: 4,
//         number: 4,
//         title: 'مقاله چه طوری بنویسیم',
//         links: [],
//         date: '20 شهریور 1400',
//         description: 'تمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفید'

//     },
//     {
//         id: 5,
//         number: 5,
//         title: 'موضوع پنجم',
//         links: [],
//         date: '20 شهریور 1400',
//         description: 'تمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفید'

//     },
//     {
//         id: 6,
//         number: 6,
//         title: 'بدون عنوان',
//         links: [],
//         date: '21 شهریور 1400',
//         description: 'تمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفید'

//     },
//     {
//         id: 7,
//         number: 7,
//         title: 'شما بگویید',
//         links: [],
//         date: '21 شهریور 1400',
//         description: 'تمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفید'

//     },
//     {
//         id: 8,
//         number: 8,
//         title: 'لتک نیاز است؟',
//         links: [],
//         date: '22 شهریور 1400',
//         description: 'تمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفیدتمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفیدتمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفیدتمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفیدتمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفیدتمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفیدتمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفیدتمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفید'

//     },
//     {
//         id: 9,
//         number: 9,
//         title: 'شیوه صحیح نگارش',
//         links: [],
//         date: '23 شهریور 1400',
//         description: 'تمام توضیحاتی که لازم است را اینجا بنویسید، مختصر و مفید'

//     }
// ];

// export const links: Link[] = [
//     {
//         type: 1,
//         link: 'https://www.google.com',
//         title: 'جزوه درس',
//         date: '12 شهریور 1400'
//     },
//     {
//         type: 2,
//         link: 'https://www.aut.ac.ir',
//         title: 'ویدئو درس',
//         date: '12 شهریور 1400'

//     },
//     {
//         type: 3,
//         link: 'https://www.google.com',
//         title: 'سایر درس',
//         date: '12 شهریور 1400'

//     },
//     {
//         type: 1,
//         link: 'https://www.google.com',
//         title: 'تست درس',
//         date: '12 شهریور 1400'

//     },
//     {
//         type: 3,
//         link: 'https://www.google.com',
//         title: 'امتحان درس',        
//         date: '12 شهریور 1400'

//     }
// ]