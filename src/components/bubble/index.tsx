import { $ } from "@tarojs/extend"
import React, { FC, useState } from "react"
import "./index.scss"
import { View } from "@tarojs/components"
import { useReady } from "@tarojs/taro"
const Bubble: FC<BubbleType> = (props) => {
	
	return (
		<View id="bubble">
			
		</View>
	)
}
interface BubbleType{
	data: any[],
}
export default React.memo(Bubble)
