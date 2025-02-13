
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import AuthWrapper from "./components/AuthWrapper";
import TodoList from "./components/TodoList";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthWrapper>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/sign-in/*" element={<TodoList />} />
          <Route path="/sign-up/*" element={<TodoList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthWrapper>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
