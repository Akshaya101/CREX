import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x20a96Db001e316C402b4263212aEb10277cf8bC9";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/cYa4VGCaNJwQ9txDMfdl0OLtwohBNWE9",
  },
};