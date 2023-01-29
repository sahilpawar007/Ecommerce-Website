const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");




// Create Product -- ADMIN

exports.createProduct = async (req,res,next)=>{

    const product = await Product.create(req.body);
    res.status(201).json({
        sucess:true,
        product
    })
}

// Get All Product
exports.getAllProducts = async(req,res) =>{

    const products = await Product.find();
    res.status(200).json({
        sucess:true,
        products
    })

}

// Get Product Details

exports.getProductDetails = async(req,res,next)=>{

    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404))
    }

    res.status(200).json({
        sucess:true,
        product
    })
}


// Update Product --ADMIN

exports.updateProduct = async(req,res,next) =>{

    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            sucess:false,
            message:"Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })
    
    res.status(200).json({
        sucess:true,
        product
    })
}

// Delete Product --ADMIN

exports.deleteProduct = async(req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            sucess:false,
            message:"Product not found"
        })
    }

    await product.remove();

    res.status(200).json({
        sucess:true,
        message:"Product Delete Successfully"
    })
}

