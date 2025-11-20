// Utility functions for generating avatar URLs with real human photos

/**
 * Generate a consistent seed from a name
 * This ensures the same name always gets the same avatar
 */
function getNameSeed(name: string): number {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

/**
 * Get real human avatar photo using Random User API
 * This API provides actual photos of real people
 */
export function getRealHumanAvatar(name: string, ): string {
  const seed = getNameSeed(name);
  // Random User API has 99 photos (0-98) for each gender
  const photoIndex = seed % 99;
  // Determine gender based on seed for variety
  const gender = seed % 2 === 0 ? 'men' : 'women';
  return `https://randomuser.me/api/portraits/${gender}/${photoIndex}.jpg`;
}

/**
 * Alternative: Use Pravatar which provides real-looking human avatars
 * These are consistent and look like real people
 */
export function getPravatarAvatar(name: string, size: number = 128): string {
  const seed = getNameSeed(name);
  // Pravatar has 70 different real-looking avatars
  return `https://i.pravatar.cc/${size}?img=${seed % 70}`;
}

/**
 * Get avatar URL for a user (real human photo)
 * Uses Random User API for actual human photos
 */
export function getUserAvatar(userName: string,): string {
  return getRealHumanAvatar(userName, );
}

/**
 * Get avatar URL for an agent (real human photo)
 * Uses Random User API for actual human photos
 */
export function getAgentAvatar(agentName: string, ): string {
  return getRealHumanAvatar(agentName, );
}

/**
 * Get avatar URL for a client (real human photo)
 * Uses Random User API for actual human photos
 */
export function getClientAvatar(clientName: string, ): string {
  return getRealHumanAvatar(clientName, );
}

/**
 * Get avatar with fallback support
 * Primary: Real human photos from Random User API
 */
export function getAvatarUrl(
  name: string,
 
 
): string {
  return getRealHumanAvatar(name, );
}

