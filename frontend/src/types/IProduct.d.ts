// Define the interface for a Product document
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    scent: string;
    size: string;
    weight: number;
    imageUrl: string;
    category: string;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
}