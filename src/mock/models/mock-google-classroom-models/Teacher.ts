export class MockTeacher {
    courseId:string;
    userId:string;
    profile: {
        id:string;
        name: {
            givenName:string;
            familyName:string;
            fullName:string;
        };
        emailAddress:string;
        photoUrl:string;
        permissions: [
            {}
        ];
        verifiedTeacher:boolean;
    };
}