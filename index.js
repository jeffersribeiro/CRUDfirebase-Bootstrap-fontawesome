 // Your web app's Firebase configuration
 var firebaseConfig = {
     apiKey: "AIzaSyAlZ_4TMZQVRk2gb2NvSOUhGKA55Jj6nnU",
     authDomain: "crud-5ca98.firebaseapp.com",
     databaseURL: "https://crud-5ca98.firebaseio.com",
     projectId: "crud-5ca98",
     storageBucket: "",
     messagingSenderId: "689705705708",
     appId: "1:689705705708:web:e574f9312bee691b"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 var d = new Date();
 var t = d.getTime();
 var counter = t;

 document.getElementById('form').addEventListener('submit', (e) => {
     var task = document.getElementById('task').value;
     var description = document.getElementById('description').value;
     e.preventDefault();
     createTask(task + description)
     window.alert('Adicionado com Sucesso!!')
     form.reset();
 });

 function createTask(taskName, description) {
     console.log(counter)
     counter += 1;
     console.log(counter)
     var task = {
         task: taskName,
         id: counter,
         description: description
     };
     let db = firebase.database().ref('tasks/' + counter)
     db.set(task)
 }