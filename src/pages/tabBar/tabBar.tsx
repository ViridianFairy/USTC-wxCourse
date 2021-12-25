import React, { FC, useState } from "react"
import "./index.scss"
import { View, Image } from "@tarojs/components"
import ICON_COURSE from "@src/assets/images/course.png"
import ICON_MAIN from "@src/assets/images/main.png"
import ICON_MINE from "@src/assets/images/user.png"
import { useReady } from "@tarojs/taro"
const TabBar: FC<unknown> = props => {
	return (
		<View id="tab-bar-wrapper">
		<View id="tab-bar">
			{/* <View className="blocker"></View> */}
			<View className="wrapper">
				<View className="item">
					<Image src={ICON_MAIN} className="icon"></Image>
					<View className="p">首页</View>
				</View>
				<View className="item">
					<Image src={ICON_COURSE} className="icon"></Image>
					<View className="p">课程表</View>
				</View>
				<View className="item">
					<Image src={ICON_MINE} className="icon"></Image>
					<View className="p">我的</View>
				</View>
			</View>
		</View>
		</View>
	)
}

export default React.memo(TabBar)
