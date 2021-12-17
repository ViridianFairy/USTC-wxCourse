import React, { FC, useEffect, useState } from "react"
import "./index.scss"
import { View, Swiper, SwiperItem } from "@tarojs/components"
import { useReady } from "@tarojs/taro"
import CourseTable from "@components/courseTable"
import { useCourseArr } from "@hooks/useCourseArr"

const Course: FC<unknown> = props => {
	const { CourseArr } = useCourseArr()
  const [shortCourseArr, setShortCourseArr] = useState([])
	// console.log(CourseArr);

	useReady(() => {})
	return (
		<View id="courseMain">
			<View id="course-bg"></View>
      <Swiper
        className='course-wrapper'
        current ={0}
        >
				{CourseArr.map(({ drawCourseArr, dayArr, month }, index) => {
					if (index >= 3) return
					// console.log(1)
					return (
            <SwiperItem>
						<View className="course-wrapper">
							<CourseTable dayArr={dayArr} month={month} drawCourseArr={drawCourseArr}></CourseTable>
						</View>
            </SwiperItem>
					)
				})}
      </Swiper>
			
		</View>
	)
}

export default React.memo(Course)
