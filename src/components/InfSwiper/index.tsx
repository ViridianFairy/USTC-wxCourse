import { $ } from "@tarojs/extend"
import React, { FC, useState } from "react"
import "./index.scss"
import { View } from "@tarojs/components"
import { useReady } from "@tarojs/taro"
const InfSwiper: FC<InfSwiperType> = ({children,data}) => {
	
	return (
		<View className="swiper-wrapper">
			{children}
		</View>
	)
}
interface InfSwiperType{
	data: any[],
}
export default React.memo(InfSwiper)
