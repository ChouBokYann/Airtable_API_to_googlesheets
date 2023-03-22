// This is a replica of the original script on Google Apps script (Javascript based)

// To request data from the Airtable API itself
function requestAirTable(url, offset) {

  const api_key = 'INSERT_YOUR_API_KEY_HERE';

  if (offset !== undefined) {
   url = url + '?offset=' + offset
  }
  const headers = {
    "Authorization": "Bearer " + api_key,
    "Content-Type": "application/json"
  }
  const options = {
    headers: headers,
    method: "GET"
  }

  const response = UrlFetchApp.fetch(url, options).getContentText();
  const result = JSON.parse(response)

  return result;
}

// To get all records from the Airtable API if there is an offset
function getAllRecordsOutbound() {
  const url = 'INSERT_URL_HERE';
  let records = [];
  const inital_response = requestAirTable(url);
  records.push(inital_response.records)
  let offset = inital_response.offset;

  if (offset !== undefined) {
    do {
      const response = requestAirTable(url, offset)
      records.push(response.records)
      offset = response.offset
    } while (offset !== undefined)
  }
  records = records.flat();
  console.log(`records count: ${records.length}`)

  return records;
}

// To be able to push all the records to the Google Sheet. Note that all the fields specified here must be the same as the fields in the Airtable API
function importOutbound() {
  let data = getAllRecordsOutbound();
  let sheet_data = [];
  sheet_data.push(['DUMMY FIELDS'])
  for (let i=0; i<data.length; i++) {
    const fields = data[i].fields;
    sheet_data.push([
      fields['DUMMY FIELDS']
    ])
  }
  const ss = SpreadsheetApp.openById('SPREADSHEET_ID');
  const sheet = ss.getSheetByName('SHEET_NAME');
  sheet.getDataRange().clearContent();
  const range = sheet.getRange(1,1,sheet_data.length,sheet_data[0].length);
  range.setValues(sheet_data)
}

