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
		font: "#eeeeee",
		bg: [
		"linear-gradient(90deg,#689AD899, #4C8AD6cc)", 
		"linear-gradient(90deg,#6065DD99, #5155DDcc)", 
		"linear-gradient(90deg,#53CFD199, #31CFD3cc)", 
		"linear-gradient(90deg,#979CFE99, #979CFEcc)", 
		"linear-gradient(90deg,#B492EA99, #B492EAcc)",
		"linear-gradient(90deg,#73A9EC99, #5397EBcc)", 
		"linear-gradient(90deg,#6F98E699, #4C8AD6DE)", 
	],
	},
	{
		font: "#eeeeee",
		bg: ["#295374", "#2a3e79", "#2e2a7e", "#492b82", "#662b87"],
	},
]
interface ColorType {
	font: string
	bg: string[]
}
// bg: [
// 	"linear-gradient(90deg,#77B0F5, #569DF5)", 
// 	"#E7A493", #5155DD
// 	"#C58284", 
// 	"#b5838d", 
// 	"#6d6875"