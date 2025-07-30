import Anouncements from "@/components/Anouncements"
import AttendanceChartContainer from "@/components/AttendenceChartContainer"
import CountChartContainer from "@/components/CountChartContainer"
import EventCalendarContainer from "@/components/EventCalendarContainer"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"

const AdminPage=({
  searchParams,
}: {
  searchParams: { [keys: string]: string | undefined };
}) => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/*LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-6">
{/*USER CARDS */}
<div className="flex gap-4 justify-between flex-wrap">
    <UserCard type="admin"/>
  <UserCard type="student"/>
   <UserCard type="teacher"/>
    <UserCard type="parent"/>
     
</div>
 {/*MIDDLE CHARTS */}
<div className="flex gap-4 flex-col lg:flex-row">
  {/*COUNT CHARTS */}
  <div className="w-full lg:w-1/3 h-[450px]">
  <CountChartContainer/>
  </div>
  {/*ATTENDENCE CHARTS */}
  <div className="w-full lg:w-2/3 h-[450px]">
  <AttendanceChartContainer/>
    </div>
</div>
 {/*BOTTOM CHARTS */}
<div className="w-full h-[490px]">
  <FinanceChart/>
</div>
      </div>
        {/*RIGHT */}
      <div className="w-full lg:w-1/3  flex flex-col gap-9">
      <EventCalendarContainer searchParams={searchParams}/>
      <Anouncements />
      </div>
    </div>
  )
}

export default AdminPage
