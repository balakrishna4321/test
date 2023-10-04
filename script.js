// JavaScript code here
// Simulated tasks data (you should replace this with your actual data)
const tasks = [
  { title: 'Task 1', completed: false },
  { title: 'Task 2', completed: true },
  { title: 'Task 3', completed: false },
  // Add more tasks here
];

// Simulated goals data
const goals = [
  { title: 'Goal 1', completed: true },
  { title: 'Goal 2', completed: true },
  { title: 'Goal 3', completed: false }
];

// Function to populate the task list
function populateTaskList() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  tasks.forEach((task) => {
      const taskItem = document.createElement('li');
      taskItem.textContent = task.title;

      if (task.completed) {
          taskItem.style.textDecoration = 'line-through';
      }

      taskList.appendChild(taskItem);
  });
}

// Function to populate the goals and objectives list
function populateGoalsList() {
  const goalsList = document.getElementById('goals-objectives-list');
  goalsList.innerHTML = '';

  goals.forEach((goal) => {
      const goalItem = document.createElement('li');
      goalItem.textContent = goal.title;

      if (goal.completed) {
          goalItem.style.textDecoration = 'line-through';
      }

      goalsList.appendChild(goalItem);
  });
}

// Function to update the progress bar for goals
function updateGoalsProgressBar() {
  const progressFill = document.getElementById('progress-fill-goals-objectives');
  const completedGoals = goals.filter((goal) => goal.completed).length;
  const totalGoals = goals.length;
  const percentComplete = (completedGoals / totalGoals) * 100;

  progressFill.style.width = percentComplete + '%';
}

// Function to update the progress bar for tasks
function updateTasksProgressBar() {
  const progressFill = document.getElementById('progress-fill');
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const percentComplete = (completedTasks / totalTasks) * 100;

  progressFill.style.width = percentComplete + '%';
}

// Call the functions to populate tasks, goals, and update progress
populateTaskList();
populateGoalsList();
updateTasksProgressBar();
updateGoalsProgressBar();
