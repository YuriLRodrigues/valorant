import { MapsRepository } from "@/domain/maps/application/repository/maps.repository";
import { MapsEntity } from "@/domain/maps/enterprise/maps.entities";
import { HttpService } from "../http/http-service";

type FindAllMapsProps = {
  data: MapsEntity[];
};

type FindMapByIdProps = {
  data: MapsEntity;
};

export default class MapsGateway implements MapsRepository {
  constructor(private readonly http: HttpService) {
    http = this.http;
  }

  async findAll(): Promise<MapsEntity[]> {
    const response = await this.http.get<FindAllMapsProps>(
      "https://valorant-api.com/v1/maps?language=pt-BR"
    );
    return response.data;
  }

  async findById(id: string): Promise<MapsEntity> {
    const response = await this.http.get<FindMapByIdProps>(
      `https://valorant-api.com/v1/maps/${id}?language=pt-BR`
    );
    return response.data;
  }
}
