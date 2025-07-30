

import Anouncements from "@/components/Anouncements";
import BigCalendar from "@/components/BigCalendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

const ParentPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4 h-full">
      <div className="flex flex-col lg:flex-row gap-4 h-full">
        
        {/* LEFT */}
        <div className="flex-1 w-full lg:w-2/3 bg-white p-4 rounded-md h-[770px]">
          <h1 className="text-xl font-semibold mb-4">Schedule (Mahnoor)</h1>
          <BigCalendar />
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          
          <Anouncements />
        </div>
      </div>
    </div>
  );
};

export default ParentPage;
