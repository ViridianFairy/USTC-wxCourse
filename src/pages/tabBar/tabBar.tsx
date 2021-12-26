import React, { FC, useState } from "react"
import "./index.scss"
import { View, Image } from "@tarojs/components"
import ICON_COURSE from "@src/assets/images/course.png"
import ICON_MAIN from "@src/assets/images/main.png"
import ICON_USER from "@src/assets/images/user.png"
import Taro, { useReady } from "@tarojs/taro"
const MEMU:MenuType[] = [
	{text:'首页',id:'main',icon:ICON_MAIN},
	{text:'课程表',id:'course',icon:ICON_COURSE},
	{text:'我的',id:'user',icon:ICON_USER},
]
const TabBar: FC<{press: number}> = ({press}) => {
	const onClick = (url, index)=>{
		Taro.switchTab({
			url
		}
	  )
	}
	return (
		<View id="tab-bar-wrapper">
		<View id="tab-bar">
			{/* <View className="blocker"></View> */}
			<View className="wrapper">
				{MEMU.map(({text, id, icon}, index)=>{
					return <View className="item" onClick={()=>onClick(`../${id}/${id}`, index)}>
					{<Image src={icon} style={{'filter':index!=press?'grayscale(75%)':''}} className="icon"/>}
					<View className="p" style={{'color':index!=press?'#999':''}}>{text}</View>
				</View>
				})}
			</View>
		</View>
		</View>
	)
}

export default React.memo(TabBar)
interface MenuType{
	text: string,
	id: string,
	icon: any
}