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

interface ModuleMockInterface extends Interface {
  functions: {
    ping: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {
    Pong: TypedEventDescription<{ encodeTopics([]: []): string[] }>;
  };
}

export class ModuleMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ModuleMock;
  attach(addressOrName: string): ModuleMock;
  deployed(): Promise<ModuleMock>;

  on(event: EventFilter | string, listener: Listener): ModuleMock;
  once(event: EventFilter | string, listener: Listener): ModuleMock;
  addListener(eventName: EventFilter | string, listener: Listener): ModuleMock;
  removeAllListeners(eventName: EventFilter | string): ModuleMock;
  removeListener(eventName: any, listener: Listener): ModuleMock;

  interface: ModuleMockInterface;

  functions: {
    ping(overrides?: TransactionOverrides): Promise<ContractTransaction>;
  };

  ping(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  filters: {
    Pong(): EventFilter;
  };

  estimate: {
    ping(): Promise<BigNumber>;
  };
}