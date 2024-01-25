async function getTweetsData() {
	
	const response = await fetch("../tweets.JSON");
	const tweetsList = await response.json();
	for (const key in tweetsList) {
		createPost(
		tweetsList[key].pseudo,
		tweetsList[key].id,
		 tweetsList[key].message,
		 tweetsList[key].imgurl,
		 tweetsList[key].replies,
		 tweetsList[key].retweet,
		tweetsList[key].likes
		)
	}
}

function populate() {
	let tweetsList = getTweetsData();
	
	createPost("michel","@superMicheldu93","merde ils sont a court de 86 a lidl","https://cdn.auchan.fr/media/MEDIASTEP57426383_2048x2048/B2CD/?width=1200&height=1200",45,42,1)
	//createPost("michel","@superMicheldu93","merde ils sont a court de 86 a lidl","https://cdn.auchan.fr/media/MEDIASTEP57426383_2048x2048/B2CD/?width=1200&height=1200",45,42,1)
}
function loopJson(data) {
	for (const key in data) {
	}
}
function createPost(pseudo, id, message, imgurl, replies, retweet, likes) {
	console.log("creating post")
	console.log('postcreated');
	const container = document.createElement("div");
	//container.innerHTML =
	//	"<div class='row border'><div class='col-auto'><i class='bi bi-person-circle fs-profile-grand'></i></div><div class='col'><div class='row'> <div class='col d-flex flex-row justify-content-between'><p class='fw-bold'>"+pseudo+"<span class='text-muted'>"+id+"</span></p><i class='bi bi-three-dots'></i></div><div/><div class='row'><div class='col'>"+message+"</div></div><div class='row'><div class='col'><img src='"+imgurl+"'class='img-fluid'/></div></div><div class='row text-center my-2'><div class='col'><i class='bi bi-chat'></i>"+replies+"</div><div class='col'><i class='bi bi-repeat'></i>"+retweet+"</div><div class='col'><i class='bi bi-heart'></i>"+likes+"</div><div class='col'><i class='bi bi-graph-up'></i></div><div class='col'><i class='bi bi-bookmark'></i><i class='bi bi-arrow-up'></i></div></div></div></div>";
	container.innerHTML =
		"<div class='row border'><div class='col-auto'><i class='bi bi-person-circle fs-profile-grand'></i></div><div class='col'><div class='row'> <div class='col d-flex flex-row justify-content-between'><p class='fw-bold'>" +pseudo + "<span class='text-muted'>" + id + "</span></p><i class='bi bi-three-dots'></i></div><div/><div class='row'><div class='col'>" + message + "</div></div>";
	if (imgurl != undefined) {
		container.innerHTML += "<div class='row'><div class='col'><img src='" + imgurl + "'class='img-fluid'/></div></div>";
	}
	container.innerHTML += "<div class='row text-center my-2'><div class='col'><i class='bi bi-chat'></i>" + replies + "</div><div class='col'><i class='bi bi-repeat'></i>" + retweet + "</div><div class='col'><i class='bi bi-heart'></i>" + likes + "</div><div class='col'><i class='bi bi-graph-up'></i></div><div class='col'><i class='bi bi-bookmark'></i><i class='bi bi-arrow-up'></i></div></div></div ></div > ";
	
	document.getElementById("fillArea").appendChild(container);
	//document.body.appendChild(container);
}
// <div class="container-fluid border" style="height: 100% !important">
// 			<div class="row">
// 				<div class="col-auto">
// 					<i class="bi bi-person-circle fs-profile-grand"></i>
// 				</div>
// 				<div class="col">
// 					<div class="row">
// 						<div class="col d-flex flex-row justify-content-between">
// 							<p class="fw-bold">
// 								Jean-didiax <span class="text-muted">@DarkJDduPMU</span>
// 							</p>
// 							<i class="bi bi-three-dots"></i>
// 						</div>
// 					</div>
// 					<div class="row">
// 						<div class="col">message ici</div>
// 					</div>
// 					<div class="row">
// 						<div class="col">
// 							<img
// 								src="https://files.cults3d.com/uploaders/24252348/illustration-file/8a3219aa-d7d4-4194-bede-ccc90a6f2103/B8QC6DAZ9PWRK7M2.jpg"
// 								class="img-fluid"
// 							/>
// 						</div>
// 					</div>
// 					<div class="row text-center mt-2">
// 						<div class="col">
// 							<i class="bi bi-chat"></i>
// 							19
// 						</div>
// 						<div class="col">
// 							<i class="bi bi-repeat"></i>
// 							32
// 						</div>
// 						<div class="col">
// 							<i class="bi bi-heart"></i>
// 							34
// 						</div>
// 						<div class="col">
// 							<i class="bi bi-graph-up"></i>
// 						</div>
// 						<div class="col">
// 							<i class="bi bi-bookmark"></i>
// 							<i class="bi bi-arrow-up"></i>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
