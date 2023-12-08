let eList = {"orders":[]} // require('../data/emails.json')



const fs = require('fs')

const allProducts = require('../data/products.json');
let cart = {products:[]}

exports.checkOut= (req,res) => {
    res.render('check-out', { csrf : 'supersecret'  })
}

exports.checkOutProcess = (req,res) => {

  
    console.log(req.body)

   
    eList.users.push(req.body)

    var json = JSON.stringify(eList)

    console.log(json)

    fs.writeFileSync('./data/orders.json',json,'utf8',()=>{})

    res.redirect(303,'/thankyou')

}




exports.showProduct = (req,res) => { 


    var products = require('../data/products.json')

    var productDetails = products.items.filter((product)=>{ 
        return product.id == req.params.id
     })
     console.log(productDetails)
    res.render("products",{"products":productDetails})
}

exports.showCategory = (req,res) => { 

    var products = require('../data/products.json')
    var categories = require('../data/categories.json')
    var categoryDetails = categories.categories.filter((category)=>{ 
        return category.url == req.params.category
     })


    var productDetails = products.items.filter((product)=>{ 
        return product.category == req.params.category
     })
     console.log(productDetails)
     console.log(productDetails.name)
     res.render('category',{"products": productDetails,"category":categoryDetails})

}

exports.addToCartProcess = (req,res) => {
     
     console.log(req.body)
  const productIdToAdd = req.body.product;

  
  const matchingProduct = allProducts.items.find(product => product.id === parseInt(productIdToAdd));

  if (matchingProduct) {
  
    cart.products.push(matchingProduct);
    eList.orders.push(matchingProduct)
    var json = JSON.stringify(eList)

    console.log(json)

    fs.writeFileSync('./data/orders.json',json,'utf8',()=>{})
  }
console.log(matchingProduct)
  
  console.log('Updated Cart Products:', cart.products);
  console.log(cart)

  
  res.render('cart', { cartProducts: cart.products, pageTitle: 'Shopping Cart' });
  console.log('Rendering cart view')


   


}



exports.checkOutProcess = (req,res) => {

   
    console.log(req.body)
    
    var newOrder = {
        'firstname' : req.body.firstname,
        'lastname' : req.body.lastname,
        'address':req.body.address,
        'city':req.body.city,
        'state':req.body.state,
        'zip':req.body.zip,
        'email' : req.body.email
    }
   
    eList.orders.push(newOrder)

    var json = JSON.stringify(eList)

    console.log(json)

    fs.writeFileSync('./data/orders.json',json,'utf8',()=>{})

   
    res.redirect(303,'/thankyou')
    
     
   

}