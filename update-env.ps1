# PowerShell script to update environment variables
# Run this script to easily update your .env.local file

Write-Host "🔧 Environment Variables Setup" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green

# Get Google Client ID
$googleClientId = Read-Host "Enter your Google OAuth Client ID (or press Enter to skip)"

# Get Backend URL
$backendUrl = Read-Host "Enter your Backend URL (default: http://localhost:5000)"

if ([string]::IsNullOrWhiteSpace($backendUrl)) {
    $backendUrl = "http://localhost:5000"
}

# Create .env.local content
$envContent = @"
# Google OAuth Configuration
NEXT_PUBLIC_GOOGLE_CLIENT_ID=$googleClientId

# Backend Configuration
NEXT_PUBLIC_BACKEND_URL=$backendUrl

# Database Configuration (if needed)
DATABASE_URL=your-database-url-here
"@

# Write to .env.local
$envContent | Out-File -FilePath ".env.local" -Encoding UTF8

Write-Host "✅ .env.local file updated successfully!" -ForegroundColor Green
Write-Host "📝 File content:" -ForegroundColor Yellow
Get-Content ".env.local" | ForEach-Object { Write-Host "   $_" -ForegroundColor Gray }

Write-Host ""
Write-Host "🔄 Please restart your development server:" -ForegroundColor Cyan
Write-Host "   npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "📚 For more information, see ENVIRONMENT_SETUP.md" -ForegroundColor Cyan 