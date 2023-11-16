import { MapsRepository } from "../repository/maps.repository";

export class FindMapsUseCase {
  constructor(private readonly mapsRepository: MapsRepository) {
    mapsRepository = this.mapsRepository;
  }

  async execute() {
    return await this.mapsRepository.findAll();
  }
}
