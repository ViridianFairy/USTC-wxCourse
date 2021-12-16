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
 */
interface DrawCourseType{
    length: number,
    index: number,
    data: CourseType 
}
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
    COURSE: DrawCourseType | string
}