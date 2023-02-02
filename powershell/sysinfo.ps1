$IP = (get-netipaddress).ipv4address | Select-String "192*"
$env:UserName
$HOSTNAME = hostname
$VERSION = $HOST.Version.Major
$DAY = Get-Date -Format dddd
$DATE = Get-Date
$BODY = "This machine's IP is $IP. User is $env:Username. Hostname is $HOSTNAME. Powershell version is $VERSION. Today's date is $DAY, $DATE."

Write-Host($BODY)

Send-MailMessage -To "leonardf@ucmail.uc.edu" -From "will.norgren@gmail.com" -Subject "IT3038C Windows SysInfo" -Body $BODY -SmtpServer smtp.gmail.com -port 587 -UseSSL -Credential (Get-Credential)
