import {AnonymousCredential, RemoteMongoClient, Stitch} from "mongodb-stitch-browser-sdk";

Stitch.initializeDefaultAppClient("laneflyten-bntik");
const client = Stitch.defaultAppClient;
const mongoClient = client.getServiceClient(
	RemoteMongoClient.factory,
	"mongodb-atlas"
);
client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
	console.log(`logged in anonymously as user ${user.id}`);
});



const db = mongoClient.db("Laneflyt");
export const laneflytCollection = db.collection("FormData");


