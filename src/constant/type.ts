/**
 * 描述某项课程完整信息
 */
interface CourseType{
    id:number
    fullName:string,
    shortName:string,
    times:{
        week:number[],
        time:number,
        period:string | number[]
        place:string
    }[],
    exams:{
        name:string,
        week:number,
        period:string | number[]
        place:string
    }[],
    courseType: string,
    courseId: string,
    learnHours: number,
    learnScore: number,
    teacher:string,
    college:string
}
/**
 * 绘制方格时所用的，描述某项课程的信息
 * 方块高度（单位：矩形高）
 * 方块位置（单位：矩形高）
 * 课程数据
 * true时表示非本周课，开启灰色
 */
type DrawCourseType = {
    length: number,
    index: number,
    data: CourseType 
    isPause: boolean 
} | string
/**
 * 描述某学期的信息
 */
interface TermType{
    beginDay: string, //应为星期一
    endDay: string,  //应为星期日
    name: string
}
/**
 * 应当为课程表组件传入的信息
 */
interface CourseComponentType{
    month: number,
    dayArr: number[],
    drawCourseArr: DrawCourseType[][],
    /**
     * 加载状态：0为加载条，1为加载完毕
     */
    status: 0 | 1 
    courseBlockWidth:number,
    setCourseBlockWidth:any,
    courseBlockHeight:number,
    setCourseBlockHeight:any,
}