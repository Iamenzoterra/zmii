export const APP_NAME = 'E2E Test App';

export const APP_VERSION = '0.1.0';

export function getEnvironment(): string {
  return (typeof process !== 'undefined' && process.env.NODE_ENV) || 'development';
}
