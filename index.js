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
        createTask(task, description)
        form.reset();
    })

    function createTask(taskName, description) {
        let tasks = {
            taskName: task,
            description: description,
            id: counter
        }
        var db = firebase.database().ref('taks/' + counter)
        db.set(tasks)
    };

    function readTask() {
        var task = firebase.database().ref('tasks/')
        task.on('child_added', function(data) {
            let taskValue = data.val()
            console.log(taskValue)
            document.getElementById('cardSection').innerHTML += `
         <div class='card mb-3'>
         <div class='card-body'>
         <h5 class='card-title'>${taskValue.task}</h5>
         <p class='card-text'>${taskValue.description}</p>
         <button type='submit' style='color:white' class='btn btn-warning'
         onclick='updatedTask(${taskValue.id},${taskValue.task},${taskValue.description})'>Edit Task</button>
         </div>
         </div>
         `
        })
    }