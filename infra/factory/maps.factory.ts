import { FindMapsUseCase } from "@/domain/maps/application/use-case/find-maps-.use-case";
import { MapsController } from "../controllers/maps.controller";
import { FindMapByIdUseCase } from "@/domain/maps/application/use-case/find-map-by-id.use-case";
import MapsGateway from "../gateway/maps.gateway";
import { HttpService } from "../http/http-service";

export const MapsFactory = () => {
  const http = new HttpService();

  const mapsGateway = new MapsGateway(http);

  const findMapsUseCase = new FindMapsUseCase(mapsGateway);
  const findMapByIdUseCase = new FindMapByIdUseCase(mapsGateway);

  const mapsController = new MapsController(
    findMapByIdUseCase,
    findMapsUseCase
  );

  return mapsController;
};
