import { Parent } from "src/app/core/models/Parent";
import GuardiansJson from "src/mock/data/mock-google-classroom-endpoint/guardians.json";
import { MockGuardian } from "src/mock/models/mock-google-classroom-models/Guardian";

export class GCParentInfoPipe {

    parents:Parent[] = new Array();

    createParents() {
        let mockParents:MockGuardian[] = JSON.parse(JSON.stringify(GuardiansJson["userProfiles.guardians"]));
        for(let i in mockParents) {
            this.parents[i] = new Parent(mockParents[i].guardianId, mockParents[i].guardianProfile.name.givenName,
            "", mockParents[i].guardianProfile.name.familyName);
        }
    }

    get() {
        if (this.parents != null) {
             return this.parents;
        }
    }
}