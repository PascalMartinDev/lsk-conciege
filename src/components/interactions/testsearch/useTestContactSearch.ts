import { useState, useEffect, useRef } from 'react';

export interface Contact {
  id: number;
  name: string;
  phone: string;
}

export function useTestContactSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    const handler = setTimeout(() => {
      // Cancel previous request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      const controller = new AbortController();
      abortControllerRef.current = controller;

      setLoading(true);

      // Simulate API call with mock data
      Promise.resolve()
        .then(() => {
          // Filter contacts based on search term
          const filteredContacts = mockContacts.filter(
            (contact) =>
              contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              contact.phone.includes(searchTerm)
          );
          return filteredContacts;
        })
        .then((data) => {
          if (!controller.signal.aborted) {
            setResults(data);
          }
        })
        .catch((err) => {
          if (err.name !== 'AbortError') console.error(err);
        })
        .finally(() => setLoading(false));
    }, 500); // debounce delay

    return () => clearTimeout(handler);
  }, [searchTerm]);

  return { searchTerm, setSearchTerm, results, loading };
}

// Mock contacts database
const mockContacts: Contact[] = [
  { id: 1, name: 'Alice Johnson', phone: '5540101' },
  { id: 2, name: 'Bob Smith', phone: '5540202' },
  { id: 3, name: 'Carol Williams', phone: '5540303' },
  { id: 4, name: 'David Brown', phone: '5551114' },
  { id: 5, name: 'Emma Davis', phone: '5551124' },
  { id: 6, name: 'Frank Miller', phone: '5550106' },
  { id: 7, name: 'Grace Wilson', phone: '5550107' },
  { id: 8, name: 'Henry Moore', phone: '5550108' },
  { id: 9, name: 'Iris Taylor', phone: '5550109' },
  { id: 10, name: 'Jack Anderson', phone: '5550110' },
];
