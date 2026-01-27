import { appDataDir } from "@tauri-apps/api/path";

export function easeOutQuart(x: number) {
  return 1 - Math.pow(1 - x, 4);
}

export async function getAppPath() {
  const path = await appDataDir();
  console.log("Ruta de la app:", path);
}

export function noop() {}
