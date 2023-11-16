import { AgentNotFound } from "../errors/agent-not-found";
import { AgentsRepository } from "../repository/agents.repository";

export class FindAgentByIdUseCase {
  constructor(private readonly agentRepository: AgentsRepository) {
    this.agentRepository = agentRepository;
  }

  async execute(id: string) {
    const agent = this.agentRepository.findById(id);

    if (!agent) {
      throw new AgentNotFound(id);
    }

    return agent;
  }
}
