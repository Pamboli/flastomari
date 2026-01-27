import { LazyStore } from "@tauri-apps/plugin-store";

export type AppSettings = {
  recordingStepEnabled: boolean;
  recordingDevice: string | null;
  recordingStorage: string | null;
  isFirstTime: boolean;
};

const KEYS: Record<keyof AppSettings, string> = {
  recordingDevice: "RECORDING_DEVICE",
  recordingStepEnabled: "RECORDING_STEP_ENABLED",
  recordingStorage: "RECORDING_STORAGE",
  isFirstTime: "IS_FIRST_TIME",
};

export class Settings {
  private static instance: Settings;
  private store: LazyStore;

  private constructor() {
    this.store = new LazyStore("settings.json", {
      overrideDefaults: true,
      defaults: {
        [KEYS.isFirstTime]: true,
        [KEYS.recordingStepEnabled]: true,
      },
    });
  }

  public static getInstance(): Settings {
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }

    return Settings.instance;
  }

  public async get<T extends keyof AppSettings>(
    key: T,
  ): Promise<AppSettings[T]> {
    const storeKey = KEYS[key];
    return (await this.store.get<AppSettings[T]>(storeKey)) as AppSettings[T];
  }

  async set<K extends keyof AppSettings>(
    key: K,
    value: AppSettings[K],
  ): Promise<void> {
    const storeKey = KEYS[key];
    await this.store.set(storeKey, value);
    await this.store.save();
  }

  async getSettings(): Promise<AppSettings> {
    const entries = await this.store.entries();
    const keys = Object.keys(KEYS) as (keyof typeof KEYS)[];

    const object = entries.reduce<Partial<AppSettings>>(
      (total, [key, value]) => {
        const keyName = keys.find((k) => KEYS[k] === key);

        if (!keyName) {
          return total;
        }

        return {
          ...total,
          [keyName]: value,
        };
      },
      {},
    );

    return object as AppSettings;
  }
}
