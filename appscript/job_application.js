// Spreadsheet ID where the form data will be stored
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';

// Function to handle POST requests
function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    
    // Get the appropriate sheet based on the position
    const sheetName = data.position.replace(/\s+/g, '_').toLowerCase();
    let sheet = spreadsheet.getSheetByName(sheetName);
    
    // If the sheet doesn't exist, create it and add headers
    if (!sheet) {
      sheet = spreadsheet.insertSheet(sheetName);
      sheet.appendRow([
        'Timestamp',
        'Posición',
        'Nombre',
        'Email',
        'Teléfono',
        'LinkedIn',
        'Portfolio/GitHub',
        'Experiencia'
      ]);
    }
    
    // Prepare the row data
    const rowData = [
      new Date(), // Timestamp
      data.position,
      data.nombre,
      data.email,
      data.telefono,
      data.linkedin || 'N/A',
      data.portfolio || 'N/A',
      data.experiencia
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Send email notification
    sendEmailNotification(data);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Datos guardados correctamente'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log the error and return error response
    console.error('Error:', error);
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to send email notification
function sendEmailNotification(data) {
  const recipientEmail = 'your-email@fidelio.com.co'; // Change this to your email
  const subject = `Nueva aplicación para ${data.position}`;
  const body = `
    Se ha recibido una nueva aplicación:
    
    Posición: ${data.position}
    Nombre: ${data.nombre}
    Email: ${data.email}
    Teléfono: ${data.telefono}
    LinkedIn: ${data.linkedin || 'N/A'}
    Portfolio/GitHub: ${data.portfolio || 'N/A'}
    
    Experiencia:
    ${data.experiencia}
  `;
  
  MailApp.sendEmail(recipientEmail, subject, body);
}

// Function to create initial setup
function createInitialSetup() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    
    // Create sheets for each position if they don't exist
    const positions = ['asistente_contable', 'analista_datos'];
    
    positions.forEach(position => {
      let sheet = spreadsheet.getSheetByName(position);
      if (!sheet) {
        sheet = spreadsheet.insertSheet(position);
        sheet.appendRow([
          'Timestamp',
          'Posición',
          'Nombre',
          'Email',
          'Teléfono',
          'LinkedIn',
          'Portfolio/GitHub',
          'Experiencia'
        ]);
      }
    });
    
    // Set up better formatting
    positions.forEach(position => {
      const sheet = spreadsheet.getSheetByName(position);
      
      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, 8);
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('#ffffff');
      headerRange.setFontWeight('bold');
      
      // Set column widths
      sheet.setColumnWidth(1, 150); // Timestamp
      sheet.setColumnWidth(2, 120); // Posición
      sheet.setColumnWidth(3, 150); // Nombre
      sheet.setColumnWidth(4, 200); // Email
      sheet.setColumnWidth(5, 120); // Teléfono
      sheet.setColumnWidth(6, 150); // LinkedIn
      sheet.setColumnWidth(7, 150); // Portfolio
      sheet.setColumnWidth(8, 400); // Experiencia
      
      // Freeze header row
      sheet.setFrozenRows(1);
    });
    
  } catch (error) {
    console.error('Error en setup inicial:', error);
  }
} 