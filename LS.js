"use strict";

const LS = (key, value = null) => {
    if(key && value != null) return localStorage.setItem(key, value);
    else return localStorage.getItem(key);
}

const setID = () => {
    if(LS('counterID') == null) LS('counterID', 0);
    LS('counterID', Number(LS('counterID')) + 1);
    return Number(LS('counterID'));
}

const storeTask = ({task, status}) => {
    const tasksList = getTasksLS();
    const newTask = {id:setID(), task:task, status: 0};
    tasksList.push(newTask);
    LS('tasks', JSON.stringify(tasksList));
    return newTask;
}


const updateTaskList = (tasksList) => {
    return LS('tasks', JSON.stringify(tasksList));
}

const updateTask = (taskId,{status=null,task=null}) => {
    const tasksList = getTasksLS();
    tasksList.forEach(Task => {
        if(Task.id == taskId){
            Task.status = status ?? Task.status;
            Task.task = task ?? Task.task;
        }
    });

    updateTaskList(tasksList);
}

const deleteTaskLS = (id) => {
    const tasksList = getTasksLS().filter((task) => {
        return task.id !== id;
    });
    LS('tasks', JSON.stringify(tasksList));
}

const getTasksLS = () => {
    return JSON.parse(LS('tasks')) || [];
}

const getTaskLS = (id) => {
    return getTasksLS().filter((task) => {
        return task.id == id;
    })[0];
}