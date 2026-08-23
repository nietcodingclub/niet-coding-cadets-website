/**
 * Stub for Lovable's error reporting module.
 * The original was a platform-specific module not included in the exported repo.
 * This no-op stub keeps the build working outside the Lovable environment.
 */
export function reportLovableError(
  _error: unknown,
  _context?: Record<string, unknown>,
): void {
  // no-op outside Lovable platform
}
