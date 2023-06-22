const userctrl = {} ;
const User = require('../models/user.model');


userctrl.register = async (req, res) => {

    const {name, surname, email, typeUserId, password } = req.body;
    console.log(typeUserId);
        const newUser = new User({
            name,
            surname,
            email,
            password,
            typeUserId
        });
    
    const userCreate = await newUser.save();

    if(userCreate){
        return res.json({
            res: 'User created'
        })
    };
};


userctrl.login = async (req, res)=>{

    const {email, password} = req.body;

    const usuario = await User.findOne({
        where: {email}
    });


    if(!usuario){
        return res.status(404).json({
            res: 'No existe una cuenta con ese correo'
        })
    }

    if(usuario.password === password){
        return res.json({
            res: 'Has iniciado sesion correctamente',
            name: usuario.name,
            isLogin: true
        });
    } else {
        return res.status(404).json({
            res: 'Error al iniciar sesion'
        })
    }



    return res.status(200);
}




module.exports = userctrl;