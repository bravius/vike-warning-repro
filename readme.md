Reproduce issue from [Vike discussion 1768](https://github.com/vikejs/vike/discussions/1768)

To run it:

```bash
git clone https://github.com/bravius/vike-warning-repro.git
cd vike-warning-repro
yarn
yarn dev
```

Result in log:

```
10:26:04 PM [vike][Warning] Server-only module /lib/testlib.server.ts (https://vike.dev/file-env) imported on the client-side by /pages/Page.telefunc.ts (building your app for production will be prevented and an error will be thrown).
```