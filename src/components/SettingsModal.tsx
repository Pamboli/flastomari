import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { locale } from "../locale";
import { SettingsModalForm } from "./SettingsModalForm";
import { noop } from "../utils";
import { useEffect } from "react";
import { Settings } from "../services/Settings";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  isFirstTime: boolean;
};

export function SettingsModal({ isOpen = false, onClose, isFirstTime }: Props) {
  useEffect(() => {
    const removeFirstTime = async () => {
      await Settings.getInstance().set("isFirstTime", false);
    };

    if (isFirstTime) {
      removeFirstTime();
    }
  }, [isFirstTime]);

  return (
    <Dialog open={isOpen} onClose={noop} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 text-background">
        <DialogPanel className="w-lg space-y-4 border bg-text p-4 rounded-sm">
          <DialogTitle className="font-bold">
            {locale.settings.title}
          </DialogTitle>
          <SettingsModalForm />
          <div className="flex gap-4 w-full justify-end">
            <button
              className="bg-background text-text text-lg px-8 py-2 rounded-md hover:bg-background/80 transition-colors cursor-pointer"
              type="button"
              onClick={onClose}
            >
              {locale.common.done}
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
