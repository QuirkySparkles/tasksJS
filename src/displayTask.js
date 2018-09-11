function displayTask(task) {
    document.getElementById("result").innerHTML = "";
    document.getElementById("instruction").innerHTML = "";
    const allTasks = document.getElementsByClassName("task");
    
    for (let i = 0; i < allTasks.length; i++) {
        allTasks.item(i).style.display = "none"
    }
    
    document.getElementById(task).style.display = "block";
}
