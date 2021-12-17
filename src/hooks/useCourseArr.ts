import { useEffect, useState } from "react"
import { MOMENT, WEEK } from "@constant/course"
import { COURSE } from "@constant/courseInfo"
import { TERM } from "@constant/term"
import { useDate } from "./useDate"

export const useCourseArr = () => {
	const [CourseArr, setCourseArr] = useState<CourseComponentType[]>([])
	const {date, addDay, getDateInterval, setDate} = useDate(TERM[0].beginDay)
	useEffect(() => {
		var syncCourseArr: CourseComponentType[] = []
		TERM.forEach(({ beginDay, endDay, name }, index) => {
			
			if (index >= 1) return
			var weekSum = getDateInterval(beginDay, endDay) / 7
			for (let i = 0; i < weekSum; i++) {
				//开始处理一周内的，也就是一页课程
				let dayArr: number[] = []
				let drawCourseArr: DrawCourseType[][] = new Array(WEEK.length)
					.fill("")
					.map(() => new Array(MOMENT.length).fill(""))
				let obj = {
					month: date.month,
					dayArr,
					drawCourseArr,
				}
				for (let k = 0; k < 7; k++, addDay()) {
					dayArr.push(date.day)
				}
				drawCourseArr[0] = MOMENT
				for (const c of COURSE) {
					// c是一门课程的详细信息
					for (let index in c.times) {
						const { time, period } = c.times[index]
						let start: number = (period[0] as number) - 1
						drawCourseArr[time][start] = {
							length: period.length,
							index: Number(index),
							data: c,
						}
					}
				}
				syncCourseArr.push(obj)
				// console.log(obj);
				//结束处理一周内的
			}
		})
		// console.log(CourseArr);
		setCourseArr(syncCourseArr)
	}, [])
	return {
		CourseArr,
		setCourseArr,
	}
}