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

interface WalletFactoryInterface extends Interface {
  functions: {
    factory: TypedFunctionDescription<{ encode([]: []): string }>;

    main: TypedFunctionDescription<{ encode([]: []): string }>;

    deploy: TypedFunctionDescription<{ encode([_owner]: [string]): string }>;

    addressOf: TypedFunctionDescription<{ encode([_owner]: [string]): string }>;
  };

  events: {};
}

export class WalletFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): WalletFactory;
  attach(addressOrName: string): WalletFactory;
  deployed(): Promise<WalletFactory>;

  on(event: EventFilter | string, listener: Listener): WalletFactory;
  once(event: EventFilter | string, listener: Listener): WalletFactory;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): WalletFactory;
  removeAllListeners(eventName: EventFilter | string): WalletFactory;
  removeListener(eventName: any, listener: Listener): WalletFactory;

  interface: WalletFactoryInterface;

  functions: {
    factory(): Promise<string>;

    main(): Promise<string>;

    deploy(
      _owner: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    addressOf(_owner: string): Promise<string>;
  };

  factory(): Promise<string>;

  main(): Promise<string>;

  deploy(
    _owner: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  addressOf(_owner: string): Promise<string>;

  filters: {};

  estimate: {
    factory(): Promise<BigNumber>;

    main(): Promise<BigNumber>;

    deploy(_owner: string): Promise<BigNumber>;

    addressOf(_owner: string): Promise<BigNumber>;
  };
}