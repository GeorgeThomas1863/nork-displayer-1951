export const sortArrayByDate = async (inputArray) => {
  //return null on blank input
  if (!inputArray) return null;

  // Create a copy of the array to avoid modifying the original
  const sortArray = [...inputArray];

  //sort input array by DATE OLDEST to NEWEST
  sortArray.sort((a, b) => {
    // Convert datetime strings to Date objects if needed
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB - dateA;
  });

  return sortArray;
};
