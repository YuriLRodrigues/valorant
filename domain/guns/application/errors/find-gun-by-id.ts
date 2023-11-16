import { GunsError } from "@/domain/core/errors/GunsError";

export class GunByIdNotFoundError extends Error implements GunsError {
  constructor(gunId: string) {
    super(`Gun with id ${gunId} not found`);
    this.message = "GunByIdNotFoundError";
  }
}
