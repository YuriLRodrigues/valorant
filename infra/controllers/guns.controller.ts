import { FindGunByIdUseCase } from "@/domain/guns/application/use-case/find-gun-by-id.use-case";
import { FindGunsUseCase } from "@/domain/guns/application/use-case/find-guns.use-case";

export class GunsController {
  constructor(
    private readonly findGunsUseCase: FindGunsUseCase,
    private readonly findGunsByIdUseCase: FindGunByIdUseCase
  ) {
    findGunsByIdUseCase = this.findGunsByIdUseCase;
    findGunsUseCase = this.findGunsUseCase;
  }

  async findAll() {
    return await this.findGunsUseCase.execute();
  }

  async findById(id: string) {
    return await this.findGunsByIdUseCase.execute(id);
  }
}
