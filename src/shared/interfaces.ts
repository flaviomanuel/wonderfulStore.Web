import { PromotionTypes } from "./types";

export interface IProduct {
    id: string,
    name: string,
    price: number,
    description: string;
    promotionType: PromotionTypes;
}
