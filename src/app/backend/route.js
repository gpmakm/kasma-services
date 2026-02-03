import { NextResponse } from "next/server";
import mongoose, { mongo } from "mongoose";
import mongodb from "mongodb";

const ServiceSchema=new mongoose.Schema({
    name:String,
    phone:Number,
    service:String
})
console.log(process.env.NEXT_PUBLIC_DB_URL);

mongoose.connect(process.env.NEXT_PUBLIC_DB_URL).then(()=>{
    console.log("Connected to database");
}).catch((err)=>{
    console.log("Error in connecting to database"+err.message);
});
const servicemodel=mongoose.models.servicemodel||mongoose.model('servicemodel',ServiceSchema);

// export default function handler(req, res) {
//   res.status(200).json({ message: "Hello from the backend!" });
//   if(req.method==='POST'){
//         try{
//             const data=req.body;
//         console.log(data);
//         return NextResponse.json({message:"Data received"});
//         }
//         catch(err){
//             return NextResponse.json({message:"Error in receiving data"});
//         }
//   }
//   if(res.status===405){
//     return NextResponse.json({message:"Method not allowed"});
//   }
// }

export async function POST(req) {
     try{
            const data=await req.json();
        console.log(data);
        
        let details=new servicemodel({
            name:data.name,
            phone:data.phone,
            service:data.service
        })
        await details.save().then((()=>{console.log("Details saved to database");
        })).catch((err)=>{console.log(err.message);
        })
        return NextResponse.json({message:"Data received and saved to database"});
        }
        catch(err){
            return NextResponse.json({message:"Error in receiving data"});
        }
}