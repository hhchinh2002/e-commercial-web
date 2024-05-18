import db from "../mongo-db";
import mongoose, { Schema, Document, Model } from 'mongoose';
import { Product } from "../libs/types/IProduct";

// Define the schema for a Product
const ProductSchema: Schema = new Schema<Product & Document>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    scent: { type: String, required: true },
    size: { type: String, required: true },
    weight: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// Pre-save hook to update the updatedAt field
ProductSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});

// Create the Product model
const ProductModel: Model<Product & Document> = db.model<Product & Document>('product', ProductSchema);

// Export CRUD operations as functions
export const createProduct = async (productData: Product & Document) => {
    const product = new ProductModel(productData);
    return await product.save();
};

export const getProductById = async (productId: string) => {
    return await ProductModel.findById(productId).exec();
};

export const getProducts = async (filters: any = {}) => {
    return await ProductModel.find(filters).exec();
};

export const updateProduct = async (productId: string, updateData: Partial<Product & Document>) => {
    return await ProductModel.findByIdAndUpdate(productId, updateData, { new: true }).exec();
};

export const deleteProduct = async (productId: string) => {
    return await ProductModel.findByIdAndDelete(productId).exec();
};

export default ProductModel;