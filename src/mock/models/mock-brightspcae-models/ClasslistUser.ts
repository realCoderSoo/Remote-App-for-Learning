export class ClasslistUser {
  identifier: string;
  profileIdentifier: string;
  displayName: string;
  userName: string;
  orgDefinedId: string;
  email: string;
  firstName: string;
  lastName: string;
  roldId: number;
  lastAccessed: string;
  isOnine: boolean;
}

//GET /d2l/api/le/(version)/(orgUnitId)/classlist
//Retrieve the enrolled users in the classlist for an org unit.
