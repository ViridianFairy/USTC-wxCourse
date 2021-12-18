export const COURSE: CourseType[] = [{
    id:0,
    fullName:'算法设计与分析',
    shortName:'算导',
    times:[
        {
            week:[2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
            time: 5,
            period:[5,6],
            place:'明德楼210',
            
        },
        {
            week:[11,12,13,14,15],
            time: 7,
            period:[1,2],
            place:'思贤楼410',
        }
    ],
    exams:[
        {
            name:'第一次随堂小测',
            week:14,
            period:'14:00-16:30',
            place:'明德楼210'
        },
        {
            name:'期末考试',
            week:19,
            period:'14:00-16:30',
            place:'宿舍'
        }
    ],
    courseType: '限选课（八强）',
    courseId: 'EIEN6004P',
    learnHours:40,
    learnScore:2,
    teacher:'张曙',
    college:'软件学院苏州',
},{
    id:1,
    fullName:'高级软件工程',
    shortName:'高软',
    times:[
        {
            week:[2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
            time: 2,
            period:[5,6],
            place:'明德楼210',
        },
    ],
    exams:[
    ],
    courseType: '限选课（八强）',
    courseId: 'EIEN6004P',
    learnHours:40,
    learnScore:2,
    teacher:'张曙',
    college:'软件学院苏州',
},
// {
//     id:2,
//     fullName:'信息安全实践',
//     shortName:'信安',
//     times:[
//         {
//             week:[2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
//             time: 3,
//             period:[1,2],
//             place:'明德楼210',
//         },
//         {
//             week:[2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
//             time: 7,
//             period:[9,10],
//             place:'思贤楼308',
//         },
//     ],
//     exams:[
//     ],
//     courseType: '限选课（八强）',
//     courseId: 'EIEN6004P',
//     learnHours:40,
//     learnScore:2,
//     teacher:'张曙',
//     college:'软件学院苏州',
// },
{
    id:2,
    fullName:'信息安全实践',
    shortName:'信安',
    times:[
        {
            week:[2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
            time: 3,
            period:[1,2],
            place:'明德楼210',
        },
        {
            week:[2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
            time: 7,
            period:[9,10],
            place:'思贤楼308',
        },
    ],
    exams:[
    ],
    courseType: '限选课（八强）',
    courseId: 'EIEN6004P',
    learnHours:40,
    learnScore:2,
    teacher:'张曙',
    college:'软件学院苏州',
},
{
    id:3,
    fullName:'工程伦理',
    shortName:'工程伦理',
    times:[
        {
            week:[13,14,15,16,17],
            time: 4,
            period:[5,6],
            place:'敏学楼101',
        },
        {
            week:[13,14,15,16,17],
            time: 5,
            period:[1,2],
            place:'敏学楼101',
        },
    ],
    exams:[
    ],
    courseType: '限选课（八强）',
    courseId: 'EIEN6004P',
    learnHours:40,
    learnScore:2,
    teacher:'张曙',
    college:'软件学院苏州',
},
{
    id:4,
    fullName:'工程化C程序设计',
    shortName:'工程化C',
    times:[
        {
            week:[12,13,14,15,16,17,18,19],
            time: 6,
            period:[1,2,3,4],
            place:'敏学楼101',
        },
        {
            week:[13,14,15,16,17],
            time: 5,
            period:[3,4],
            place:'敏学楼101',
        },
    ],
    exams:[
    ],
    courseType: '限选课（八强）',
    courseId: 'EIEN6004P',
    learnHours:40,
    learnScore:2,
    teacher:'张曙',
    college:'软件学院苏州',
},
{
    id:5,
    fullName:'英雄联盟基础',
    shortName:'英雄联盟',
    times:[
        {
            week:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
            time: 1,
            period:[1,2,3,4],
            place:'敏学楼101',
        },
        {
            week:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
            time: 2,
            period:[7,8],
            place:'敏学楼101',
        },
    ],
    exams:[
    ],
    courseType: 'a',
    courseId: 'a',
    learnHours:0,
    learnScore:0,
    teacher:'a',
    college:'a',
},
{
    id:6,
    fullName:'王者荣耀补刀',
    shortName:'王者荣耀',
    times:[
        {
            week:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
            time: 1,
            period:[5,6],
            place:'敏学楼101',
        },
        {
            week:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
            time: 3,
            period:[5,6],
            place:'敏学楼101',
        },
    ],
    exams:[
    ],
    courseType: 'a',
    courseId: 'a',
    learnHours:0,
    learnScore:0,
    teacher:'a',
    college:'a',
},
{
    id:7,
    fullName:'开黑沟通实践',
    shortName:'开黑',
    times:[
        {
            week:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
            time: 3,
            period:[5,6,7,8],
            place:'敏学楼101',
        },
        {
            week:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
            time: 4,
            period:[1,2],
            place:'敏学楼101',
        },
    ],
    exams:[
    ],
    courseType: 'a',
    courseId: 'a',
    learnHours:0,
    learnScore:0,
    teacher:'a',
    college:'a',
},
{
    id:8,
    fullName:'CSGO压枪入门',
    shortName:'CSGO',
    times:[
        {
            week:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
            time: 5,
            period:[7,8,9,10],
            place:'敏学楼101',
        },
        {
            week:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
            time: 2,
            period:[3,4],
            place:'敏学楼101',
        },
    ],
    exams:[
    ],
    courseType: 'a',
    courseId: 'a',
    learnHours:0,
    learnScore:0,
    teacher:'a',
    college:'a',
},
{
    id:9,
    fullName:'高级计时反野',
    shortName:'反野',
    times:[
        {
            week:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
            time: 6,
            period:[5,6],
            place:'敏学楼101',
        },
    ],
    exams:[
    ],
    courseType: 'a',
    courseId: 'a',
    learnHours:0,
    learnScore:0,
    teacher:'a',
    college:'a',
},
]
