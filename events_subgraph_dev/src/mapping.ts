import {
  AdminUpdated as AdminUpdatedEvent,
  ImplementationUpdated as ImplementationUpdatedEvent,
  PendingImplementationUpdated as PendingImplementationUpdatedEvent
} from "../generated/GraphProxy/GraphProxy"
import {
  AdminUpdated,
  ImplementationUpdated,
  PendingImplementationUpdated
} from "../generated/schema"

export function handleAdminUpdated(event: AdminUpdatedEvent): void {
  let entity = new AdminUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleImplementationUpdated(
  event: ImplementationUpdatedEvent
): void {
  let entity = new ImplementationUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handlePendingImplementationUpdated(
  event: PendingImplementationUpdatedEvent
): void {
  let entity = new PendingImplementationUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingImplementation = event.params.oldPendingImplementation
  entity.newPendingImplementation = event.params.newPendingImplementation
  entity.save()
}
