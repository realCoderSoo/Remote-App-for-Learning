import { Student } from "./Student";

export class Parent {
	id: string;
	firstName: string;
	middleName: string;
	lastName: string;
	children: Student[];

	constructor (id: string, firstName: string, middleName: string, lastName: string) {
        this.id = id;
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
    }

	setChildren(children: Student[]) {
		this.children = children;
	}

	getId() {
		return this.id;
	}

	getFirstName() {
		return this.firstName;
	}

	getMiddleName() {
		return this.middleName;
	}

	getLastName() {
		return this.lastName;
	}

	getChildren() {
		if (this.children != null) {
			return this.children;
		}
	}
}