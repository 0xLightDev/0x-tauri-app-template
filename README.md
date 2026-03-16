# Tauri App Template

基于 Tauri v2 + React 19 + TypeScript + shadcn/ui 的桌面应用模板。

## 技术栈

- **桌面框架**: [Tauri v2](https://tauri.app/)
- **前端框架**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **构建工具**: [Vite](https://vite.dev/)
- **UI 组件**: [shadcn/ui](https://ui.shadcn.com/)
- **样式方案**: [Tailwind CSS v4](https://tailwindcss.com/)

## 开始使用

### 环境要求

- Node.js >= 18
- pnpm >= 9
- Rust >= 1.70

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm tauri dev
```

### 构建发布

```bash
pnpm tauri build
```

## 添加 shadcn/ui 组件

```bash
pnpm dlx shadcn@latest add <component-name>
```

示例：

```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add input
pnpm dlx shadcn@latest add dialog
```

## 项目结构

```
.
├── src/                    # 前端源码
│   ├── components/         # React 组件
│   │   └── ui/            # shadcn/ui 组件
│   ├── lib/               # 工具函数
│   ├── App.tsx            # 主应用组件
│   └── main.tsx           # 入口文件
├── src-tauri/             # Tauri/Rust 后端
│   ├── src/               # Rust 源码
│   └── tauri.conf.json    # Tauri 配置
├── components.json        # shadcn/ui 配置
└── package.json
```

## IDE 推荐

- [VS Code](https://code.visualstudio.com/)
- [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode)
- [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## License

MIT