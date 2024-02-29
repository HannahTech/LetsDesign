<?php
$servername = "localhost";
$username = "letsd851_user";
$password = "Ah8102211@";
$database = "letsd851_userinfo";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['submit'])) {
    $firstName = $_POST['firstName'];
    $emailAddress = $_POST['emailAddress'];
    $userMessage = $_POST['userMessage'];

    $sql = "INSERT INTO contact(firstName, emailAddress, userMessage) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $firstName, $emailAddress, $userMessage);

    if (!$stmt->execute()) {
        echo '<script>
            alert("We couldn\'t save your information. Please send us an email to hi@letsdesign.ca.");
            window.location.href = "index.html";
          </script>';
    } else {
        // header("Location: index.html");
        echo '<script>
            alert("Thank you! We will be in touch with you within 24 hours.");
            window.location.href = "index.html";
          </script>';
    }

    $stmt->close();
}

$conn->close();
?>