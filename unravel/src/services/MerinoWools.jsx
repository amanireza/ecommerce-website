import firestore from "../containers/config/firestore";

const cleanDocument = (doc) => ({ id: doc.id, ...doc.data() });

// function for getting all documents/wools
export const getAllMerinoWools = async () => {
	const raw = await firestore.collection("merinoYarn").get();
	console.log(raw); // Query Snapshot
	console.log(raw.docs); // QueryDocumentSnapshots
	console.log(raw.docs[0].id, raw.docs[0].data()); // String, merino object

	const cleaned = raw.docs.map(cleanDocument);
	console.log(cleaned);
	return cleaned;
};

// function for product pages
export const findByProductId = async (id) => {
	const documentSnapshot = await firestore
		.collection("merinoYarn")
		.doc(id)
		.get();

	if (!documentSnapshot.exists) {
		return null;
	}

	const cleaned = cleanDocument(documentSnapshot);
	return cleaned;
};

// function to get url of images in firebase storage
// export const getImageUrl = async () => {
// 	const [Url, setUrl] = useState("");

// 	const imageUrl = (fileName) => {
// 		storage
// 			.ref("images")
// 			.child(fileName)
// 			.getDowloadURL()
// 			.then((url) => {
// 				setUrl(url);
// 			});
// 	};
// 	return (
// 		<p>
// 			{" "}
// 			<a href={imageUrl()}>{Url()}</a>
// 		</p>
// 	);
// };
