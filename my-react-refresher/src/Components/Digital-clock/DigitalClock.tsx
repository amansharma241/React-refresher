import { useEffect, useState } from 'react'

const DigitalClock = () => {
  const [time,setTime] = useState(new Date().toLocaleTimeString())

  useEffect(()=>{
    const timer = setInterval(()=>{
        setTime(new Date().toLocaleTimeString())
    },1000)

    return ()=> clearInterval(timer)
  },[])
  return (
    <>
    <div>DigitalClock</div>
    <h1>{time}</h1>
    </>
    

  )
}

export default DigitalClock