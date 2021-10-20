import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection)
        .orderBy('createdAt')

       // setup realtime listener with onSnapShot 
    collectionRef.onSnapshot( (snap) => {
        let results = [];
        console.log(snap)
        snap.docs.forEach((doc) => {
            
            // needed when using realtime data
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id})
        });
        documents.value = results;
        error.value = null;
    }, (err) => {
        console.log(err.message);
        documents.value = null;
        error.value = 'could not fetch data';
    });

    return { documents, error } 
}

export default getCollection