import React, { FC, useEffect, useState } from "react"
import "./index.scss"
import { View, SwiperItem, Swiper } from "@tarojs/components"
import { useReady } from "@tarojs/taro"
import CourseTable from "@components/courseTable"
import { useCourseArr } from "@hooks/useCourseArr"
import NavBar from "../navBar/NavBar"
// NavBar
// Swiper
const Main: FC<unknown> = props => {
	
	return (
		<View id="courseMain">
			<NavBar needBackIcon={true} mainTitle={'需求详情2'}></NavBar>
			
		</View>
	)
}

export default React.memo(Main)
