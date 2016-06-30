#pragma strict

class Boundary {
	var xMin : float;
	var xMax : float;
	var yMin : float;
	var yMax : float;
}

var speed : float = 1.0;
var rb : Rigidbody; 
var boundary : Boundary;
var tilt : float = 1.0;
var fireRate : float;
private var nextFire : float = 0.0;
var shot : GameObject;
var shotSpawn : Transform;

function Start () {
// to get the reference to the rigidbody object
	rb = GetComponent.<Rigidbody>();
}
function Update() {
	
	if(Input.GetButton("Fire1") && Time.time > nextFire) {
		nextFire = Time.time + fireRate;
		Instantiate(shot, shotSpawn.position, shotSpawn.rotation); // instantiate a new object
	}
}

function FixedUpdate() {
	var y : float = Input.GetAxis ("Vertical") * speed;
	var x : float = Input.GetAxis ("Horizontal") * speed;
	var movement : Vector3 = new Vector3(x, 0.0, y);
	rb.velocity = movement * speed;
	rb.position = Vector3(
	Mathf.Clamp(rb.position.x, boundary.xMin, boundary.xMax),
	0.0,
	Mathf.Clamp(rb.position.z, boundary.yMin, boundary.yMax));
	rb.rotation = Quaternion.Euler (0.0f, 0.0f, rb.velocity.x * -tilt);

}


