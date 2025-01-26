import { createRoot } from 'react-dom/client'

import '@styles/index.css'

createRoot(document.getElementById('root')!).render(
  <div className="h-screen flex flex-col justify-center items-center">
    <h1 className="text-gray-900 text-2xl">React Shadcn</h1>
  </div>,
)
