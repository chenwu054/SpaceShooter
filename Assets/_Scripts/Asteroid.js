#pragma strict

var explosion: GameObject;
var playExplosion: GameObject;
function OnTriggerEnter(other: Collider) {
	if(other.tag == "Boundary") {
		return;
	}
	Instantiate(explosion, transform.position, transform.rotation);
	if(other.tag == "Player") {
		Instantiate(playExplosion, other.transform.position, other.transform.rotation);
	}
	Debug.Log(other.name);
	Destroy(other.gameObject);
	Destroy(this.gameObject);
}
