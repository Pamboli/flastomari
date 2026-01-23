# 🤬 Flastomari

¡Bienvenido! Esta es una aplicación de escritorio multiplataforma construida con **Tauri** y **React**. Está diseñada para ser ligera, rápida y fácil de usar.

---

## 📥 Descarga e Instalación

Esta aplicación es **portable**, lo que significa que no necesitas instalarla formalmente en tu sistema. Solo descarga el archivo correspondiente a tu sistema operativo:

- **Windows:** Descarga el archivo `.exe`.
- **macOS:** Descarga el archivo `.dmg`.
- **Linux:** Descarga el archivo `.AppImage`.

---

## ⚠️ Instrucciones de Primera Apertura

Como esta es una aplicación privada y no está firmada por entidades comerciales, tu sistema operativo podría mostrar una advertencia de seguridad. Aquí te explico cómo abrirla de forma segura:

### 🪟 Windows (SmartScreen)

1. Haz doble clic en el archivo `.exe`.
2. Si aparece un cuadro azul diciendo "Windows protegió su PC", haz clic en **"Más información"**.
3. Selecciona el botón **"Ejecutar de todas formas"**.

### 🍎 macOS (Gatekeeper)

1. Abre el archivo `.dmg` y arrastra la app a tu carpeta de **Aplicaciones**.
2. **NO hagas doble clic** directamente. Haz **clic derecho** (o Control + clic) sobre el icono de la app.
3. Selecciona **"Abrir"** en el menú.
4. Aparecerá un aviso de "Desarrollador no identificado". Haz clic en el botón **"Abrir"** que ahora sí aparece.
   _(Solo necesitas hacer esto la primera vez)._

### 🐧 Linux

1. Haz clic derecho sobre el archivo `.AppImage`.
2. Ve a **Propiedades > Permisos** y marca la casilla **"Permitir ejecutar el archivo como un programa"**.
3. Haz doble clic para abrir.

---

## 💾 ¿Dónde se guardan mis datos?

La aplicación utiliza una base de datos local (**SQLite**). Aunque muevas el ejecutable de sitio, tus datos y preferencias siempre se guardarán de forma segura en las carpetas del sistema:

- **Windows:** `%AppData%/com.tuapp.id`
- **macOS:** `~/Library/Application Support/com.tuapp.id`
- **Linux:** `~/.local/share/com.tuapp.id`

---

## 🛠️ Desarrollo (Para programadores)

Si quieres ejecutar este proyecto en modo desarrollo:

1. **Instalar dependencias:**

   ```bash
   npm install

   ```

2. **Correr en mode dev:**

   ```bash
   npm run tauri dev

   ```

3. **Compilar para producción:**
   ```bash
   npm run tauri build
   ```

---

Desarrollado con ❤️ usando Tauri y React.
