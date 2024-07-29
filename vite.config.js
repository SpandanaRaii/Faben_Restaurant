import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// const ipAddress =  '192.168.0.120';
const ipAddress =  'localhost';

export default defineConfig({
  plugins: [react()],
  server:{
    host:ipAddress,
  }

})

