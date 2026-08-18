import { createRepository } from "./task-repository.js";

const repository = createRepository();

export function handle(request) {
  if (request.method === "GET" && request.path === "/tasks") {
    return { status: 200, body: repository.list() };
  }
  if (request.method === "POST" && request.path === "/tasks") {
    return { status: 201, body: repository.add(request.body.title) };
  }
  if (request.method === "PATCH" && request.path.startsWith("/tasks/")) {
    const id = request.path.slice("/tasks/".length);
    const updated = repository.updateStatus(id, request.body.status);
    return updated ? { status: 200, body: updated } : { status: 404, body: null };
  }
  return { status: 404, body: null };
}
