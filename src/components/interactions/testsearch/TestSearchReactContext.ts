import { createContext } from "react";
import { type Contact } from "./useTestContactSearch";

export interface TestSearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  results: Contact[];
  loading: boolean;
}

export const TestSearchContext = createContext<TestSearchContextType | undefined>(undefined);