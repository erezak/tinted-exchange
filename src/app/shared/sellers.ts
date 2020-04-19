import { Seller } from './seller';

export const SELLERS: Seller[] = [
    {
        id: '0',
        name: 'Parelle Griffin',
        image: '/assets/images/man3.png',
        designation: 'Sells to family guys and gals.',
        abbr: '(Parelle)',
        featured: false,
        // tslint:disable-next-line:max-line-length
        description: 'Parelle is a top seller for the last 4 years, only recently supassed by Chey'
    },
    {
        id: '1',
        name: 'Juliette Fisher',
        image: '/assets/images/woman2.png',
        designation: 'Furnitures mainly',
        abbr: '(Julie)',
        featured: false,
        // tslint:disable-next-line:max-line-length
        description: 'Julie buys furniture and paints them according to what she thinks is popular. It\'s working. 😉'
    },
    {
        id: '2',
        name: 'Matthew Miller',
        image: '/assets/images/man1.png',
        designation: 'Chief Taste Officer',
        abbr: '(Matt)',
        featured: false,
        // tslint:disable-next-line:max-line-length
        description: 'Anything in your kitchen, Matt can get you in the color you want.'
    },
    {
        id: '3',
        name: 'Cheyenne Holmes',
        image: '/assets/images/woman2.png',
        designation: 'Best Seller',
        abbr: '(Chey)',
        featured: true,
        // tslint:disable-next-line:max-line-length
        description: 'Cheyenne was voted top seller three months in a row!'
    }
];
