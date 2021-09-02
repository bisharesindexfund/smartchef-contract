declare module "config" {
  export const PRIVATE_KEY: string;
  export const BSCSCAN_KEY: string;
  export const MIGRATION_DIRECTORY: string;
  export const GAS_PRICE: number | string;
  export const SMART_CHEF: {
    readonly LP_TOKEN: string;
    readonly REWARD_TOKEN: string;
    readonly REWARD_PER_BLOCK: number | string;
    readonly START_BLOCK: number | string;
    readonly BONUS_END_BLOCK: number | string;
  }
}
