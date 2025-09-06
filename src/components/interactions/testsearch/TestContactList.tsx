import { useTestSearch } from "./useTestSearch";
import { type Contact } from "./useTestContactSearch";

export function TestContactList() {
  const { results, loading } = useTestSearch();

  return (
    <div>
      {loading && <p>Loading...</p>}
      <ul>
        {results.map((contact: Contact) => (
          <li key={contact.id}>ID: {contact.id}, Name: {contact.name}, Phone: {contact.phone}</li>
        ))}
      </ul>
    </div>
  );
}

export default TestContactList;