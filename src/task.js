export const STATUS = {
  TODO: "todo",
  DOING: "doing",
  DONE: "done",
};

export function createTask(id, title) {
  if (!title.trim()) {
    throw new Error("title is required");
  }
  return { id, title, status: STATUS.TODO };
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
