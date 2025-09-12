import jwt from 'jsonwebtoken';


const SECRET = process.env.SECRET;
export function SignToken(name,role) {
    return jwt.sign(
        {
            name: name,
            role: role
        },
        SECRET,
        { expiresIn: '1h' }
    );
}

export function VerifyToken(req, res, next,role) {
    const token = req.headers['authorization'];
    if (!token) {
        console.log("you have not tokn");
        res.json({ message: "you have not tokn" });
        return;
    }

    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            console.log(err);
            res.json({ message: err });
            return
        }
        console.log(decoded.role);
    if(role==="admin"){
        if (decoded.role !== 'admin') {
            console.log("no accses is no admin");
            res.json({ messege: "no accses is no admin " })
            return
        }
    }else if(role==="user"){
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



