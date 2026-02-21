import { describe, it, expect, afterEach } from 'vitest';
import { APP_NAME, APP_VERSION, getEnvironment } from './appConfig';

describe('appConfig', () => {
  it('APP_NAME equals E2E Test App', () => {
    expect(APP_NAME).toBe('E2E Test App');
  });

  it('APP_VERSION equals 0.1.0', () => {
    expect(APP_VERSION).toBe('0.1.0');
  });

  describe('getEnvironment', () => {
    const originalEnv = process.env.NODE_ENV;

    afterEach(() => {
      process.env.NODE_ENV = originalEnv;
    });

    it('returns development by default when NODE_ENV is not set', () => {
      delete process.env.NODE_ENV;
      expect(getEnvironment()).toBe('development');
    });

    it('returns NODE_ENV value when set', () => {
      process.env.NODE_ENV = 'production';
      expect(getEnvironment()).toBe('production');
    });
  });
});
