"use server";

import { AgentsEntity } from "@/domain/agents/enterprise/agents.entities";
import { AgentsFactory } from "@/infra/factory/agents.factory";
import { GunsFactory } from "@/infra/factory/guns.factory";
import { MapsFactory } from "@/infra/factory/maps.factory";

export const findAgents = async (): Promise<Array<AgentsEntity>> => {
  const agents = await AgentsFactory().findAgents();
  return agents;
};

export const findAgentsById = async (id: string): Promise<AgentsEntity> => {
  const agents = await AgentsFactory().findAgentById(id);
  return agents;
};

export const findMaps = async () => {
  const maps = await MapsFactory().findAll();
  return maps;
};

export const findMapById = async (id: string) => {
  const mapById = await MapsFactory().findById(id);
  return mapById;
};

export const findGuns = async () => {
  const guns = await GunsFactory().findAll();
  return guns;
};

export const findGunById = async (id: string) => {
  const gunById = await GunsFactory().findById(id);
};
