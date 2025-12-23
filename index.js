// CSV Header Parser
// Given the first line of a comma-separated values (CSV) file, return an array containing the headings.

// The first line of a CSV file contains headings separated by commas.
// Remove any leading or trailing whitespace from each heading.

function getHeadings(csv) {
  console.log(csv);
  // split
  const split = csv.split(',');
  console.log(split);
  const clean = [];
  for (const x of split) {
    clean.push(x.trim());
  }
  console.log(clean);
  return clean;
  //return split
  //return csv;
}

getHeadings('username , email , signup date ');
