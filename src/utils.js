import { compareAsc, compareDesc, addDays,subDays } from "date-fns" 
import "./style.css"
import closeIcon from './icons/close.svg'
export { createProject,indexInit,createProjectElement,addResetButton,createFormElement }


function indexInit()
{
    //declare var for form 
    
    let projectList = getLocalStorage()
    if (projectList == null)
    {
    
        projectList = [];
        
        const cleanRoom = createProject("clean room","2033-4-20","non-urgent","clean my damn room");
        const checkEmail = createProject("check email", "2033-6-20","urgent","check all emails");
        const testProject = createProject("test", "2344-4-21", "urgent", "LOLOLOL")
        const testProject2 = createProject("test2", "2021-4-2", "urgent", "obamamama")
        const testProject3 = createProject("test2", "2012-4-23", "urgent", "obamamama")
    
        projectList.push(testProject);
        projectList.push(testProject2);
        projectList.push(testProject3)
     
        projectList.push(checkEmail);
        projectList.push(cleanRoom);
        for (let i =0;i<projectList.length;i++)
        {
            console.log(projectList[i].id)
        }
        setLocalStorage(projectList);
    }    

    
    else
    {   

        console.log("List Found");
        console.log("unsorted")
        console.log(projectList);
        projectList = sortByDate(projectList);
        console.log(projectList)
    }

    for (let i =0; i< projectList.length; i++)
    {
        addMethods(projectList[i]);
        createProjectElement(projectList[i]);
    }
    
    let projectForm;
    let addButton = document.querySelector("#addProjectButton");
    addButton.addEventListener("click",function()
    {
        createFormElement();
        projectForm = document.querySelector("form");
        console.log(projectForm);
        projectForm.addEventListener("submit", function(e)
        {
            e.preventDefault();
             //create project object
            let inputProject = formValue()
            //check id if exists
            checkIDExists(inputProject,projectList);
            //add to projectList
            projectList.push(inputProject);
            createProjectElement(inputProject);
            setLocalStorage(projectList);
        })
        
    });
   deleteEventListener(projectList);

}

function getLocalStorage()
{
    let retrievedList = JSON.parse(localStorage.getItem("projectList"));
    if (retrievedList && retrievedList.length >= 1)
    {
        return retrievedList;
    }
    else
    {
        return null;
    }
}

function setLocalStorage(list)
{
    localStorage.setItem("projectList", JSON.stringify(list));
}

function deleteEventListener(projectList)
{
    let deleteButtons = document.querySelectorAll(".delete");
    for (let i =0; i< deleteButtons.length; i++)
    {
        deleteButtons[i].addEventListener("click",function(e)
        {
            //
            deleteProjectFromList(deleteButtons[i],projectList)
            e.target.parentElement.remove();
            setLocalStorage(projectList);
        })
    }

}


function sortByDate(list)
{
    //TODO
    list.sort(function(first,second)
    {
        let firstDate = new Date(first.dueDate)
        let secondDate = new Date (second.dueDate);
        console.log(firstDate,secondDate);
        return compareAsc(firstDate,secondDate)
    })
    return list;
}
function deleteProjectFromList(button,projectList)
{
    let projectID = button.getAttribute("id");
    //search projectList for project with id projectID
    for (let i =0; i < projectList.length; i++)
    {
        if (projectList[i].id != projectID)
        {
            continue;
        }
        else
        {
            console.log("Initial List:" + projectList)
            //i is position in index
            projectList.splice(i,1);
            console.log("After:" +projectList)
            
            
        }
    }
}
//add methods to objects retrieved from localstorage
function addMethods(object)
{
    object.getDueDateObject = function()
    {
        return new Date(object.dueDate)
    }

    object.timeToDue = function()
    {
        const currentDate = new Date();
        
        let milisecondsDiff = new Date(object.dueDate)-currentDate;
        console.log(milisecondsDiff);
        let days = milisecondsDiff / (1000 * 3600 *24)
        days = Math.floor(days)
        return days;
    }
}

function createProject(name,dueDate,priority, description="", id=generateID())
{
    
  
   
    //have to change to plain project for localStorage
    
    return {name,dueDate,description,priority, id, getDueDateObject, timeToDue}
    
    // const dateString = `${getdueDate().getDate()}-${dueDate().getMonth()}-${dueDate().getFullYear()}`

    
}
function createProjectElement(project)
{
    
    let displayTab;
    console.log(project.priority)
    if (project.priority == "urgent")
    {
        displayTab = document.querySelector(".urgent")
    }
    else if (project.priority == "non-urgent")
    {
        displayTab = document.querySelector(".non-urgent")
    }
    else if (!project.priority)
    {
        console.log("objects are empty")
        return;
    }
    let newProjectTab = document.createElement("div");
    newProjectTab.classList.add("project");
   
    let projectTop = document.createElement("div");
    projectTop.classList.add("project-top");

    let projectName = document.createElement("div")
    projectName.classList.add("project-name")
    projectName.textContent = project.name;

    let projectDueDate = document.createElement("div");
    projectDueDate.classList.add("project-dueDate");  
    let dateString = project.dueDate
    projectDueDate.textContent =  dateString;

    let projectDesc = document.createElement("div")
    projectDesc.classList.add("project-description");
    projectDesc.textContent = project.description

    let projectTime = document.createElement("div");
    if (project.timeToDue()>0)
    {
        projectTime.textContent = "Due In: " + project.timeToDue() + " days";
    }
    else
    {
        projectTime.textContent = "Due: " + project.timeToDue() + " days ago"
    }
    projectTime.classList.add("daysLeft")

    projectTop.appendChild(projectTime);


    projectTop.appendChild(projectName)
    projectTop.appendChild(projectDueDate)
    
    let deleteButton = document.createElement("img")
    deleteButton.setAttribute("class","delete");
    deleteButton.src= closeIcon;
    deleteButton.setAttribute("id",project.id)

    newProjectTab.appendChild(projectTop);
    newProjectTab.appendChild(projectDesc)
    newProjectTab.appendChild(deleteButton);
    displayTab.appendChild(newProjectTab);



}

function addResetButton()
{
    let resetButton = document.querySelector("#resetter");
    resetButton.addEventListener("click", function()
    {
        for (let i =0; i<localStorage.length;i++)
        {
            const key = localStorage.key(i)
            localStorage.removeItem(key);

        }
        console.log("cleared local storage")
    })
}




function createFormElement()
{

    let projectDisplay = document.querySelector(".project-display");
    let newProjectForm = document.createElement("form");
    newProjectForm.setAttribute("autocomplete","off");
    let projectNameLabel = document.createElement("label");
    projectNameLabel.setAttribute("for", "projectName");
    projectNameLabel.textContent = "Name of new Project?"
    let projectNameInput = document.createElement("input");
    projectNameInput.setAttribute("type","text");
    projectNameInput.setAttribute("name","projectName");
    newProjectForm.appendChild(projectNameLabel);
    newProjectForm.appendChild(projectNameInput);

    let projectDateLabel = document.createElement("label");
    projectDateLabel.setAttribute("for","projectDate");
    projectDateLabel.textContent = "Due Date?"
    let projectDateInput = document.createElement("input")
    projectDateInput.setAttribute("type","date");
    projectDateInput.setAttribute("name","projectDate");
    newProjectForm.appendChild(projectDateLabel)
    newProjectForm.appendChild(projectDateInput)

    let projectPriorityLabel = document.createElement("label");
    projectPriorityLabel.setAttribute("for", "urgent");
    projectPriorityLabel.textContent = "Urgent";


    let projectPriorityInputUrgent = document.createElement("input")
    projectPriorityInputUrgent.setAttribute("type","radio");
    projectPriorityInputUrgent.setAttribute("name","projectPriority");
    projectPriorityInputUrgent.setAttribute("value","urgent");
    projectPriorityInputUrgent.setAttribute("id","urgent");
    projectPriorityInputUrgent.checked = true;

    let projectPrioDiv1 = document.createElement("div")
    projectPrioDiv1.classList.add("radioHolder")
    let projectPriorityLabel2 = document.createElement("label");
    projectPrioDiv1.appendChild(projectPriorityLabel)
    projectPrioDiv1.appendChild(projectPriorityInputUrgent);
    
    
    projectPriorityLabel2.setAttribute("for","non-urgent");
    projectPriorityLabel2.textContent = "Non-Urgent"
    let projectPriorityInputNon = document.createElement("input");
    projectPriorityInputNon.setAttribute("type","radio")
    projectPriorityInputNon.setAttribute("name","projectPriority");
    projectPriorityInputNon.setAttribute("value","non-urgent");
    projectPriorityInputNon.setAttribute("id","non-urgent");
    
    let projectDescLabel = document.createElement("label")
    projectDescLabel.setAttribute("for","projectDesc")
    projectDescLabel.textContent="Description?"
    let projectDesc = document.createElement("input")
    projectDesc.setAttribute("name","projectDesc");
    newProjectForm.appendChild(projectDescLabel);
    newProjectForm.append(projectDesc);
    
    let projectPrioDiv2 = document.createElement("div");
    projectPrioDiv2.classList.add("radioHolder");
    projectPrioDiv2.appendChild(projectPriorityLabel2)
    projectPrioDiv2.appendChild(projectPriorityInputNon);
    newProjectForm.appendChild(projectPrioDiv1)
    newProjectForm.appendChild(projectPrioDiv2);

   

    //submit button
    let submitButton = document.createElement("button")
    submitButton.setAttribute("type","submit")
    submitButton.textContent="Add Project";
  
    
    
    let closeButton = document.createElement("img");
    closeButton.src = closeIcon;
    closeButton.setAttribute("id","close")
    closeButton.addEventListener("click", function()
    {
        //deletes the form element
        projectDisplay.removeChild(newProjectForm);
    })
    newProjectForm.appendChild(submitButton)
    newProjectForm.appendChild(closeButton);
    projectDisplay.appendChild(newProjectForm);
    
  
    

    console.log("created")
}

function checkIDExists(input,projectList)
{
    for (let i =0; i< projectList.length;i++)
    {
        if (input.id != projectList[i].id)
        {
            continue;
        }
        else if (input.id == projectList[i].id)
        {
            //remake a id
            input.id = generateID()
            //rerun
            checkIDExists(input,projectList)
        }
    }
    return;
}
function formValue()
{
    
    
    let ProjectNameValue = document.querySelector("input[name='projectName']").value;
    let projectDateValue = document.querySelector("input[name='projectDate']").value;
    let projectPrioValue = document.querySelector("input[name='projectPriority']:checked").value;
    
    let projectDescValue = document.querySelector("input[name='projectDesc']").value;
    if (projectDescValue)
    {
        return createProject(ProjectNameValue,projectDateValue,projectPrioValue,projectDescValue)  
    }
    else
    {
        return createProject(ProjectNameValue,projectDateValue,projectPrioValue)  
    }
    
}



function generateID()
{
     
    return Math.floor(Math.random() * 10000);
}