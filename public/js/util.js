export const hideArray = async (inputs) => {
  for (const input of inputs) {
    input.classList.add("hidden");
  }
};

export const unhideArray = async (inputs) => {
  for (const input of inputs) {
    input.classList.remove("hidden");
    // input.classList.remove("#fuck-forms li.hidden");
  }
};
