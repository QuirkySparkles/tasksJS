function displayTask(task) {
    document.getElementById("result").innerHTML = "";
    document.getElementById("instruction").innerHTML = "";
    document.querySelector(".board-result").innerHTML = "";
    
    const allTasks = document.getElementsByClassName("task");
    const activeTabStyle = document.querySelector(`li:nth-child(${task[1]})`).style;
    
    for (let i = 0; i < allTasks.length; i++) {
        allTasks.item(i).style.display = "none";
        document.querySelector(`li:nth-child(${i + 1})`).style.backgroundColor = "white";
    }
    
    activeTabStyle.backgroundColor = "#4c90ff";
    activeTabStyle.transition = "0.5s";
    document.getElementById(task).style.display = "block";
}
