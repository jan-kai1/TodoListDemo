import { compareAsc, compareDesc, addDays,subDays } from "date-fns" 
import "./style.css"
import closeIcon from './icons/close.svg'
export { createProject,indexInit,createProjectElement,addResetButton,createFormElement }


function indexInit()
{
    let projectList = []
    if (projectList.length == 0)
    {
        
        
        const cleanRoom = createProject("clean room","2023-7-1","non-urgent","clean my damn room");
        const checkEmail = createProject("check email", "2023-6-20","urgent","check all emails");
        const testProject = createProject("test", "23-4-2222", "urgent", "LOLOLOL")
        const testProject2 = createProject("test2", "20 - 4- 2222", "urgent", "obamamama")
        const testProject3 = createProject("test2", "20 -4- 2222", "urgent", "obamamama")
        const testProject5 = createProject("test2", "20 - 4- 2222", "urgent", "obamamama")
        const testProject4 = createProject("test2", "20 - 4- 2222", "urgent", "obamamama")
        const testProject6 = createProject("test2", "20 - 4- 2222", "urgent", "obamamama")
        projectList.push(testProject.plainProject());
        projectList.push(testProject2.plainProject());
        projectList.push(testProject3.plainProject())
        projectList.push(testProject4.plainProject())
        projectList.push(testProject5.plainProject());
        projectList.push(testProject6.plainProject());
        projectList.push(checkEmail.plainProject());
        projectList.push(cleanRoom.plainProject());
        console.log(projectList)
    }
        

    
    else
    {
        console.log("List Found");
        console.log(projectList)
    }
    for (let i =0; i< projectList.length; i++)
    {
        createProjectElement(projectList[i]);
    }
   

}

function createProject(name,dueDate,priority, description="")
{
    
    function getName()
    {
        return name;
    }
    function getDueDateObject()
    {
        return Date(dueDate);
    }
    function getDueDate()
    {
        return dueDate
    }
    function getDescription()
    {
        return description;
    }
    function getPriority()
    {
        return priority;
    }
    //have to change to plain project for localStorage
    function plainProject()
    {
        return {name,dueDate,description,priority}
    }
    // const dateString = `${getdueDate().getDate()}-${dueDate().getMonth()}-${dueDate().getFullYear()}`

    return {getDueDate,getName,getDescription, getPriority, plainProject};
}

function createProjectElement(project)
{
    let projectDisplay = document.querySelector(".project-display");
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

    projectTop.appendChild(projectName)
    projectTop.appendChild(projectDueDate)

    newProjectTab.appendChild(projectTop);
    newProjectTab.appendChild(projectDesc)
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
    projectPriorityLabel.setAttribute("for", "projectPriority");
    projectPriorityLabel.textContent = "Urgent?";
    let projectPriorityInput = document.createElement("input")
    projectPriorityInput.setAttribute("type","text");
    projectPriorityInput.setAttribute("name","projectPriority");
    newProjectForm.appendChild(projectPriorityLabel)
    newProjectForm.appendChild(projectPriorityInput);

    //submit button
    let submitButton = document.createElement("button")
    submitButton.setAttribute("type","submit")
    submitButton.textContent="Add Project"
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
    projectDisplay.appendChild(newProjectForm)
    console.log("created")
}
