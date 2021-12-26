import React, { FC, useEffect, useState } from "react"
import "./index.scss"
import { View, SwiperItem, Swiper } from "@tarojs/components"
import { useReady } from "@tarojs/taro"
import CourseTable from "@components/courseTable"
import { useCourseArr } from "@hooks/useCourseArr"
import NavBar from "../navBar/NavBar"
import TabBar from "../tabBar/TabBar"
const FullLogin: FC<unknown> = props => {
	
	return (
		<View id="main">
			
		</View>
	)
}

export default React.memo(FullLogin)
