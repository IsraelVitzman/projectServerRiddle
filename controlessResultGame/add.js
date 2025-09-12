import {supabase} from "../connectToDB/creatConnectSupaBase.js";
export async function InsertGameResult(req, res) {
  try {
    const { name, avergeTime, allTime } = req.body;
    console.log("Insert Game Result", name, avergeTime, allTime);
    const { data, error } = await supabase
      .from('resultRiddles')
      .insert([{ name, avergeTime, allTime }]); 
    if (error) throw error;
    res.status(201).json({ message: "Game results inserted successfully"});
  } catch (err) {
    console.error('Insert error:', err);
    res.status(500).json({ message: 'Insert error', error: err.message });
  }
}


