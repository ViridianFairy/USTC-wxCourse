
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
interface drawCourseType{
        length: number,
        place :string,
        shortName:string,
        fullName:string,
        teacher:string
        id: number
}