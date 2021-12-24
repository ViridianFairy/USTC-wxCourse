import React, { FC, useEffect, useState } from "react"
import "./index.scss"
import { View, SwiperItem, Swiper } from "@tarojs/components"
import { useReady } from "@tarojs/taro"
import CourseTable from "@components/courseTable"
import { useCourseArr } from "@hooks/useCourseArr"
import NavBar from "../navBar/NavBar"
import TabBar from "../tabBar/tabBar"
// Swiper
const Course: FC<unknown> = props => {
	const { CourseArr, initialWeek } = useCourseArr()
	const [shortCourseArr, setShortCourseArr] = useState<(CourseComponentType | null)[]>([])
	const [courseBlockWidth, setCourseBlockWidth] = useState<number>(0)
	const [courseBlockHeight, setCourseBlockHeight] = useState<number>(0)
	// const [initialId, setInitialId] = useState<number>(0)

	/**
	 * 对真实渲染的子数组 进行初始化操作
	 */
	useEffect(() => {
		if (!initialWeek) return
		handleShortCourseArr(true, initialWeek)
	}, [CourseArr])

	useEffect(() => {
		// console.log(shortCourseArr)
	}, [shortCourseArr])

	const handleShortCourseArr = (isInit: boolean, begin: number) => {
		console.log(begin)

		var len = CourseArr.length
		var arr: (CourseComponentType | null)[] = []
		if (len === 0) return
		// 开始处理
		if (isInit) arr = new Array(len).fill(null)
		else arr = Array.from(shortCourseArr)
		for (let i = -1; i <= 1; i++) {
			// j是真正要设置的下标
			let j = begin + i
			if (j >= CourseArr.length || j < 0) continue
			// if (arr[j]!==null)
			arr[j] = CourseArr[j]
		}
		setShortCourseArr(arr)
	}

	return (
		<>
		<NavBar needBackIcon={true} mainTitle={'需求详情'}></NavBar>
		<View id="courseMain" onTouchMove={() => {}}>
			 
			<View id="course-bg"></View>
			{
				<Swiper className="course-wrapper" current={initialWeek} onChange={onChange} skipHiddenItemLayout={true}>
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
										setCourseBlockWidth={num => setCourseBlockWidth(num)}></CourseTable>
									<View className="loading"></View>
								</View>
							</SwiperItem>
						)
					})}
				</Swiper>
			}
			{/* <Swiper className="course-wrapper" current={initialWeek} onChange={onChange}>
				{shortCourseArr.map(({ drawCourseArr, dayArr, month }, index) => {
					return (
						<SwiperItem>
							{!month ? <View>no</View> :<View className="course-wrapper">
								<CourseTable dayArr={dayArr}
									month={month}
									drawCourseArr={drawCourseArr}></CourseTable>
									{console.log('yes')}
							</View>}
						</SwiperItem>
					)
			
				})}
				<SwiperItem>123</SwiperItem>
			</Swiper> */}
		</View>
		
		{/* <TabBar></TabBar> */}
		</>
	)
	function onChange(e: any) {
		var cur = e.detail.current
		handleShortCourseArr(false, cur)
	}
}

export default React.memo(Course)

{
	/* <Swiper>
{DrawCourseTable(0)}
{DrawCourseTable(0)}
{DrawCourseTable(0)}
</Swiper> */
}
