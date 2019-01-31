var config = {
    apiKey: "AIzaSyA_VG85rI1l9gnqZSYaRsmFTn1W72hkNEU",
    authDomain: "train-times-5e9fb.firebaseapp.com",
    databaseURL: "https://train-times-5e9fb.firebaseio.com",
    projectId: "train-times-5e9fb",
    storageBucket: "train-times-5e9fb.appspot.com",
    messagingSenderId: "888485221585"
  };
  firebase.initializeApp(config);

  var trainData = firebase.database();

  $("#addTrainBtn").on("click",function(){
        var trainName = $("#trainNameForm").val().trim();
        var destination = $("#destination").val().trim();
        var firstTrain = moment($("#firstTrain").val().trim(), "HH:mm").sutract(10,"years").format("X");
        var frequency = $("#frequency").val().trim();

        var newTrain = {
            name: trainName,
            destination: destination,
            firstTrain: firstTrain,
            frequency: frequency
        }

        trainData.ref().push(newTrain);

        alert("Train Added!");

        $("#trainNameForm").val("");
        $("#destination").val("");
        $("#firstTrain").val("");
        $("#frequency").val("");
      
        return false;
      
      })
      

  trainData.ref().on("child_added", function(snapshot){
      var name = snapshot.val().name;
      var destination = snapshot.val().destination;
      var frequency = snapshot.val().frequency;
      var firstTrain = snapshot.val().firstTrain;

      var remainder = moment().diff(moment.unix(firstTrain), "minutes")%frequency;
      var minutes = frequency - remainder;
      var arrival = moment().add(minutes, "m").format("hh:mm A");

      $("#trainTable > tBody").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + arrival + "</td><td>" + minutes + "</td></tr>");
  })

