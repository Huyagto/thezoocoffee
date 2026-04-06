$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
$myIni = Join-Path $repoRoot '.local-mysql\my.ini'
$runDir = Join-Path $repoRoot '.local-mysql\run'
$mysqld = 'C:\wamp64\bin\mysql\mysql8.4.7\bin\mysqld.exe'

if (-not (Test-Path $mysqld)) {
    throw "Khong tim thay mysqld.exe tai $mysqld"
}

if (-not (Test-Path $myIni)) {
    throw "Khong tim thay file config tai $myIni"
}

if (-not (Test-Path $runDir)) {
    New-Item -ItemType Directory -Path $runDir | Out-Null
}

$portOpen = $false
try {
    $portOpen = Test-NetConnection -ComputerName 127.0.0.1 -Port 13306 -InformationLevel Quiet
} catch {
    $portOpen = $false
}

if ($portOpen) {
    Write-Output 'MySQL local da chay o 127.0.0.1:13306'
    exit 0
}

$existing = Get-CimInstance Win32_Process | Where-Object {
    $_.Name -eq 'mysqld.exe' -and $_.CommandLine -like "*$myIni*"
}

if (-not $existing) {
    Start-Process -FilePath $mysqld -ArgumentList "--defaults-file=$myIni", '--console' -WindowStyle Hidden
}

Start-Sleep -Seconds 5

$started = Test-NetConnection -ComputerName 127.0.0.1 -Port 13306 -InformationLevel Quiet
if (-not $started) {
    throw 'MySQL local khong mo duoc cong 13306'
}

Write-Output 'MySQL local da khoi dong tai 127.0.0.1:13306'
