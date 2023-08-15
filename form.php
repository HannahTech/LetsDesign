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
    $services = implode(', ', $_POST['services']);
    $firstName = $_POST['firstName'];
    $emailAddress = $_POST['emailAddress'];

    $sql = "INSERT INTO userinfo(firstName, emailAddress, services) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $firstName, $emailAddress, $services);

    if ($stmt->execute()) {
        echo '<script>
                window.location.href = "services.html#step4";
              </script>';
    } else {
        echo '<script>
                window.location.href = "index.html";
              </script>';
    }

    $stmt->close();
}

$conn->close();
?>