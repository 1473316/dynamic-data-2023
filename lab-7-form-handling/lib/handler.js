exports.newsletterSignup=(req,res)=>{
    res.render('newsletter-signup', { csrf : 'supersecret'})
}
exports.newsletterSignupProcess=(req,res)=>{
    console.log(req.body)
    res.send("you posted something again to /process"+req.body.email)
}
