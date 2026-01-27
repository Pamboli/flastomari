import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { locale } from "../locale";
import { SettingsModalForm } from "./SettingsModalForm";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  isFirstTime: boolean;
};

export function SettingsModal({ isOpen = false, onClose }: Props) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 text-background">
        <DialogPanel className="w-lg space-y-4 border bg-text p-4 rounded-sm">
          <DialogTitle className="font-bold">
            {locale.settings.title}
          </DialogTitle>
          <SettingsModalForm />
          <div className="flex gap-4">
            <button onClick={onClose}>Cancel</button>
            <button onClick={onClose}>Deactivate</button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
