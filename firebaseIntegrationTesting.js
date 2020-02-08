<body>
  <!-- Insert these scripts at the bottom of the HTML, but before you use any Firebase services -->

  <!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
  <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js"></script>

  <!-- If you enabled Analytics in your project, add the Firebase SDK for Analytics -->
  <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-analytics.js"></script>

  <!-- Add Firebase products that you want to use -->
  <!-- <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-auth.js"></script> -->
  <!-- <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-firestore.js"></script> -->
  <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-database.js"></script>

<script>
const firebaseConfig = {
    apiKey: "AIzaSyDQ3gaHvcFpEkusY-VAS2sgUru_terdUVA",
    authDomain: "hitmeservermate.firebaseapp.com",
    databaseURL: "https://hitmeservermate.firebaseio.com",
    projectId: "hitmeservermate",
    storageBucket: "hitmeservermate.appspot.com",
    messagingSenderId: "169795236310",
    appId: "1:169795236310:web:3a18388d3336351bd7b477"
  };
  firebase.initializeApp(firebaseConfig);

  var defaultDatabase = firebase.database();

</script>

</body>