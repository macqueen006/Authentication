export interface ServiceContainer {
    register(provider: any): void;
    singleton<T>(key: string, resolver: () => T): void;
    bind<T>(key: string, resolver: () => T): void;
    resolve<T>(key: string): T;
  }
  