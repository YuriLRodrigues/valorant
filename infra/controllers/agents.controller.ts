import { FindAgentByIdUseCase } from "@/domain/agents/application/use-case/find-agent-by-id.use-case";
import { FindAgentsUseCase } from "@/domain/agents/application/use-case/find-agents.use-case";

export class AgentsController {
  constructor(
    private readonly findAgentsUseCase: FindAgentsUseCase,
    private readonly findAgentsByIdUseCase: FindAgentByIdUseCase
  ) {
    this.findAgentsUseCase = findAgentsUseCase;
    this.findAgentsByIdUseCase = findAgentsByIdUseCase;
  }

  async findAgents() {
    return await this.findAgentsUseCase.execute();
  }

  async findAgentById(id: string) {
    return await this.findAgentsByIdUseCase.execute(id);
  }
}
