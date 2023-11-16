import { AgentsEntity } from "../../enterprise/agents.entities";

export interface AgentsRepository {
  findAll(): Promise<Array<AgentsEntity>>;
  findById(id: string): Promise<AgentsEntity>;
}
