#pragma strict
var lifeTime: float;

function Start () {
	Destroy(gameObject, lifeTime);
}

