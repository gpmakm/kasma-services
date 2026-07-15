import {NextResponse} from 'next/server'
import fs from 'fs'
import path from 'path'


export async function POST(req){
    let order=await req.json()
    let filePath=path.join(process.cwd(),'/public/order.json')
   try {
    fs.writeFileSync(filePath, JSON.stringify(order), 'utf-8');
    console.log("Data written successfully");
} catch (err) {
    console.error("Error writing file:", err);
    return NextResponse.json({message:'Error in writing data'}, {status:500});
}
    return NextResponse.json({message:'Data received and saved to file'})
}