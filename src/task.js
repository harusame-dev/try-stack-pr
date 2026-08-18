export const STATUS = {
  TODO: "todo",
  DOING: "doing",
  DONE: "done",
};

export function createTask(id, title, dueDate = null) {
  if (!title.trim()) {
    throw new Error("title is required");
  }
  return { id, title, status: STATUS.TODO, dueDate };
}

export function withStatus(task, status) {
  if (!Object.values(STATUS).includes(status)) {
    throw new Error(`unknown status: ${status}`);
  }
  return { ...task, status };
}

export function isOpen(task) {
  return task.status !== STATUS.DONE;
}

export function isOverdue(task, now) {
  return isOpen(task) && task.dueDate !== null && task.dueDate < now;
}
