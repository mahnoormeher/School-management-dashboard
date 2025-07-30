"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AttendenceChart =({data,}:{data:{name:string,present:number,absent:number}[]})=>{
    return(
            <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}}  tickLine={false}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}}  tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}} />
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}} />
          <Bar dataKey="present" fill="#fef08a" 
          legendType='circle' radius={[10,10,0,0]} />
          <Bar dataKey="absent" fill="#d8b4fe" 
          legendType='circle' radius={[10,10,0,0]} />
        </BarChart>
      </ResponsiveContainer>
       
    )
}

export default AttendenceChart