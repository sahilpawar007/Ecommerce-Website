const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
 

// Create Product -- ADMIN

exports.createProduct = catchAsyncErrors(async (req,res,next)=>{

    const product = await Product.create(req.body);
    res.status(201).json({
        sucess:true,
        product
    })
})

// Get All Product
exports.getAllProducts = catchAsyncErrors(async(req,res) =>{

    const products = await Product.find();
    res.status(200).json({
        sucess:true,
        products
    })

})

// Get Product Details

exports.getProductDetails = catchAsyncErrors(async(req,res,next)=>{

    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404))
    }

    res.status(200).json({
        sucess:true,
        product
    })
})


// Update Product --ADMIN

exports.updateProduct = catchAsyncErrors(async(req,res,next) =>{

    let product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404))
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
})

// Delete Product --ADMIN

exports.deleteProduct = catchAsyncErrors(async(req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404))
    }

    await product.remove();

    res.status(200).json({
        sucess:true,
        message:"Product Delete Successfully"
    })
});

