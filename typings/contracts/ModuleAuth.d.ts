/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface ModuleAuthInterface extends Interface {
  functions: {
    recoverSigner: TypedFunctionDescription<{
      encode([_hash, _signature]: [Arrayish, Arrayish]): string;
    }>;

    isValidSignature: TypedFunctionDescription<{
      encode([_hash, _signatures]: [Arrayish, Arrayish]): string;
    }>;
  };

  events: {};
}

export class ModuleAuth extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ModuleAuth;
  attach(addressOrName: string): ModuleAuth;
  deployed(): Promise<ModuleAuth>;

  on(event: EventFilter | string, listener: Listener): ModuleAuth;
  once(event: EventFilter | string, listener: Listener): ModuleAuth;
  addListener(eventName: EventFilter | string, listener: Listener): ModuleAuth;
  removeAllListeners(eventName: EventFilter | string): ModuleAuth;
  removeListener(eventName: any, listener: Listener): ModuleAuth;

  interface: ModuleAuthInterface;

  functions: {
    recoverSigner(_hash: Arrayish, _signature: Arrayish): Promise<string>;

    isValidSignature(_hash: Arrayish, _signatures: Arrayish): Promise<string>;
  };

  recoverSigner(_hash: Arrayish, _signature: Arrayish): Promise<string>;

  isValidSignature(_hash: Arrayish, _signatures: Arrayish): Promise<string>;

  filters: {};

  estimate: {
    recoverSigner(_hash: Arrayish, _signature: Arrayish): Promise<BigNumber>;

    isValidSignature(
      _hash: Arrayish,
      _signatures: Arrayish
    ): Promise<BigNumber>;
  };
}
