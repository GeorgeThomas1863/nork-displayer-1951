export const sortArrayByDate = async (inputArray) => {
  console.log("FUCK MY FACE");
  console.log(inputArray.length);
  //return null on blank input
  if (!inputArray || !inputArray.length || !inputArray.date) return null;

  // Create a copy of the array to avoid modifying the original
  const sortArray = [...inputArray];

  //sort input array by DATE OLDEST to NEWEST
  sortArray.sort((a, b) => {
    // Convert datetime strings to Date objects if needed
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA - dateB;
  });

  return sortArray;
};
