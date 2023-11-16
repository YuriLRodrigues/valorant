import { MapsError } from "@/domain/core/errors/MapsError";

export class MapByIdNotFoundError extends Error implements MapsError {
  constructor(mapId: string) {
    super(`Map with id ${mapId} not found`);
    this.name = "MapByIdNotFoundError";
  }
}
