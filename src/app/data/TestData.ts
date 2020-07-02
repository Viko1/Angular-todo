import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

export class TestData {

    static categories: Category[] = [
        {id: 1, title: 'Work'},
        {id: 2, title: 'Family'},
        {id: 3, title: 'Study'},
        {id: 4, title: 'Relax'},
        {id: 5, title: 'Sport'},
        {id: 6, title: 'Food'},
        {id: 7, title: 'Finance'},
        {id: 8, title: 'Gadgets'},
        {id: 9, title: 'Health'},
        {id: 10, title: 'Car'},
        {id: 11, title: 'Repair'},
    ];


    static priorities: Priority[] = [
        {id: 1, title: 'Low', color: '#e5e5e5'},
        {id: 2, title: 'Middle', color: '#85D1B2'},
        {id: 3, title: 'Hight', color: '#F1828D'},
        {id: 4, title: 'Very HIGHT!!!', color: '#F1128D'}
    ];


    // indeksacja zaczyna sie z 0 
    static tasks: Task[] = [
        {
            id: 1,
            title: 'Fill up a car with gas',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[9],
            date: new Date('2020-06-30')
        },

        {
            id: 2,
            title: 'Finish book about Angular',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[0],
            date: new Date('2020-07-27')
        },

        {
            id: 3,
            title: 'Clean my room',
            priority: TestData.priorities[2],
            completed: true,
            category: TestData.categories[1]
        },

        {
            id: 4,
            title: 'Go to the park with GF',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[1],
            date: new Date('2020-07-04')
        },
        {
            id: 5,
            title: 'Find and learn from the book “You Don’t Know JS” by Kyle Simpson',
            completed: false,
            category: TestData.categories[2]
        },
        {
            id: 6,
            title: 'Go to meetup of JavaScript',
            priority: TestData.priorities[1],
            completed: true,
            category: TestData.categories[2],
            date: new Date('2020-06-22')
        },

        {
            id: 7,
            title: 'Find tickets to travel to Spain',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[3]
        },
        {
            id: 8,
            title: 'Prepare dinner to my wife (broccoly cream-soup)',
            completed: false,
            category: TestData.categories[5]
        },
        {
            id: 9,
            title: '100 pompes',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[4],
            date: new Date('2020-06-29')
        },
        {
            id: 10,
            title: 'Run 10km',
            priority: TestData.priorities[0],
            completed: true,
            category: TestData.categories[4]
        },

        {
            id: 11,
            title: 'Prepare Date',
            completed: false
        },

        {
            id: 12,
            title: 'Go “JavaScript Allongé: The Six Edition” by Reginald Braithwaite',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[2]
        },
        {
            id: 13,
            title: 'Buy some food for a week',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[5],
            date: new Date('2020-06-29')
        },

        {
            id: 14,
            title: 'Prepare meetup about JS',
            completed: true,
            category: TestData.categories[0]
        },

        {
            id: 15,
            title: 'Repair a car',
            priority: TestData.priorities[2],
            completed: true
        },


        {
            id: 16,
            title: 'Make deposit of 100000zł',
            priority: TestData.priorities[3],
            completed: false,
            category: TestData.categories[6]
        },

        {
            id: 17,
            title: 'Find a new job',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[6]
        },

        {
            id: 18,
            title: 'Go to the hospital',
            priority: TestData.priorities[3],
            completed: false,
            category: TestData.categories[8],
            date: new Date('2020-12-11')

        },

        {
            id: 19,
            title: 'Buy a new mobile phone',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[7],
            date: new Date('2020-09-11')

        },

        {
            id: 20,
            title: 'Play footbal with my friends',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[4],
            date: new Date('2020-07-12')

        }

    ];

}