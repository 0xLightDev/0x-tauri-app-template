# 0x Tauri App Template

Modern desktop application template built with Tauri v2 + React 19 + TypeScript + shadcn/ui + Supabase.

Forked from [kitlib/tauri-app-template](https://github.com/kitlib/tauri-app-template).

## Architecture

- **Frontend**: React 19 + TypeScript 5.8 + Vite 7 + Tailwind CSS v4 + shadcn/ui
- **Desktop Runtime**: Tauri v2 (Rust)
- **Backend/Auth**: Supabase (client pre-configured)
- **Build**: pnpm + Vite + Cargo

## Development

```bash
pnpm install        # Install dependencies
cp .env.example .env # Configure Supabase credentials
pnpm tauri dev      # Start dev (frontend + Rust backend)
pnpm tauri build    # Build production installer
pnpm format         # Format code with Prettier
```

## Coding Standards

- TypeScript strict mode, function components with Hooks
- Path alias: `@/` maps to `src/`
- Tailwind CSS v4 + shadcn/ui component system + CSS variables for theming
- Prettier with Tailwind class sorting
- All comments, logs, and error messages in English
- Rust: `#[tauri::command]` macro for Tauri commands

## Key Conventions

- **Add shadcn/ui components**: `pnpm dlx shadcn@latest add <component>`
- **Path imports**: `import { Button } from "@/components/ui/button"`
- **Tauri commands**: Define in `src-tauri/src/lib.rs`, call with `invoke()` from frontend
- **i18n**: Use `useTranslation()` hook, translations in `src/i18n/locales/{en,zh}.json`
- **Env vars**: Vite uses `VITE_` prefix — access via `import.meta.env.VITE_*`
- **Routing**: Path-based lazy loading in `main.tsx` (`/about`, `/settings`)
- **Windows**: Create child windows via `src/lib/window.ts` utilities

## Tauri Commands

| Command | Parameters | Returns | Description |
|---------|------------|---------|-------------|
| `greet` | `name: &str` | `String` | Example greeting command |
| `update_tray_menu` | `app: AppHandle, show_text: String, quit_text: String` | `Result<(), String>` | Update system tray menu labels |

## Tauri Plugins (registered in src-tauri/src/lib.rs)

| Plugin | Purpose |
|--------|---------|
| `tauri-plugin-single-instance` | Focuses existing window on second launch |
| `tauri-plugin-opener` | Open external links |
| `tauri-plugin-global-shortcut` | Global keyboard shortcuts |
| `plugins::system_tray` | Custom system tray (icon, menu, show/hide) |
| `tauri-plugin-updater` | Auto-update (release mode only) |

## Capabilities (src-tauri/capabilities/default.json)

Windows: `main`, `about`, `settings`

Permissions include: window management (close, minimize, maximize, drag, show, hide, focus, destroy, position, size, scale), events (emit, listen), webview creation, opener, updater, global shortcuts.
