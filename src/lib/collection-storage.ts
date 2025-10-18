export function loadHeadlineCollection<T>(key: string): Map<number, T> | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const stored = localStorage.getItem(key);
  if (!stored) {
    return null;
  }

  try {
    const parsed = JSON.parse(stored);

    if (Array.isArray(parsed)) {
      const tuples: [number, T][] = parsed
        .filter((entry): entry is [unknown, unknown] => Array.isArray(entry) && entry.length === 2)
        .map(([k, v]) => [Number(k as number), v as T]);

      if (tuples.length > 0) {
        return new Map<number, T>(tuples);
      }
    }

    if (parsed && typeof parsed === 'object') {
      const tuples: [number, T][] = Object.entries(parsed).map(([k, v]) => [Number(k), v as T]);
      if (tuples.length > 0) {
        return new Map<number, T>(tuples);
      }
    }
  } catch (error) {
    console.warn(`Failed to parse collection for key "${key}"`, error);
  }

  return null;
}

export function saveHeadlineCollection<T>(key: string, collection: Map<number, T>): void {
  try {
    const serialised = JSON.stringify(Array.from(collection.entries()));
    localStorage.setItem(key, serialised);
  } catch (error) {
    console.warn(`Failed to persist collection for key "${key}"`, error);
  }
}
