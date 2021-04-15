export class MockCoursework {
    courseId:string;
    id:string;
    dueDate: {
        year:string;
        month:string;
        day:string;
    };
    dueTime: {
        hours:string;
        minutes:string;
        seconds:string;
        nanos:string;
    };
    scheduledTime:string;
    maxPoints:number;
    state: {
        enum:string[];
    };
}