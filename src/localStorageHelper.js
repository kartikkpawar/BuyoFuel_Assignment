export const isProjStrageInitialized = () => {
  // Initializing just to avoid checking every time
  const projects = localStorage.getItem("projects-assg");
  if (!projects) {
    localStorage.setItem("projects-assg", JSON.stringify([]));
    return false;
  }
  const authUser = localStorage.getItem("authState");
  if (!authUser) localStorage.setItem("authState", false);
};

export const authUser = (authType) => {
  if (authType !== "LOGOUT") localStorage.setItem("authState", true);
  else localStorage.setItem("authState", false);
};

export const getAllProjects = () => {
  const projects = JSON.parse(localStorage.getItem("projects-assg"));
  const projArr = [];
  projects.length > 0 &&
    projects.forEach((proj) => {
      projArr.push({
        id: proj.id,
        name: proj.name,
        taskCount: proj.tasks.length,
      });
    });
  console.log(projArr);

  return projArr;
};

export const addNewProject = (name, id) => {
  const proj = { name, id, tasks: [], status: false };
  const prevProjects = JSON.parse(localStorage.getItem("projects-assg"));
  prevProjects.push(proj);
  localStorage.setItem("projects-assg", JSON.stringify(prevProjects));
};

export const getProject = (id) => {
  const projects = JSON.parse(localStorage.getItem("projects-assg"));
  const project = projects.filter((proj) => proj.id === id);
  return project;
};
export const deleteProject = (id) => {
  const projects = JSON.parse(localStorage.getItem("projects-assg"));
  const project = projects.filter((proj) => proj.id !== id);
  localStorage.setItem("projects-assg", JSON.stringify(project));
};

export const addNewTask = (projID, task) => {
  const projects = JSON.parse(localStorage.getItem("projects-assg"));
  const taskOBJ = { task, status: false };
  const newArr = projects.map(
    (proj) => proj.id === projID && proj.task.push(taskOBJ)
  );
  localStorage.setItem("projects-assg", JSON.stringify(newArr));
};

export const getAllTask = () => {
  let taskArr = [];
  const projects = JSON.parse(localStorage.getItem("projects-assg"));
  projects.forEach((proj) => {
    taskArr = [...taskArr, proj.tasks];
  });
  return taskArr;
};
