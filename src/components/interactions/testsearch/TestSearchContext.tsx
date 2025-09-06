
import { type ReactNode } from "react";
import { useTestContactSearch } from "./useTestContactSearch";
import { TestSearchContext } from "./TestSearchReactContext";

interface TestSearchProviderProps {
  children: ReactNode;
}

export function TestSearchProvider({ children }: TestSearchProviderProps) {
  const search = useTestContactSearch();
  return (
    <TestSearchContext.Provider value={search}>
      {children}
    </TestSearchContext.Provider>
  );
}


