import { supabase } from "../connectToDB/creatConnectSupaBase.js";

export async function GetBestGameResultByUserName(req, res) {
    try {
        const name = req.params.name;
        console.log(name, "name");
        const { data, error } = await supabase
            .from('resultRiddles')
            .select('*')
            .eq('name', name);
        if (error) {
            throw error;
        }
        res.status(200).json(data);
    } catch (err) {
        console.error("invalid error", err);
        res.status(500).json({ message: 'internal error' });
    }
}

