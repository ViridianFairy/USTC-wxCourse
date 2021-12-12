export const WEEK = ["零","一","二","三","四","五","六","日"]
const MOMENT = [
    '08:20', //
    '09:20',
    '10:20', //
    '11:10',
    '14:00', //
    '15:00',
    '16:00', //
    '17:00', 
    '19:00', //
    '20:40',
]
export const COURSE:(drawCourseType|null|string)[][] = new Array(WEEK.length).fill(null).map(()=>new Array(MOMENT.length).fill(null))
COURSE[0] = MOMENT
export const filterCouse = (arr: any, course: CourseType[])=>{
    for(const c of course){
        for(const {week, time, period,place} of c.times){
            let start: number = period[0] as number - 1
            COURSE[time][start] = {
                length: period.length,
                place,
                shortName:c.shortName,
                fullName:c.fullName,
                teacher:c.teacher,
                id:c.id,
            }
        }
    }
}
export const style = {
    gap: 2,
    color:[
        '#f4a261',
        '#264653',
        '#2a9d8f',
        '#e76f51',
    ]
}