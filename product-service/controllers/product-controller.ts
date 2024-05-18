import { Request, Response } from 'express';
import ProductModel from '../models/product-model';
import { Product } from '../libs/types/IProduct';
import HttpStatusCode from '../libs/enums/HttpStatusCode';

// Utility function to handle error responses
const handleError = (error: unknown, res: Response) => {
    if (error instanceof Error) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR.valueOf()).json({ message: error.message });
    } else {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR.valueOf()).json({ message: 'An unknown error occurred' });
    }
};

// Create a new product
export const createProduct = async (req: Request, res: Response) => {
    try {
        const productData: Product = req.body;
        const newProduct = await ProductModel.create(productData);
        res.status(HttpStatusCode.CREATED.valueOf()).json(newProduct);
    } catch (error) {
        handleError(error, res);
    }
};

// Get a product by ID
export const getProductById = async (req: Request, res: Response) => {
    try {
        const product = await ProductModel.findById(req.query.id);
        console.log(req.query.id);
        if (!product) {
            return res.status(HttpStatusCode.NOT_FOUND.valueOf()).json({ message: 'Product not found' });
        }
        res.status(HttpStatusCode.OK.valueOf()).json(product);
    } catch (error) {
        handleError(error, res);
    }
};

// Get all products with optional filters
export const getProducts = async (req: Request, res: Response) => {
    try {
        const filters = req.query;
        const products = await ProductModel.find(filters);
        res.status(HttpStatusCode.OK.valueOf()).json(products);
    } catch (error) {
        handleError(error, res);
    }
};

// Update a product by ID
export const updateProduct = async (req: Request, res: Response) => {
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(HttpStatusCode.NOT_FOUND.valueOf()).json({ message: 'Product not found' });
        }
        res.status(HttpStatusCode.OK.valueOf()).json(updatedProduct);
    } catch (error) {
        handleError(error, res);
    }
};

// Delete a product by ID
export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const deletedProduct = await ProductModel.findByIdAndDelete(req.query.id);
        if (!deletedProduct) {
            return res.status(HttpStatusCode.NOT_FOUND.valueOf()).json({ message: 'Product not found' });
        }
        res.status(HttpStatusCode.OK.valueOf()).json({ message: 'Product deleted successfully' });
    } catch (error) {
        handleError(error, res);
    }
};

const productController = {
    createProduct,
    getProductById,
    getProducts,
    updateProduct,
    deleteProduct
}

export default productController;