import React, { useState, useEffect, useRef } from "react"

import "./index.scss"
import Hammer from "hammerjs"
import { getWindowHeight } from "@src/utils/style"
import { View } from "@tarojs/components"
import { useReady } from "@tarojs/taro"

export const Swiper = ({ children, selectedIndex = 1 }) => {
	// 当切换的时候，改变的就是当前位置状态
	// 所以定义当前位置,可以通过传入的selectedIndex来控制最开始显示第几个轮播图,默认从1开始
	const [active, setActive] = useState(selectedIndex)
	const [status, setStatus] = useState(1)
    const [SCREEN_WIDTH, setSCREEN_WIDTH] = useState<number>(0)
	// 获取包裹容器
	const container = useRef<any>(null)
	// 获取当前可视区容器宽度
	useReady(()=>{
        setSCREEN_WIDTH(getWindowHeight())
    })

	// 统一处理，当active发生变化的时候，我们需要做的就是切换轮播图到某个位置,转场通过控制包裹容器的transform来进行切换，对transform的控制封装成setTransition函数
	useEffect(() => {
		setTransition()
	}, [active])

	const setTransition = (offset = 0) => {
		if (!container || !container.current) return
		//...新增的代码
		function transitionend() {
			// 动画结束后就关闭动画
			container.current.style.transitionProperty = "none"
			// 恢复状态为1静止
			setStatus(1)
			// 当前位置在补位的位置时马上切换到本该在的位置
			if (active === 0) {
				// 使用setTimeout包裹，避免transitionProperty动画未关闭就切换的闪频
				setTimeout(() => {
					setActive(children.length)
				}, 0)
			}
			if (active === children.length + 1) {
				setTimeout(() => {
					setActive(1)
				}, 0)
			}
			container.current.removeEventListener("transitionend", transitionend, false)
		}
		container.current.addEventListener("transitionend", transitionend, false)

		const distance = (1 - active) * SCREEN_WIDTH
		//...修改的代码，新增offset
		container.current.style.transform = `translate3d(${distance + offset}px,0,0)`
	}
	const handleChangeActive = number => {
		// 当在动画进行时，不允许切换
		if (status === 2) return
		// 切换前先把动画参数打开
		container.current.style.transitionProperty = "all"
		// 修改状态为进行时
		setStatus(2)
		// 改变当前位置
		setActive(number)
	}
	// 为了演示是否成功，添加两个按钮来切换
	// 上一页
	const handlePrev = () => {
		// 对临界值进行处理
		handleChangeActive(active === 0 ? children.length : active - 1)
	}

	// 下一页
	const handleNext = () => {
		// 对临界值进行处理
		handleChangeActive(active === children.length + 1 ? 1 : active + 1)
	}

	useEffect(() => {
		const manager = new Hammer(container.current)
		manager.add(new Hammer.Pan())
		manager.on("panend panmove", function(e) {
			// 状态在进行中时，不允许切换
			if (status === 2) return
			// e.eventType 判断当前状态
			// INPUT_MOVE 移动中
			// INPUT_END 结束
			if (e.eventType === Hammer.INPUT_MOVE) {
				// 之前的offset参数的在此起到了作用，在手动滑动的时候并不是直接滑动到下一页，只是跟随手指进行偏移量改变
				setTransition(e.deltaX)
			} else if (e.eventType === Hammer.INPUT_END) {
				// e.direction 判断移动方向
				// Hammer.DIRECTION_LEFT 向左
				// Hammer.DIRECTION_RIGHT 向右
				// 当滑动距离大于1/3时，直接滑动到下一页，否则恢复偏移量
				if (e.direction === Hammer.DIRECTION_LEFT && Math.abs(e.deltaX) > SCREEN_WIDTH / 3) {
					handleNext()
				} else if (e.direction === Hammer.DIRECTION_RIGHT && Math.abs(e.deltaX) > SCREEN_WIDTH / 3) {
					handlePrev()
				} else {
					setTransition(0)
				}
			}
			return () => {
				manager.off("panmove")
				manager.off("panend")
			}
		})
	}, [status, active])

	return (
		<View className="carousel">
			<View ref={container} className="container">
				{React.Children.map(children, (child, index) => {
					return (
						<View style={{ left: index * SCREEN_WIDTH }} className="items">
							{child}
						</View>
					)
				})}
			</View>

		</View>
	)
    
}
			{/* <View>
				<View onClick={handlePrev} className="buttonLeft">
					Left
				</View>
				<View onClick={handleNext} className="buttonRight">
					Right
				</View>
			</View> */}