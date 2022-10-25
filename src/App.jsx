import { useState } from "react";
import "./App.css";
import { Posts } from "./Posts";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"; 
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <h1>Hello world</h1>
      <Posts />
      <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
}

export default App;





