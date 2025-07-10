import { ChatContainer } from "@/components/chat/chat-container"
import { ThemeProvider } from "@/components/theme/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-svh flex-col items-center justify-center p-4">
        <ChatContainer />
      </div>
    </ThemeProvider>
  )
}

export default App