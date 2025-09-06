import { useTestSearch } from "./useTestSearch";

export function TestSearchInput() {
  const { searchTerm, setSearchTerm } = useTestSearch();

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search contacts..."
      style={{ width: "100%", padding: "8px", fontSize: "16px" }}
    />
  );
}