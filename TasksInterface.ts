export interface TasksInterface{
    
    Tasks: string[];
    addTask(task:string):number;
    listAllTasks():void;
    deleteTasks(task:string): number;
}