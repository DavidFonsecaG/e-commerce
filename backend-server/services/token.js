var jwt = require('jsonwebtoken');
module.exports={
    encode: async (user)=>{
        const token = jwt.sign({
            id: user._id,
            name: user.nombre,
            email: user.email,
            rol: user.rol},'clavesecreta',{expiresIn: 3600}); //expires es el tiempo que expira el token, 3600seg
        return token;
        }   
    }
