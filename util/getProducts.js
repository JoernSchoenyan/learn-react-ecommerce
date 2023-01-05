import dbConnect from './mongo';
import Product from '../models/Product'

async function getProducts() {
    await dbConnect();

    const products = await Product.find().lean();

    return products;
}

export default getProducts;