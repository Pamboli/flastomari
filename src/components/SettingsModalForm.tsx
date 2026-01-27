import { Field, Label, Switch } from "@headlessui/react";
import { locale } from "../locale";
import { useEffect, useState } from "react";
import { AppSettings, Settings } from "../services/Settings";

export function SettingsModalForm() {
  const settingsStore = Settings.getInstance();

  const [settings, setSettings] = useState<AppSettings | null>(null);

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

  if (!settings) {
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
    </form>
  );
}
