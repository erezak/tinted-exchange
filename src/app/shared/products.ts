import { Product } from './product';

export const PRODUCTS: Product[] = [
    {
        id: '0',
        name: 'Aero Bike',
        image: '/assets/images/bikes.png',
        category: 'bike',
        featured: true,
        label: 'Hot',
        price: '4.99',
        // tslint:disable-next-line:max-line-length
        description: 'A very good day-to-day bike with a fast feel and aero touches.',
        comments: [
            {
                rating: 5,
                comment: 'Grea bike. Mine are green',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'I love mine. Have silver ones.',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'Red. Anyone wants? Not too excited about them.',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            }
        ]
    },
    {
        id: '1',
        name: 'Country Coffee Table',
        image: '/assets/images/CountryCoffeeTable.png',
        category: 'furniture',
        featured: false,
        label: '',
        price: '1.99',
        description: 'Great coffee table to complemet your living room.',
        comments: [
            {
                rating: 5,
                comment: 'Grea table. Mine is green',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'I love mine. Have a gold one.',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'Red. Anyone wants? Not too excited about it.',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            }
        ]
    },
    {
        id: '2',
        name: 'Phone Cover',
        image: '/assets/images/PhoneCover.png',
        category: 'appetizer',
        featured: false,
        label: 'New',
        price: '1.99',
        description: 'We have covers from many users, with many colors. Take your pick.',
        comments: [
            {
                rating: 5,
                comment: 'Grea cover. Mine is green',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'I love mine. Have a silver one.',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'Red. Anyone wants? Not too excited about it.',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            }
        ]
    },
    {
        id: '3',
        name: 'Coffee Machine',
        image: '/assets/images/coffee.png',
        category: 'furniture',
        featured: false,
        label: '',
        price: '2.99',
        description: 'A great brewer, to get you started in the morning.',
        comments: [
            {
                rating: 5,
                comment: 'Grea coffee maker. Mine is green',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'I love mine. Have a silver one.',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'Red. Anyone wants? Not too excited about it.',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            }
        ]
    }
];
