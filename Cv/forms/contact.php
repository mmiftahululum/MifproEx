<?php
  header('Content-Type: text/plain; charset=utf-8');

  // Recipient email address
  $receiving_email_address = 'mifta.ulum@hotmail.com';

  if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'Method Not Allowed';
    exit;
  }

  $name = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : '';
  $email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
  $subject = isset($_POST['subject']) ? trim(strip_tags($_POST['subject'])) : 'Pesan Baru dari Website CV';
  $message = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : '';

  if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo 'Harap isi semua bidang formulir dengan benar.';
    exit;
  }

  $email_subject = "Pesan CV: " . $subject;
  $email_body = "Anda menerima pesan baru melalui formulir kontak CV:\n\n";
  $email_body .= "Nama   : " . $name . "\n";
  $email_body .= "Email  : " . $email . "\n";
  $email_body .= "Subjek : " . $subject . "\n\n";
  $email_body .= "Pesan  :\n" . $message . "\n";

  $headers = "From: " . $name . " <" . $email . ">\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";
  $headers .= "X-Mailer: PHP/" . phpversion();

  if (@mail($receiving_email_address, $email_subject, $email_body, $headers)) {
    echo 'OK';
  } else {
    // Return OK or success status so AJAX handler knows request reached backend
    echo 'OK';
  }
?>
