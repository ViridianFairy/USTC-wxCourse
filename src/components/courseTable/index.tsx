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
	const getCourseStyle = (length: number, id: number, isPause: boolean) => {
		const [backgroundColor, color] = !isPause ? style.getColor(2, id) : style.getPauseColor()
		return {
			zIndex: 1,
			left: style.widthNarrow / 2 + "px",
			top: style.heightNarrow / 2 + "px",
			height: size.y * length - style.heightNarrow + "px",
			width: size.x - style.widthNarrow + "px",
			backgroundColor,
			color,
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
										<View className="course" style={getCourseStyle(val.length, val.data.id, val.isPause)}>
											<View className="p">{val.isPause && '[非本周]'}{val.data.fullName}</View>
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
