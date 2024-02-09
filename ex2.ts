let Tasks: string[] = [];

function addTask (task: string):number {

    let length: number = Tasks.push(task);
    console.log(task + " has been added to my tasks!")

    return length;

}


function listAllTasks ():void {
    Tasks.forEach((item)=>{
        console.log(item +" is in our Tasks list" )
    })
}

function deleteTasks(task: string): number{
    
    let index = Tasks.indexOf(task);
    
    if (index > -1)
    {
    Tasks.splice(index, 1);
    console.log(task + " removed from my Tasks list!");
    }

    else
    {
        console.log(task + " is not in my Tasks list!")
    }
   
    return Tasks.length;	
}

addTask("Eat");
listAllTasks();
deleteTasks("Work");
