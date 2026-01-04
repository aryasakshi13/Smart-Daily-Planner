//   const Showtable = true;
//             if(Showtable){
//                 document.getElememtById('Conditonal-row').style.display='table-row'
//             }

            let task = [];
           

            function addTask(){     
                console.log("clciked")   

                let taskDetails ={
                    taskName : document.getElementById("taskName1").value,
                    priority : document.getElementById("priority1").value,
                    energy : document.getElementById("energy1").value,
                    status : "Pending",
                    completed: false
                };
                 task.push(taskDetails);
                 showSortedTask();
            }   
            
            function showSortedTask(){
                let table = document.getElementById("Prioritytable");
                let table2 = document.getElementById("completedTable");
                table.innerHTML = "";
                table2.innerHTML = "";
                 Sortedtask();
                 let seq=1;
                task.forEach((t,index) => {
                    let row = `
                        <tr>
                        <td>${seq++}</td>
                        <td>${t.taskName}</td>
                        <td>${t.priority}</td>
                        <td>${t.energy}</td>
                        <td>${t.status}</td>
                        <td><input 
                            id="cmpCheck"
                            type="checkbox"
                            ${t.status === "Completed" ? "checked" : ""}
                            onclick="toggleStatus(${index})"
                        /></td>
                        </tr>

                    `
                    t.completed? table2.innerHTML += row: table.innerHTML += row;
                    
                    
                });
                 
            }
           
            function toggleStatus(index) {
                if (task[index].status === "Pending") {
                    task[index].status = "Completed";
                    task[index].completed=true;
                }
                showSortedTask();
            }

                function Sortedtask(){
                    for(let i = 0;i<task.length;i++){
                        for(let j = i+1;j<task.length;j++){
                            if(!task[i].completed){
                                if(task[i].priority == task[j].priority){
                                    if(task[i].energy > task[j].energy){
                                        let temp = task[i];
                                        task[i] = task[j];
                                        task[j] = temp;
                                    }
                                }else{
                                    if(task[i].priority > task[j].priority){
                                        let temp = task[i];
                                        task[i] = task[j];
                                        task[j] = temp;
                                    }
                                }
                            }
                        }
                    }
                    return task;
                }


                 


            
