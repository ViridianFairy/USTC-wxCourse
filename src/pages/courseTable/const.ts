export const WEEK = ["零", "一", "二", "三", "四", "五", "六", "日"];
const MOMENT = [
  "08:20", //
  "09:20",
  "10:20", //
  "11:10",
  "14:00", //
  "15:00",
  "16:00", //
  "17:00",
  "19:00", //
  "20:40"
];
export const COURSE: (DrawCourseType | string)[][] = new Array(
  WEEK.length
)
  .fill(null)
  .map(() => new Array(MOMENT.length).fill(''));
COURSE[0] = MOMENT;
export const filterCouse = (arr: any, course: CourseType[]) => {
  for (const c of course) {
    for (let index in c.times) {
      const { time, period } = c.times[index];
      let start: number = (period[0] as number) - 1;
      COURSE[time][start] = {
        length: period.length,
        index: Number(index),
        data: c
      };
    }
  }
};
export const term: TermType[] = [
  { beginDay: "2021-9-20", endDay: "2022-1-23", name: "2021上学期" }
];
export const getTerm = (term:TermType) => {
    term                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
};
export const style = {
  gap: 2,
  color: ["#f4a261", "#264653", "#2a9d8f", "#e76f51"]
};
