
var config = {
    apiKey: "AIzaSyD82horfNzVDNfVAhLEm1V2XlhvhK9ws1A",
    authDomain: "webapp1-9feaa.firebaseapp.com",
    databaseURL: "https://webapp1-9feaa.firebaseio.com",
    projectId: "webapp1-9feaa",
    storageBucket: "webapp1-9feaa.appspot.com",
    messagingSenderId: "152868828183"
};
firebase.initializeApp(config);


function addData(){
    alert("Thanks for participating!");
    var visitor_name = document.getElementById("name").value;
    var country = document.getElementById("country").value;

    db.collection("visitors").add({
        name: visitor_name,
        country: country
    })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            //update the products view
            getProducts();
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
}

var recentvisit = document.getElementById('recentvisit');
var db = firebase.firestore();
db.collection("visitors").get().then((querySnapshot) =>{

    recentvisit.innerHTML = "";
querySnapshot.forEach((doc) => {
    recentvisit.innerHTML += (doc.data().name + " " + "from" + " " + doc.data().country +"<br>");

});
});
