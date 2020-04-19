import { Comment } from './comment';
import { Showcased } from './showcased';

export class Product implements Showcased {
    id: string;
    name: string;
    image: string;
    category: string;
    featured: boolean;
    label: string;
    price: string;
    description: string;
    comments: Comment [];
}
