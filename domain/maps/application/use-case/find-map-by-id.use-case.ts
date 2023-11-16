import { MapByIdNotFoundError } from "../errors/map-by-id-not-found";
import { MapsRepository } from "../repository/maps.repository";

export class FindMapByIdUseCase {
  constructor(private readonly mapsRepository: MapsRepository) {
    mapsRepository = this.mapsRepository;
  }

  async execute(id: string) {
    const mapById = await this.mapsRepository.findById(id);

    if (!mapById) {
      throw new MapByIdNotFoundError(id);
    }

    return mapById;
  }
}
