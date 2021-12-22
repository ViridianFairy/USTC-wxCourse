import React, { FC, useEffect, useState } from "react"
import "./index.scss"
import { View, SwiperItem, Swiper } from "@tarojs/components"
import { useReady } from "@tarojs/taro"
import CourseTable from "@components/courseTable"
import { useCourseArr } from "@hooks/useCourseArr"
// Swiper
const Main: FC<unknown> = props => {
	
	return (
		<View id="courseMain">
			
		</View>
	)
}

export default React.memo(Main)
