#pragma strict

var tumble: float;

function Start () {
	var rb : Rigidbody = GetComponent.<Rigidbody>();
	rb.angularVelocity = Random.insideUnitSphere * tumble;
}

