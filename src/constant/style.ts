export const style = {
	/**
	 *
	 * @param arrId 使用的色盘ID
	 * @param colorId 色盘的背景颜色ID，一般以课程ID区分即可
	 * @returns 背景颜色和文字颜色
	 */
	getColor: (arrId: number, colorId: number): [string, string] => {
		arrId = arrId % colorArr.length
		var colorObj = colorArr[arrId]
		colorId = colorId % colorObj.bg.length
		return [colorObj.bg[colorId], colorObj.font]
	},
	/**
	 * 课程色块的内缩（单位：像素）
	 */
	widthNarrow: 2,
	heightNarrow: 2,
	
	/**
	 * 非本周的课程颜色
	 * @returns 背景颜色，字体颜色
	 */
	getPauseColor:(): [string, string]=>{
		return ["#F1F1F1AD","#CFCFCF"]
	}
}
const colorArr: ColorType[] = [
	{
		font: "#ffffff",
		bg: ["#F1A86D", "#264653", "#2a9d8f", "#e76f51"],
	},

	{
		font: "#ffffff",
		bg: ["#212B23", "#597753", "#C9B36D", "#532A26", "#6D5D38"],
	},
	{
		font: "#ffffff",
		bg: ["#CEA894", "#E7A493", "#C58284", "#b5838d", "#6d6875"],
	},
	{
		font: "#ffffff",
		bg: ["#295374", "#2a3e79", "#2e2a7e", "#492b82", "#662b87"],
	},
]
interface ColorType {
	font: string
	bg: string[]
}
