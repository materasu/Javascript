let id_num: number = 1;
export class Todo {
    private id: number;
    private name: string;
    private completed: boolean;
    constructor(name) {
        this.id = id_num++;
        this.name = name;
        this.completed = false;    
    } 
}
