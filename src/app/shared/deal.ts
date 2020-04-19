import { Showcased } from "./showcased";

export class Deal implements Showcased {
    id: string;
    name: string;
    image: string;
    label: string;
    price: string;
    featured: boolean;
    description: string;
}