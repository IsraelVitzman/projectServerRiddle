import { supabase } from '../connectToDB/creatConnectSupaBase.js'


export async function GetBestResultsForAllUsers(req, res) {
    try {
        const { data, error } = await supabase.from('resultRiddles').select('*')
        if (error) throw error
        res.status(200).json(data);
    } catch (err) {
        console.error('invalid eroor', err);
        throw err;

    } 
}
