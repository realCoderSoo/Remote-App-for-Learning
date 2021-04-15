export class MockGuardian {
    studentId:string;
    guardianId:string;
    guardianProfile: {
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
    invitedEmailAddress:string;

}