// libs/facades/LoggerFacade.ts
import { logger } from "../services/logger";

export const LoggerFacade = {
  log: (message: string) => logger.log(message),
  error: (message: string) => logger.error(message),
  warn: (message: string) => logger.warn(message),
};
