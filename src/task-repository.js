import { createTask, withStatus } from "./task.js";

export function createRepository() {
  const tasks = new Map();
  let nextId = 1;

  return {
    add(title) {
      const task = createTask(String(nextId++), title);
      tasks.set(task.id, task);
      return task;
    },
    list() {
      return [...tasks.values()];
    },
    updateStatus(id, status) {
      const task = tasks.get(id);
      if (!task) {
        return null;
      }
      const updated = withStatus(task, status);
      tasks.set(id, updated);
      return updated;
    },
  };
}
