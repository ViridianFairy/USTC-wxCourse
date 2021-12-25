import { $ } from "@tarojs/extend"
import React, { FC, useEffect, useState } from "react"
import "./index.scss"
import { WEEK } from "@constant/course"
import { style } from "@constant/style"
import { View } from "@tarojs/components"
import { useDidShow, useReady } from "@tarojs/taro"
import { getGlobalData, setGlobalData } from "@src/utils"
import { AtButton } from 'taro-ui'

const CourseTable: FC<CourseComponentType> = props => {
	
	const { drawCourseArr, dayArr, month, status } = props
	const {setCourseBlockHeight, setCourseBlockWidth} = props
	const {courseBlockHeight, courseBlockWidth} = props
	const [finish, setFinish] = useState<(1 | 0)>(status)
	const [size, setSize] = useState<{ x: number; y: number }>({ x: courseBlockWidth, y: courseBlockHeight })
	const updateBlock = async () => {
		try {
			let dom = $(".block2")
			let y = await dom.height()
			let x = await dom.width()
			setCourseBlockHeight(y)
			setCourseBlockWidth(x)
			setSize({ x, y })
			setFinish(1)
		} catch (error) {
			console.log(error);
			setTimeout(()=>{
				updateBlock()
			},100)
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
		console.log('useReady');
		updateBlock()
	})
	const getCourseStyle = (length: number, id: number, isPause: boolean) => {
		const [backgroundColor, color] = !isPause ? style.getColor(2, id) : style.getPauseColor()
		return {
			zIndex: 1,
			left: style.widthNarrow / 2 + "px",
			top: style.heightNarrow / 2 + "px",
			height: size.y * length - style.heightNarrow + "px",
			width: size.x - style.widthNarrow + "px",
			background:backgroundColor,
			color,
		}
	}
	// style={{'display':status==0?'none':''}}
	return (
		
		<View className="courseTable">
			{/* {console.log(status)} */}
			<View className="header">
				{WEEK.map((text, key) => (
					<View className="div" key={key}>
						{key == 0 ? 
            <View className="month">
              <View className="p">{month}</View>
              <View className="p">月</View>
            </View>: 
            <View className={`day ${(month==getGlobalData('nowMonth')&&dayArr[key-1]==getGlobalData('nowDay'))&&'blue'}`}>
					{/* {console.log(getGlobalData('nowMonth'),getGlobalData('nowDay'))} */}
              <View className="p">{text}</View>
              <View className="p">{dayArr[key-1]}</View>
              
            </View>
            }
					</View>
				))}
			</View>

			<View className="main">
				{drawCourseArr.map((col, type) =>
					type == 0 ? (
						// type是列（星期）索引
						<View className="section" key={''+month+dayArr[type]}>
							{col.map((val, index) => (
								// index是一天内的课程索引
								<View className="block" id="block" key={''+month+dayArr[type]+index}>
									<View className="p">{index + 1}</View>
									{/* <View className="p">{val}</View> */}
									<View className="p">{}</View>
								</View>
							))}
						</View>
					) : (
						<View className="section" key={''+month+dayArr[type]}>
							{col.map((val, index) => (
								<View className="block block2" key={dayArr[type]+''+index}>
									<View className="p">0</View>
									<View className="p">0</View>
									{val && typeof val != "string" && (
										finish?<View className="course" style={getCourseStyle(val.length, val.data.id, val.isPause)}>
											<View className="p">{val.isPause && '[非本周]'}{val.data.fullName}</View>
											<View className="p">{val.data.times[val.index].place}</View>
										</View>:<View className="course" style={{}}>
										<View className="loading"></View>
										</View>
									)}
								</View>
							))}
						</View>
					)
				)}
			</View>
		</View>
	)
}

export default React.memo(CourseTable)
