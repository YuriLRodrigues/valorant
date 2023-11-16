import { GunByIdNotFoundError } from "../errors/find-gun-by-id";
import { GunsRepository } from "../repository/guns.repository";

export class FindGunByIdUseCase {
  constructor(private readonly gunsRepository: GunsRepository) {
    gunsRepository = this.gunsRepository;
  }

  async execute(id: string) {
    const gunById = await this.gunsRepository.findById(id);

    if (!gunById) {
      throw new GunByIdNotFoundError(id);
    }

    return gunById;
  }
}
