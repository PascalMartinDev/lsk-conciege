import { useContext } from "react";
import { TestSearchContext } from "./TestSearchReactContext";

export const useTestSearch = () => {
  const context = useContext(TestSearchContext);
  if (context === undefined) {
    throw new Error('useTestSearch must be used within a TestSearchProvider');
  }
  return context;
};