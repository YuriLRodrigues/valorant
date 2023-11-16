import { AgentsRepository } from "../repository/agents.repository";

export class FindAgentsUseCase {
  constructor(private readonly agentsRepository: AgentsRepository) {
    this.agentsRepository = agentsRepository;
  }

  async execute() {
    return this.agentsRepository.findAll();
  }
}
