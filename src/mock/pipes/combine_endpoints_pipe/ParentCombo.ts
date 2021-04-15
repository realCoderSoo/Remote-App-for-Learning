import { Parent } from "src/app/core/models/Parent";
import { GCParentInfoPipe } from "../mock-google-classroom-pipes/GCParentInfoPipe";

export class ParentCombo {
    GCparentBank:GCParentInfoPipe;
    GCParents:Parent[];
    combinedParents:Parent[] = new Array();
    h:number = 0;
    
    constructor() {
        this.loadPipes();
        this.GCparentBank.createParents();
        //this.CparentBank.createParents();
        this.GCParents = this.GCparentBank.get();
        //this.CParents = this.CparentBank.get();
        for(let i in this.GCParents) {
            this.combinedParents[this.h] = new Parent(this.GCParents[i].id,
                this.GCParents[i].firstName, this.GCParents[i].middleName, this.GCParents[i].lastName);
            ++this.h;
        }
        // for(let j in this.CParents) {
        //     this.combinedParents[this.h] = new Parent(this.CParents[j].id,
        //         this.CParents[j].firstName, this.CParents[j].middleName, this.CParents[j].lastName);
        //     ++this.h;
        // }
        var uniqueParents = this.combinedParents.filter((v,i,a)=>a.findIndex(t=>(JSON.stringify(t) === JSON.stringify(v)))===i);
        this.combinedParents = uniqueParents;
    }

    loadPipes() {
        this.GCparentBank = new GCParentInfoPipe();
    }

    get() {
        if (this.combinedParents != null) {
            return this.combinedParents;
        }
    }
}