## Steps to reproduce

```bash
# 1. Install
pnpm run install

# 2. Run clean build (should work)
pnpm run build

# 3. Run build with .next cache (should hang)
pnpm run build
```