import { WebPlugin } from '@capacitor/core';

import type { BadgePlugin } from './definitions';

export class BadgeWeb extends WebPlugin implements BadgePlugin {
  /**
   * Set the badge number on web (not supported, so we log a warning).
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async setBadge(options: { number: number }): Promise<void> {
    console.warn('BadgePlugin: setBadge is not supported on web.');
    return;
  }

  /**
   * Optional: Clear the badge number on web (log a warning).
   */
  async clearBadge(): Promise<void> {
    console.warn('BadgePlugin: clearBadge is not supported on web.');
    return;
  }
}
