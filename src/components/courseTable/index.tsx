import { $ } from "@tarojs/extend"
import React, { FC, useCallback, useEffect, useState } from "react"
import "./index.scss"
import { WEEK } from "@constant/course"
import { style } from "@constant/style"
import { View } from "@tarojs/components"
import { useDidShow, useReady } from "@tarojs/taro"
import { getGlobalData, setGlobalData } from "@src/utils"
import { AtButton } from "taro-ui"

const CourseTable: FC<CourseComponentType> = props => {
	const { drawCourseArr, dayArr, month, status } = props
	const { setCourseBlockHeight, setCourseBlockWidth } = props
	const { courseBlockHeight, courseBlockWidth } = props
	const [finish, setFinish] = useState<1 | 0>(status)
	const [touchStart, setTouchStart] = useState<{x:number, y:number}>({x:0,y:0})
	const updateBlock = async () => {
		try {
			console.log('获取dom块高度...');
			let dom = $(".block2")
			let y = await dom.height()
			let x = await dom.width()
			y = (y/2).toFixed(0)
			x = (x).toFixed(0)
			setCourseBlockHeight(y)
			setCourseBlockWidth(x)
			setFinish(1)
		} catch (error) {
			console.log(error)
			console.log('延迟重新计算块高')
			setTimeout(() => {
				updateBlock()
			}, 200)
		}
	}
	// useEffect(()=>{
	// 	if(courseBlockWidth!==0){
	// 		let y = courseBlockHeight
	// 		let x = courseBlockWidth
	// 		setSize({ x, y })
	// 	}
	// })
	useReady(() => {
		if(courseBlockHeight !=0 ) return
		updateBlock()
	})
	const onTouchStart = (event)=>{
		if(!event.changedTouches) return
		const {clientX, clientY} = event.changedTouches[0]
		setTouchStart({x:clientX, y:clientY})
	}
	const onTouchEnd = (event, val)=>{
		if(!event.changedTouches) return
		const {clientX, clientY} = event.changedTouches[0]
		var deltaX = clientX - touchStart.x
		var deltaY= clientY - touchStart.y
		console.log(deltaX);
		
		if(!(deltaX < 20 && deltaX > -20 && deltaY <20 && deltaY > -20)) return;
		console.log(val);
		
		
	}
	const onClick = (val:DrawCourseType)=>{
		if(typeof val =='string') return
		console.log(val)
		wx.vibrateShort()
		const {
			times,
			fullName,
			shortName,
			courseType,
			courseId,
			teacher
		} = val.data
		var a = fullName
		
	}
	const getCourseStyle = useCallback((length: number, id: number, isPause: boolean) => {
		const [backgroundColor, color] = !isPause ? style.getColor(2, id) : style.getPauseColor()
		return {
			zIndex: 1,
			left: style.widthNarrow / 2 + "px",
			top: style.heightNarrow / 2 + "px",
			height: courseBlockHeight * length - style.heightNarrow + "px",
			width: courseBlockWidth - style.widthNarrow + "px",
			background: backgroundColor,
			color,
		}
	},[courseBlockHeight, courseBlockWidth])
	// style={{'display':status==0?'none':''}}
	return (
		<View className="courseTable">
			{console.log('发生重绘')}
			{/* {console.log(status)} */}
			<View className="header">
				{WEEK.map((text, index) => {
					var day = dayArr[index - 1]
					//天数
					return (
						<View className="div" key={`${month}${day}0`}>
							{index == 0 ? (
								<View className="month">
									<View className="p">{month}</View>
									<View className="p">月</View>
								</View>
							) : (
								<View
									className={`day ${month == getGlobalData("nowMonth") &&
										day == getGlobalData("nowDay") &&
										"sky blue"}`}>
									{/* {console.log(getGlobalData('nowMonth'),getGlobalData('nowDay'))} */}
									<View className="p">{text}</View>
									<View className="p">{day}</View>
								</View>
							)}
						</View>
					)
				})}
			</View>

			<View className="main">
				{drawCourseArr.map((col, type) => {
					var day = type > 0 ? dayArr[type - 1] : dayArr[0] + 50
					// day是用作key的
					return (type == 0 ? (
						// type是列（星期）索引
						<View className="section" key={`${month}${day}`}>
							{col.map((val, index) => (
								// index是一天内的课程索引
								<View className="block" id="block" key={`b${month}-${day}-${index+1}`}>
									{/* {console.log(`左侧时间：`+`b${month}-${day}-${index+1}`)} */}
									<View className="p">{index + 1}</View>
									{/* <View className="p">{val}</View> */}
									<View className="p">{}</View>
								</View>
							))}
						</View>
					) : (
						<View className="section" key={`${month}${day}`}>
							{col.map((val, index) => (
								index%2==0 && 
								<View className="block block2" key={`b${month}-${day}-${index+1}`} >
									{/* {console.log(`b${month}-${day}-${index+1}`)} */}
									<View className="p">0</View>
									<View className="p">0</View>
									{val && 
										typeof val != "string" &&
										(finish ? (
											<View
												className="course"
												style={getCourseStyle(val.length, val.data.id, val.isPause)}
												onTouchStart={(event)=>onTouchStart(event, val)}
												onTouchEnd={(event)=>onTouchEnd(event, val)}
												>
												<View className="p">
													{val.isPause && "[非本周]"}
													{val.data.fullName}
												</View>
												<View className="p">{val.data.times[val.index].place}</View>
											</View>
										) : (
											<View className="course" style={{}}>
												<View className="loading"></View>
											</View>
										))}
								</View>
							))}
						</View>
					))
					}
				)}
			</View>
		</View>
	)
}

export default React.memo(CourseTable)
