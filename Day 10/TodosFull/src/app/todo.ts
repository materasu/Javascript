
let idNum : number = 1;

export class Todo {
    id: number;
    description: string;
    completed: boolean;
    // idNum: any;
    constructor(description) {
        // this.id = idNum++;
        this.description = description;
        this.completed = false;
    }
}
 