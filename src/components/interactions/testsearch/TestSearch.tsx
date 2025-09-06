import { TestSearchProvider } from "./TestSearchContext";
import { TestSearchInput } from "./TestSearchInput";
import { TestContactList } from "./TestContactList";

export function TestSearch() {
  return (
    <TestSearchProvider>
      <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
        <h2>Contact Search</h2>
        <TestSearchInput />
        <TestContactList />
      </div>
    </TestSearchProvider>
  );
}

export default TestSearch;