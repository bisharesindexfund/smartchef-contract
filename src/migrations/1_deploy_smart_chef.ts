import { SMART_CHEF } from "config";

const SmartChef = artifacts.require("SmartChef");

export = async function (deployer) {
  await deployer.deploy(
    SmartChef,
    SMART_CHEF.LP_TOKEN,
    SMART_CHEF.REWARD_TOKEN,
    SMART_CHEF.REWARD_PER_BLOCK,
    SMART_CHEF.START_BLOCK,
    SMART_CHEF.BONUS_END_BLOCK,
  );
} as Migration;
