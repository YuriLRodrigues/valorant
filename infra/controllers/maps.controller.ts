import { FindMapByIdUseCase } from "@/domain/maps/application/use-case/find-map-by-id.use-case";
import { FindMapsUseCase } from "@/domain/maps/application/use-case/find-maps-.use-case";

export class MapsController {
  constructor(
    private readonly findMapByIdUseCase: FindMapByIdUseCase,
    private readonly findMapsUseCase: FindMapsUseCase
  ) {
    findMapByIdUseCase = this.findMapByIdUseCase;
    findMapsUseCase = this.findMapsUseCase;
  }

  async findAll() {
    return await this.findMapsUseCase.execute();
  }

  async findById(id: string) {
    return await this.findMapByIdUseCase.execute(id);
  }
}
