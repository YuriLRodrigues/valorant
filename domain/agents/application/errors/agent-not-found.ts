export class AgentNotFound extends Error implements AgentNotFound {
  constructor(id: string) {
    super(`Agent with id ${id} not found`);
    this.name = "AgentNotFoundError";
  }
}
