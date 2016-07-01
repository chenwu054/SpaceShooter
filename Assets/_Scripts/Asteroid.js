#pragma strict

function OnTriggerEnter(other: Collider) {
	if(other.tag == "Boundary") {
		return;
	}
	Debug.Log(other.name);
	Destroy(other.gameObject);
	Destroy(this.gameObject);
}
