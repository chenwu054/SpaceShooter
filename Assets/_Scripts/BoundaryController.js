#pragma strict

function OnTriggerExit(other: Collider) {
	// Destroy everything that leaves the trigger
	Destroy(other.gameObject);
}