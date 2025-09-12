import { supabase } from '../connectToDB/creatConnectSupaBase.js'
import {SignToken} from"../token/token.js"



export async function LoginPlayer(req, res) {
    try {
        const { name, password, role } = req.body;
        const { data, error } = await supabase
            .from('user')
            .select('*')
            .eq('name', name)
            .eq('password', password)
            .eq('role', role)
            .maybeSingle();
        if(!data){
            res.status(404).json({message:"user no found"})
            return
        }
        if (error) throw error
        
        const token = SignToken(name, role)
        console.log(`login successful: ${name} (${role})`);
        console.log(`token sent in token: ${token.substring(0, 20)}...`);
        res.status(200).json({ "token": token, message: `welcome${name}` })
        

    } catch (err) {
        console.error("Login error", err);
        res.status(500).json({ message: "Server error" });
    } 
}
