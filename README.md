# React REST Github 

React REST Github app uses the GitHub API to search for repositories by keyword. 

The user enters a keyword and shows repositories that contain that keyword. 

Technologies used:

- React
- Axios for requests
- TypeScript

## Install

First things first.

```bash
npm install
```

Then install axios.

```bash
npm install axios
```

Now...

```bash
npm run dev
```

## Configure Port

Update Vite configuration `vite.config.ts`.

```bash
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
})
```

## Remove unused things


