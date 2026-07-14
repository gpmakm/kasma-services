import {NextResponse} from 'next/server'
import fs from 'fs'
import path from 'path'


export async function POST(req){
    let order=await req.json()
    let filePath=path.join(process.cwd(),'order.json')
    let data=fs.writeFileSync(filePath, JSON.stringify(order),'utf-8',(err)=>{
        if(err){
            console.log(err)
            return NextResponse.json({message:'Error in writing data'}, {status:500})
        } 
    })
    return NextResponse.json({message:'Data received and saved to file'})
}