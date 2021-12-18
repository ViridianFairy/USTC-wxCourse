import { useCallback, useEffect, useState } from "react"
const MONTH = [0, 31, 28, 31, 30 ,31, 30, 31 ,31,30,31,30,31]
export const useDate = (initalStr?: string) => {
	const [date, _setDate] = useState<DateType>(BUILD(initalStr))
   const addDay = ()=>{
      date.day++
      if(date.day > MONTH[date.month]){
         date.day = 1;
         date.month ++;
         if(date.month > 12){
            date.month = 1;
            date.year++;
         }
      }
   }
   const getDateInterval = useCallback((str1: string, str2: string): number=>{
      const stTime = Date.parse(new Date(str1).toString())
      const etTime = Date.parse(new Date(str2).toString())
      const usedTime = etTime - stTime
      const days = Math.floor(usedTime / (24 * 3600 * 1000))
      return days
   },[])
   const setDate = useCallback((str)=>{
      _setDate(BUILD(str))
   },[])
	return {
		date, addDay, getDateInterval, setDate
	}
}
const BUILD = (str):DateType=>{
   
   
   var obj = {
      year:0,
      month:0,
      day:0
   }
   if(typeof str == 'undefined') return obj
   str.split('-').forEach((val, index)=>{
      if(index == 0) obj['year'] = parseInt(val)
      if(index == 1) obj['month'] = parseInt(val)
      if(index == 2) obj['day'] = parseInt(val)
   })
   return obj
}
interface DateType{
   year: number,
   month: number,
   day: number
}

