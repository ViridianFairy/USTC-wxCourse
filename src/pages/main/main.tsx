import React, { FC, useEffect, useState } from "react"
import "./index.scss"
import { View, SwiperItem, Swiper, Image, Text } from "@tarojs/components"
import { useReady } from "@tarojs/taro"
import TabBar from "../tabBar/TabBar"
// import Avatar_Boy from '@src/assets/images/avatar_boy.png'
import NavBar from "../navBar/NavBar"
import { AtButton, AtFab, AtFloatButton, AtForm, AtSwitch } from "taro-ui"
const UserInfo: UserInfoType = {
	name: "娜娜米",
	college: "软件学院",
	major: "电子信息",
	studentId: "SA21225593",
}
const Main: FC<unknown> = props => {
	const { name, college, major, studentId } = UserInfo
	const [on1, setOn1] = useState(true)
	const handleChangeOn1 = () => {}
	return (
		<View id="main">
			<NavBar mainTitle="个人信息"></NavBar>
			<View id="user">
				<View id="info" className="container">
					<View className="p">{name}</View>
					<View className="p">中国科学技术大学</View>
					<View className="p">
						{college} {major}
					</View>
					<View className="p">{studentId}</View>
					{/* <Image src={Avatar_Boy} className="icon"/> */}
				</View>
				<View id="settings">
				<View className="title title2">帮助我们</View>
				<View className="p">
					基于React Hooks + ts + Taro的开源项目
				</View>
				<View className="p">
					帮助我们更正课表信息或完善项目
				</View>
				<View className="orange sky">
					前往GitHub
				</View>
			</View>
			</View>

			<TabBar press={0}></TabBar>
		</View>
	)
}

export default React.memo(Main)
interface UserInfoType {
	name: string
	college: string
	major: string
	studentId: string
}

