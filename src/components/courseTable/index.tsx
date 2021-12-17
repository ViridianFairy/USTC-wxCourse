import { $ } from "@tarojs/extend"
import React, { FC, useState } from "react"
import "./index.scss"
import { WEEK } from "@constant/course"
import { style } from "@constant/style"
import { View } from "@tarojs/components"
import { useReady } from "@tarojs/taro"
const CourseTable: FC<CourseComponentType> = props => {
	const { drawCourseArr, dayArr, month } = props
	const [size, setSize] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
	const updateBlock = async () => {
		let dom = $(".block2")
		let y = await dom.height()
		let x = await dom.width()
		setSize({ x, y })
	}
	useReady(() => {
		updateBlock()
	})
	const getCourseStyle = (length: number, id: number) => {
		return {
			zIndex: 1,
			left: 0,
			top: style.gap / 2 + "px",
			height: size.y * length - style.gap + "px",
			width: size.x + "px",
			backgroundColor: style.color[id],
		}
	}
	return (
		<View className="courseTable">
			<View className="header">
				{WEEK.map((text, key) => (
					<View className="div" key={key}>
						{key == 0 ? 
            <View className="month">
              <View className="p">{month}</View>
              <View className="p">月</View>
            </View>: 
            <View className="day">
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
						<View className="section" key={type}>
							{col.map((val, index) => (
								<View className="block" id="block" key={index}>
									<View className="p">{index + 1}</View>
									{/* <View className="p">{val}</View> */}
									<View className="p">{}</View>
								</View>
							))}
						</View>
					) : (
						<View className="section" key={type}>
							{col.map((val, index) => (
								<View className="block block2" key={index}>
									<View className="p">0</View>
									<View className="p">0</View>
									{val && typeof val != "string" && (
										<View className="course" style={getCourseStyle(val.length, val.data.id)}>
											<View className="p">{val.data.fullName}</View>
											<View className="p">{val.data.times[val.index].place}</View>
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