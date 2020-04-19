import { Showcased } from "./showcased";

export class Seller implements Showcased {
    id: string;
    name: string;
    image: string;
    designation: string;
    abbr: string;
    featured: boolean;
    description: string;
}
