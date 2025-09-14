import jwt from 'jsonwebtoken';


const SECRET = 'your_jwt_secret_key';
export function SignToken(name, role) {
    return jwt.sign(
        {
            name: name,
            role: role
        },
        SECRET,
        { expiresIn: '1h' }
    );
}

export  function VerifyToken(role) {
    return async(req, res, next) => {
        const token = await req.headers['authorization'];
        
        console.log("in token" ,token);
        
        if (token==="null") {
            console.log("you have not tokn");
            return  res.json({ message: "אינך רשום באתר" });
           
        }
       
        jwt.verify(token, SECRET, (err, decoded) => {
            console.log(decoded,"decoded");
            if (err) {
                console.log(err);
                res.json({ message: err });
                return
            }
            console.log(decoded.role,"decoded.role");
            if (role === "admin") {
                if (decoded.role !== 'admin') {
                    console.log("no accses is no admin");
                    res.json({ messege: "no accses is no admin " })
                    return
                }
            } else if (role === "user") {
                if (decoded.role !== 'admin' && decoded.role !== 'user') {
                    console.log("no accses is no admin or user");
                    res.json({ messege: "no accses is no admin or user" })
                    return
                }
            }
            console.log("accses successoflly");
            next();
        });
    }
}



