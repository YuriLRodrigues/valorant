import { AgentsRepository } from "@/domain/agents/application/repository/agents.repository";
import { HttpRepository } from "../http/http-repository";
import { AgentsEntity } from "@/domain/agents/enterprise/agents.entities";

type FindAllProps = {
  data: Array<AgentsEntity>;
};

type FindByIdProps = {
  data: AgentsEntity;
};

export class AgentsGateway implements AgentsRepository {
  constructor(private readonly http: HttpRepository) {
    this.http = http;
  }

  async findAll(): Promise<AgentsEntity[]> {
    const agents = await this.http.get<FindAllProps>(
      "https://valorant-api.com/v1/agents?language=pt-BR"
    );
    return agents.data;
  }

  async findById(id: string): Promise<AgentsEntity> {
    const agent = await this.http.get<FindByIdProps>(
      `https://valorant-api.com/v1/agents/${id}?language=pt-BR`
    );
    return agent.data;
  }
}
