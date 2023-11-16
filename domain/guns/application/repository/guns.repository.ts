import { GunsEntity } from "../../enterprise/guns.entity";

export interface GunsRepository {
  findAll(): Promise<Array<GunsEntity>>;
  findById(id: string): Promise<GunsEntity | null>;
}
