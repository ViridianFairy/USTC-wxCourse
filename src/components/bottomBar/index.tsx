import React, { FC, useState } from "react"
import "./index.scss"
import { View,Image} from "@tarojs/components"
import ICON_COURSE from "@src/assets/images/course.png";
import ICON_MAIN from "@src/assets/images/main.png";
import ICON_MINE from "@src/assets/images/mine.png";
import { useReady } from "@tarojs/taro"
const BottomBar: FC<CourseComponentType> = props => {
	
	
	return (
		<View id="bottomBar">
			<View className="item">
				<Image src={ICON_MAIN}></Image>
				<View className="p">首页</View>
			</View>
			<View className="item">
				<Image src={ICON_COURSE}></Image>
				<View className="p">课程表</View>
			</View>
			<View className="item">
				<Image src={ICON_MINE}></Image>
				<View className="p">我的</View>
			</View>
		</View>
	)
}

export default React.memo(BottomBar)
