import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    manifest: {
      
        "short_name": "Weather",
        "name": "Weather: Do I need an umbrella?",
        "icons": [
          {
            "src": "/images/icons-vector.svg",
            "type": "image/svg+xml",
            "sizes": "512x512"
          },
          {
            "src": "/weather-192x192.png",
            "type": "image/png",
            "sizes": "192x192"
          },
          {
            "src": "/weather.png",
            "type": "image/png",
            "sizes": "512x512"
          }
        ],
        "id": "/?source=pwa",
        "start_url": "/?source=pwa",
        "background_color": "#3367D6",
        "display": "standalone",
        "scope": "/",
        "theme_color": "#3367D6",
       
        "description": "Weather forecast information"
      
    }
  })],
})
