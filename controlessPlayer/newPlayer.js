import { supabase } from '../connectToDB/creatConnectSupaBase.js'
import { SignToken } from '../token/token.js';

export async function NewPlayer(req, res) {
    try {
        const { name, password, role } = req.body;
         const { data } = await supabase
            .from('user')
            .select('id')
            .eq('password', password)
            
        if (data.length>0) {
            return res.status(400).json({ message: "password  used " });
        }

        const { error } =   await supabase.from("user")
            .insert([{ name, password, role }])
        if(error) throw error
        const token =SignToken(name, role)
        console.log(`login successful: ${name} (${role})`);
        console.log(`token sent in token: ${token.substring(0, 20)}...`);

        res.status(200).json({ "token": token, message: `welcome new user${name}` })

    } catch (err) {
        console.log('invalid  error', err);
        res.status(500).json({ message: 'invalid error' });
    }
}