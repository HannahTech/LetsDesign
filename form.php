<?php
$servername = "localhost";
$username = "letsd851_user";
$password = "Ah8102211@";
$database = "letsd851_userinfo";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . $conn->connect_error);
}

$alertMessage = "";

if (isset($_POST['submit'])) {
    $services = implode(', ', $_POST['services']);
    $firstName = $_POST['firstName'];
    $emailAddress = $_POST['emailAddress'];

    if (empty($emailAddress)) {
        $alertMessage = "Please fill your email address.";

    }
    $sql = "INSERT INTO userinfo(firstName, emailAddress, services) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $firstName, $emailAddress, $services);

    if (!$stmt->execute()) {
        $alertMessage = "We couldn't save your information. Please send us an email to send you the Price List.";

    } else {
        header("Location: services.html?step=4");
        exit;
    }

    $stmt->close();
}

$conn->close();
?>
