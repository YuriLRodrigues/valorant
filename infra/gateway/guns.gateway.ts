import { GunsRepository } from "@/domain/guns/application/repository/guns.repository";
import { HttpRepository } from "../http/http-repository";
import { GunsEntity } from "@/domain/guns/enterprise/guns.entity";
import { GunsMapper } from "./mappers/guns.mapper";
import { GunsApiEntity } from "@/domain/guns/enterprise/guns.api.entity";

type FindGunsProps = {
  data: Array<GunsApiEntity>;
};

type FindGunByIdProps = {
  data: GunsApiEntity;
};

export class GunsGateway implements GunsRepository {
  constructor(private readonly http: HttpRepository) {
    http = this.http;
  }

  async findAll(): Promise<GunsEntity[]> {
    const response = await this.http.get<FindGunsProps>(
      "https://valorant-api.com/v1/weapons"
    );

    return response.data.map(GunsMapper.toDomain);
  }

  async findById(id: string): Promise<GunsEntity | null> {
    const response = await this.http.get<FindGunByIdProps>(
      `https://valorant-api.com/v1/weapons/${id}`
    );

    if (!response || !response.data.uuid) return null;

    return GunsMapper.toDomain(response.data);
  }
}
