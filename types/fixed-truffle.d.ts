interface Deployer {
  deploy<T extends Truffle.ContractInstance, C extends Truffle.Contract<T>>(
    contract: C,
    ...args: Parameters<C["new"]>,
  ): Promise<T> & Deployer;
  then(cb: () => unknown): void;
}

type Migration = (deploy: Deployer, network: string, accounts: Truffle.Accounts) => void;

declare namespace Truffle {
  import type { AbiItem } from "web3-utils";

  interface RawArtifact {
    readonly contractName: string;
    readonly abi: AbiItem[];
    readonly metadata: string;
    readonly bytecode: string;
    readonly deployedBytecode: string;
    readonly immutableReferences: unknown;
    readonly generatedSources: unknown;
    readonly deployedGeneratedSources: unknown;
    readonly sourceMap: string;
    readonly deployedSourceMap: string;
    readonly source: string;
    readonly sourcePath: string;
    readonly ast: unknown;
    readonly legacyAST: unknown;
    readonly compiler: {
      readonly name: string;
      readonly version: string;
    };
    readonly networks: unknown;
    readonly schemaVersion: string;
    readonly updatedAt: string;
    readonly devdoc: unknown;
    readonly userdoc: unknown;
  }
}
