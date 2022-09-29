const { validationResult } = require('express-validator');
/* let errors = validationResult(req); */


const controller ={

    register : (req,res) => {
        return res.render('register',{
            title: 'register'
        })
    },
    processRegister: (req,res) => {
        let errors = validationResult(req);
        
        if (errors.isEmpty()) {
            return res.send ('Ok, las validaciones se pasaron sin errores')            
        }
        else{
            res.render('register', { errors: errors.mapped(), old: req.body });;
        }
        
    }


}

module.exports = controller;