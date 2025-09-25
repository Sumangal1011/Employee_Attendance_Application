import React, { useEffect, useState } from 'react'
const Home = () => {
  const [datetime,setDateTime] = useState(new Date());
  useEffect(()=>{
    const timer = setInterval(()=>{
      setDateTime(new Date());
    },1000);
    return ()=> clearInterval(timer)
  },[]);

const options={
  weekday: "long", year: "numeric", month: "long", day: "numeric"
}
const date = datetime.toLocaleDateString(undefined, options);
const time = datetime.toLocaleTimeString();
  return (
    
    <>
    <div>
      <div className='w-full border-gray-200 border-2 flex gap-2'>
        <div className='w-[50%] flex items-center justify-center'>
          <div className="text-center text-[20px] sm:text-[30px] lg:text-[40px] py-2 justify-center ">Welcome back,<br />Sumangal <br />
              <p className='text-center text-[10px] sm:text-[15px] lg:text-[20px]'>{time}, {date} </p>
              <button type="button" className="text-white bg-[#1D4ED8] hover:bg-blue-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Mark Attendance</button>
              <button type="button" className="text-white bg-[#1D4ED8] hover:bg-blue-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Check Out</button>
            </div>
        </div>
        <div className='w-[50%]  flex justify-center'>
          <img src="https://static.vecteezy.com/system/resources/previews/045/593/150/non_2x/delegation-of-business-teams-effective-organization-of-work-planning-and-allocation-of-duties-leaders-or-managers-transfer-work-to-responsible-employees-design-illustration-vector.jpg" className='w-[50%] m-10' alt="image" />
        </div>
      </div>
      <div className="w-full border-gray-200 border-2 grid grid-cols-4 text-center">
        <div>
          <h1 className="text-[10px] sm:text-[15px] lg:text-[25px]">Today's Attendance
            <div>25 Present</div>
            <div>2 Absent</div>
            <div>1 Late</div>
          </h1>
        </div>
        <div><h1 className="text-[10px] sm:text-[15px] lg:text-[25px]">Your Attendance</h1>
          <div className='text-[17px]'>Last Check-in <p className='text-[20px]'>8:10 AM</p></div>
          <div className='text-[17px]'>Hours worked Today <p className='text-[20px]'>8h 30m</p></div>
        </div>
        <div ><h1 className="text-[10px] sm:text-[15px] lg:text-[25px]">Upcoming Holidays</h1>
          <div className='text-[17px]'>May 1 - Labor Day</div>
          <div className='text-[17px]'>July 4 - Independance Day</div>
          <div className='text-[17px]'>September 5 - Teacher's Day</div>
        </div>
        <div><h1 className="text-[10px] sm:text-[15px] lg:text-[25px] font-poppins ">Announcement</h1>
          <p className='text-[19px]'>Don't forget to submit your timesheets before end of day</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
