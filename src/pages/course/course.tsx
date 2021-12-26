import React, { FC, useEffect, useMemo, useState } from "react"
import "./index.scss"
import { View, SwiperItem, Swiper } from "@tarojs/components"
import Taro, { useReady } from "@tarojs/taro"
import CourseTable from "@components/courseTable"
import { useCourseArr } from "@hooks/useCourseArr"
import NavBar from "../navBar/NavBar"
import TabBar from "../tabBar/TabBar"

/* 左右各多加载一个 */
const PRE_LOAD = 2;
const Course: FC<unknown> = props => {
	const { CourseArr, initialWeek } = useCourseArr()
	const [shortCourseArr, setShortCourseArr] = useState<(CourseComponentType | null)[]>([])
	const [courseBlockWidth, setCourseBlockWidth] = useState<number>(0)
	const [courseBlockHeight, setCourseBlockHeight] = useState<number>(0)
	const [weekNum, setWeekNum] = useState<number>(initialWeek)
	// const [initialId, setInitialId] = useState<number>(0)

	/**
	 * 对真实渲染的子数组 进行初始化操作
	 */
	useEffect(() => {
		if (!initialWeek) return
		handleShortCourseArr(true, initialWeek)
	}, [CourseArr])
	useEffect(()=>{
		console.log(shortCourseArr);
		  //
		console.log(shortCourseArr[14]);
		
	},[shortCourseArr])

	const handleShortCourseArr = (isInit: boolean, begin: number) => {
		// console.log(begin)

		var len = CourseArr.length
		var arr: (CourseComponentType | null)[] = []
		if (len === 0) return
		// 开始处理
		if (isInit) arr = new Array(len).fill(null)
		else arr = Array.from(shortCourseArr)
		for (let i = -PRE_LOAD; i <= PRE_LOAD; i++) {
			// j是真正要设置的下标
			let j = begin + i
			if (j >= CourseArr.length || j < 0) continue
			// if (arr[j]!==null)
			arr[j] = CourseArr[j]
		}
		setShortCourseArr(arr)
	}
	const getWeekText = ()=>{
		var str = `第${weekNum+1}周`
		if(weekNum == initialWeek) return str
		return str + '（非本周）'
	}
	return (
		<View id="main">
		<NavBar bubble={{icon:'help',text:
		'左右滑动：切换周数\n点击课程：查看课程信息'}} 
		mainTitle={getWeekText()}></NavBar>
		<View id="courseMain" onTouchMove={() => {}}>
			 
			{/* <View id="course-bg"></View> */}
			{
				// skipHiddenItemLayout={true}
				<Swiper className="course-wrapper" current={initialWeek} onChange={onChange} >
					{shortCourseArr.map((props, index) => {
						if (props === null) {
							return (
								<SwiperItem style={{}}>
									<View className="course-wrapper">
										<View className="bigLoading-wrapper">
											<View className="loading bigLoading"></View>
										</View>
									</View>
								</SwiperItem>
							)
						}
						const { drawCourseArr, dayArr, month } = props
						return (
							<SwiperItem style={{}}>
								<View className="course-wrapper">
									<CourseTable
										
										dayArr={dayArr}
										month={month}
										drawCourseArr={drawCourseArr}
										status={initialWeek == index ? 0 : 1}
										courseBlockWidth={courseBlockWidth}
										courseBlockHeight={courseBlockHeight}
										setCourseBlockHeight={num => setCourseBlockHeight(num)}
										setCourseBlockWidth={num => setCourseBlockWidth(num)}/>
									<View className="loading"></View>
								</View>
							</SwiperItem>
						)
					})}
				</Swiper>
			}
		</View>
		<TabBar press={1}></TabBar>
		
		</View>
	)
	function onChange(e: any) {
		var cur = e.detail.current
		wx.vibrateShort();
		setWeekNum(cur)
		handleShortCourseArr(false, cur)
	}
}

export default React.memo(Course)
