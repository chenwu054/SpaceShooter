#pragma strict
var speed : float;
var rb : Rigidbody;
function Start () {
	rb = GetComponent.<Rigidbody>();
	rb.velocity = transform.forward * speed;
}
function onTriggerEnter(other: Collider) {
	Debug.Log(other.name +  " " + this.name);
}

