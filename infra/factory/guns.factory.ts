import { FindGunByIdUseCase } from "@/domain/guns/application/use-case/find-gun-by-id.use-case";
import { GunsController } from "../controllers/guns.controller";
import { FindGunsUseCase } from "@/domain/guns/application/use-case/find-guns.use-case";
import { GunsGateway } from "../gateway/guns.gateway";
import { HttpService } from "../http/http-service";

export const GunsFactory = () => {
  const http = new HttpService();

  const gunsGateway = new GunsGateway(http);

  const findGuns = new FindGunsUseCase(gunsGateway);
  const findGunById = new FindGunByIdUseCase(gunsGateway);

  const gunsController = new GunsController(findGuns, findGunById);

  return gunsController;
};
