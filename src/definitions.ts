export interface BadgePlugin {
  setBadge(options: { number: number }): Promise<void>;
}
