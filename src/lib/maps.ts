export function getPropertyMapEmbedSrc(
  mapPlace: string | undefined,
  coordinates: { lat: number; lng: number }
): string {
  if (mapPlace) {
    return `https://maps.google.com/maps?q=${encodeURIComponent(mapPlace)}&z=15&output=embed`;
  }

  return `https://maps.google.com/maps?q=${coordinates.lat},${coordinates.lng}&z=14&output=embed`;
}
