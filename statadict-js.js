// helper function
// takes 1-indexed starting column location and int with column width
// outputs array of 0-indexed start and end column locations
const calculatePosition = (start, width) => [start - 1, +start + +width - 1]

// Takes in a string with the contents of a DCT file
export const dctToTableInput = (dctFileText) => {
  const regex =
    /^\s*_column\((?<colStart>\d+)\)\s+(?<type>\S*)\s+(?<colName>\S*)\s+%(?<width>\d+)\S+\s+\S*"(?<description>.*)".*/;

  const arr = dctFileText.split("\n");

  // filters out rows 0, n-1 and n don't represent column data and don't match the regex
  const colsClean = arr
    .map((d) => d.match(regex))
    .filter((d) => d !== null)
    .map((d) => d.groups);

  const colsFinal = colsClean.map((d) => ({
    ...d,
    position: calculatePosition(d.colStart, d.width)
  }));

  return {
    positions: colsFinal.map((d) => d.position),
    names: colsFinal.map((d) => d.colName)
  };
}

