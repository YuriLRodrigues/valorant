import { FindAgentsUseCase } from "@/domain/agents/application/use-case/find-agents.use-case";
import { AgentsController } from "../controllers/agents.controller";
import { FindAgentByIdUseCase } from "@/domain/agents/application/use-case/find-agent-by-id.use-case";
import { AgentsGateway } from "../gateway/agents.gateway";
import { HttpService } from "../http/http-service";

export const AgentsFactory = () => {
  const http = new HttpService();

  const agentsGateway = new AgentsGateway(http);

  const findAgentsUseCase = new FindAgentsUseCase(agentsGateway);
  const findAgentByIdUseCase = new FindAgentByIdUseCase(agentsGateway);

  const agentsController = new AgentsController(
    findAgentsUseCase,
    findAgentByIdUseCase
  );

  return agentsController;
};
