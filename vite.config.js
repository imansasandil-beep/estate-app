import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // (Or vue, depending on your setup)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/estate-app/",  // <--- ADD THIS LINE! (Make sure the name matches your repo name exactly)
})