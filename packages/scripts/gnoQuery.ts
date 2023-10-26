import { GnoJSONRPCProvider } from "@gnolang/gno-js-client";
import { program } from "commander";

import { gnoFuryaNetwork } from "../networks/gno-furya";

const main = async () => {
  program.argument("realm", "realm pkg path");
  program.argument("query", "eval query");
  program.parse();
  const [realm, query] = program.args as [string, string];

  const network = gnoFuryaNetwork;
  const provider = new GnoJSONRPCProvider(network.endpoint);
  try {
    const rawRes = await provider.evaluateExpression(realm, query);
    console.log(rawRes);
  } catch (e) {
    console.error(JSON.stringify(e));
  }
};

main();
