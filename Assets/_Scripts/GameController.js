#pragma strict

var hazard: GameObject;
var hazardSpawnPosition: Vector3;
var spawnWait: float;
var spawnStart: float;
var waveWait: float;
function Start () {
	SpawnWaves();
}

function SpawnWaves() {
	yield WaitForSeconds(spawnStart);
	while(true) {
		for(var i = 0; i < 10; i++) {
			var spawnPosition: Vector3 = new Vector3(Random.Range(-hazardSpawnPosition.x,hazardSpawnPosition.x), hazardSpawnPosition.y, hazardSpawnPosition.z);
			var spawnRotation: Quaternion = Quaternion.identity;
			Instantiate(hazard, spawnPosition, spawnRotation);
			yield WaitForSeconds(spawnWait);	
		}
		yield WaitForSeconds(waveWait);
	}
}

