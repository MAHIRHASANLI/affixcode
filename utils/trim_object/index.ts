export function trimObject<T extends Record<string, any>>(data: T): T {
  const trimmedData: any = {};

  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === "string") {
      trimmedData[key] = value.trim();
    } else if (
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value)
    ) {
      trimmedData[key] = trimObject(value);
    } else {
      trimmedData[key] = value;
    }
  });

  return trimmedData;
}
