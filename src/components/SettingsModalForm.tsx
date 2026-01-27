import { Field, Label, Switch } from "@headlessui/react";
import { locale } from "../locale";
import { useEffect, useState } from "react";
import { AppSettings, Settings } from "../services/Settings";
import {
  checkPermission,
  PermissionResponse,
  requestPermission,
} from "tauri-plugin-audio-recorder-api";

export function SettingsModalForm() {
  const settingsStore = Settings.getInstance();

  const [settings, setSettings] = useState<AppSettings | null>(null);
  const [permission, setPermission] = useState<null | PermissionResponse>(null);

  useEffect(() => {
    const getInitialSettings = async () => {
      const result = await settingsStore.getSettings();
      setSettings(result);
    };

    getInitialSettings();
  }, [settingsStore]);

  async function handleRecordingStep(value: boolean) {
    if (!settings) return;

    const newSettings: AppSettings = {
      ...settings,
      recordingStepEnabled: value,
    };

    setSettings(newSettings);
    await settingsStore.set("recordingStepEnabled", value);
  }

  const handleRequestPermission = async () => {
    const permission = await requestPermission();
    setPermission(permission);
  };

  useEffect(() => {
    const getPermission = async () => {
      const permission = await checkPermission();
      setPermission(permission);
    };
    getPermission();
  }, []);

  if (!settings || !permission) {
    return null;
  }

  return (
    <form className="flex flex-col gap-5">
      <Field>
        <Label className="text-sm/6 font-medium text-background">
          {locale.settings.recordingStepEnabled}
        </Label>
        <Switch
          checked={settings?.recordingStepEnabled}
          onChange={handleRecordingStep}
          className="group mt-2 relative flex h-7 w-14 cursor-pointer rounded-full bg-background/10 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-background/10 outline-background outline-2"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-background shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7"
          />
        </Switch>
      </Field>
      <Field>
        <Label as="p" className="mb-2">
          {locale.settings.permission}
        </Label>
        {permission.granted ? (
          <p className="text-green-500">{locale.settings.permission_yes}</p>
        ) : (
          <div>
            <p className="text-accent mb-2">{locale.settings.permission_no}</p>
            <button
              onClick={handleRequestPermission}
              type="button"
              className="text-text bg-background px-5 py-2 rounded-md cursor-pointer"
            >
              {locale.settings.permission_request}
            </button>
          </div>
        )}
      </Field>
    </form>
  );
}
