import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res){
    if(req.method=== "GET"){
        connectDB();
        if(req.query.id){
            const hotel= await Hotel.findById(req.query.id);
            return res.status(200).json({msg: "cleared", hotel});
        }
    }
}