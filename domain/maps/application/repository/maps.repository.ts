import { MapsEntity } from "../../enterprise/maps.entities";

export interface MapsRepository {
  findAll(): Promise<Array<MapsEntity>>;
  findById(id: string): Promise<MapsEntity>;
}
