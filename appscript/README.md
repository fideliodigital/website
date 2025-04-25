# Google Apps Script Setup for Job Applications

This Google Apps Script code handles job applications submitted through the Fidelio website's career pages. It stores the applications in a Google Spreadsheet and sends email notifications for new applications.

## Setup Instructions

1. Create a new Google Spreadsheet to store the applications
2. Open the Script Editor in Google Sheets (Extensions > Apps Script)
3. Copy the contents of `Code.gs` into the Script Editor
4. Replace the following values in the code:
   - `YOUR_SPREADSHEET_ID` with your Google Spreadsheet ID (found in the spreadsheet URL)
   - `your-email@fidelio.com.co` with the email address where you want to receive notifications
5. Save the script and click on "Deploy" > "New deployment"
6. Choose "Web app" as the deployment type
7. Configure the web app:
   - Execute as: "Me"
   - Who has access: "Anyone"
8. Click "Deploy" and authorize the application
9. Copy the web app URL provided after deployment
10. Update the `YOUR_GOOGLE_APPS_SCRIPT_URL` in both job application HTML files with this URL

## Features

- Automatically creates separate sheets for different job positions
- Formats the spreadsheet with headers and column widths
- Sends email notifications for new applications
- Handles file attachments (CV/Resume)
- Provides error handling and success messages

## Spreadsheet Structure

Each position gets its own sheet with the following columns:
- Timestamp
- Posición (Position)
- Nombre (Name)
- Email
- Teléfono (Phone)
- LinkedIn
- Portfolio/GitHub
- Experiencia (Experience)

## Security Considerations

- The script uses CORS and handles data securely
- Form validation is implemented both client and server-side
- Sensitive information is stored only in the spreadsheet
- Access to the spreadsheet should be limited to HR personnel

## Maintenance

To modify the script:
1. Open the Google Apps Script editor
2. Make your changes
3. Save and create a new deployment
4. Update the web app URL in the HTML files if necessary 