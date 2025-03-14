export function delayUntil(
  maxMs: number,
  isReady: () => boolean | undefined | Promise<boolean | undefined>,
  timeoutTime = 100,
): Promise<void> {
  const maxTime = Date.now() + maxMs;

  async function hackyFix(resolve: () => void) {
    if ((await isReady()) || Date.now() >= maxTime) {
      resolve();
    } else {
      setTimeout(() => {
        hackyFix(resolve);
      }, timeoutTime);
    }
  }

  return new Promise((resolve) => hackyFix(resolve));
}
