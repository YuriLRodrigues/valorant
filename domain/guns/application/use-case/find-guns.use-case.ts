import { GunsRepository } from "../repository/guns.repository";

export class FindGunsUseCase {
  constructor(private readonly gunsRepository: GunsRepository) {
    gunsRepository = this.gunsRepository;
  }

  async execute() {
    return await this.gunsRepository.findAll();
  }
}
