// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AdminUpdated extends ethereum.Event {
  get params(): AdminUpdated__Params {
    return new AdminUpdated__Params(this);
  }
}

export class AdminUpdated__Params {
  _event: AdminUpdated;

  constructor(event: AdminUpdated) {
    this._event = event;
  }

  get oldAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ImplementationUpdated extends ethereum.Event {
  get params(): ImplementationUpdated__Params {
    return new ImplementationUpdated__Params(this);
  }
}

export class ImplementationUpdated__Params {
  _event: ImplementationUpdated;

  constructor(event: ImplementationUpdated) {
    this._event = event;
  }

  get oldImplementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newImplementation(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PendingImplementationUpdated extends ethereum.Event {
  get params(): PendingImplementationUpdated__Params {
    return new PendingImplementationUpdated__Params(this);
  }
}

export class PendingImplementationUpdated__Params {
  _event: PendingImplementationUpdated;

  constructor(event: PendingImplementationUpdated) {
    this._event = event;
  }

  get oldPendingImplementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newPendingImplementation(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class GraphProxy extends ethereum.SmartContract {
  static bind(address: Address): GraphProxy {
    return new GraphProxy("GraphProxy", address);
  }

  admin(): Address {
    let result = super.call("admin", "admin():(address)", []);

    return result[0].toAddress();
  }

  try_admin(): ethereum.CallResult<Address> {
    let result = super.tryCall("admin", "admin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  implementation(): Address {
    let result = super.call("implementation", "implementation():(address)", []);

    return result[0].toAddress();
  }

  try_implementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "implementation",
      "implementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingImplementation(): Address {
    let result = super.call(
      "pendingImplementation",
      "pendingImplementation():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_pendingImplementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "pendingImplementation",
      "pendingImplementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _impl(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _admin(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class AcceptUpgradeCall extends ethereum.Call {
  get inputs(): AcceptUpgradeCall__Inputs {
    return new AcceptUpgradeCall__Inputs(this);
  }

  get outputs(): AcceptUpgradeCall__Outputs {
    return new AcceptUpgradeCall__Outputs(this);
  }
}

export class AcceptUpgradeCall__Inputs {
  _call: AcceptUpgradeCall;

  constructor(call: AcceptUpgradeCall) {
    this._call = call;
  }
}

export class AcceptUpgradeCall__Outputs {
  _call: AcceptUpgradeCall;

  constructor(call: AcceptUpgradeCall) {
    this._call = call;
  }
}

export class AcceptUpgradeAndCallCall extends ethereum.Call {
  get inputs(): AcceptUpgradeAndCallCall__Inputs {
    return new AcceptUpgradeAndCallCall__Inputs(this);
  }

  get outputs(): AcceptUpgradeAndCallCall__Outputs {
    return new AcceptUpgradeAndCallCall__Outputs(this);
  }
}

export class AcceptUpgradeAndCallCall__Inputs {
  _call: AcceptUpgradeAndCallCall;

  constructor(call: AcceptUpgradeAndCallCall) {
    this._call = call;
  }

  get data(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class AcceptUpgradeAndCallCall__Outputs {
  _call: AcceptUpgradeAndCallCall;

  constructor(call: AcceptUpgradeAndCallCall) {
    this._call = call;
  }
}

export class AdminCall extends ethereum.Call {
  get inputs(): AdminCall__Inputs {
    return new AdminCall__Inputs(this);
  }

  get outputs(): AdminCall__Outputs {
    return new AdminCall__Outputs(this);
  }
}

export class AdminCall__Inputs {
  _call: AdminCall;

  constructor(call: AdminCall) {
    this._call = call;
  }
}

export class AdminCall__Outputs {
  _call: AdminCall;

  constructor(call: AdminCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class ImplementationCall extends ethereum.Call {
  get inputs(): ImplementationCall__Inputs {
    return new ImplementationCall__Inputs(this);
  }

  get outputs(): ImplementationCall__Outputs {
    return new ImplementationCall__Outputs(this);
  }
}

export class ImplementationCall__Inputs {
  _call: ImplementationCall;

  constructor(call: ImplementationCall) {
    this._call = call;
  }
}

export class ImplementationCall__Outputs {
  _call: ImplementationCall;

  constructor(call: ImplementationCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class PendingImplementationCall extends ethereum.Call {
  get inputs(): PendingImplementationCall__Inputs {
    return new PendingImplementationCall__Inputs(this);
  }

  get outputs(): PendingImplementationCall__Outputs {
    return new PendingImplementationCall__Outputs(this);
  }
}

export class PendingImplementationCall__Inputs {
  _call: PendingImplementationCall;

  constructor(call: PendingImplementationCall) {
    this._call = call;
  }
}

export class PendingImplementationCall__Outputs {
  _call: PendingImplementationCall;

  constructor(call: PendingImplementationCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class SetAdminCall extends ethereum.Call {
  get inputs(): SetAdminCall__Inputs {
    return new SetAdminCall__Inputs(this);
  }

  get outputs(): SetAdminCall__Outputs {
    return new SetAdminCall__Outputs(this);
  }
}

export class SetAdminCall__Inputs {
  _call: SetAdminCall;

  constructor(call: SetAdminCall) {
    this._call = call;
  }

  get _newAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetAdminCall__Outputs {
  _call: SetAdminCall;

  constructor(call: SetAdminCall) {
    this._call = call;
  }
}

export class UpgradeToCall extends ethereum.Call {
  get inputs(): UpgradeToCall__Inputs {
    return new UpgradeToCall__Inputs(this);
  }

  get outputs(): UpgradeToCall__Outputs {
    return new UpgradeToCall__Outputs(this);
  }
}

export class UpgradeToCall__Inputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }

  get _newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeToCall__Outputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }
}
