// export const buildCollapseContainer = (title, content, isExpanded = false, className = '') => {
export const buildCollapseContainer = (inputObj) => {
  if (!inputObj) return null;
  const { title, content, isExpanded = false, className = "" } = inputObj;

  // Create container
  const container = document.createElement("div");
  container.className = `collapse-container ${className}`;

  // Create header with arrow and title
  const collapseHeader = document.createElement("div");
  collapseHeader.className = "collapse-header";

  const arrow = document.createElement("div");
  arrow.className = isExpanded ? "collapse-arrow expanded" : "collapse-arrow";

  const titleElement = document.createElement("div");
  titleElement.className = "collapse-title";
  titleElement.textContent = title;

  // Create content wrapper
  const collapseContent = document.createElement("div");
  collapseContent.className = isExpanded ? "collapse-content" : "collapse-content hidden";
  collapseContent.append(content);

  // Add event listener for toggling
  collapseHeader.addEventListener("click", () => {
    arrow.classList.toggle("expanded");
    collapseContent.classList.toggle("hidden");
  });

  // Assemble the component
  container.append(collapseHeader, collapseContent);

  return container;
};

export const defineCollapseItems = (inputArray) => {
  if (!inputArray || !inputArray.length) return null;

  for (let i = 0; i < inputArray.length; i++) {
    const collapseElement = inputArray[i];
    const header = collapseElement.querySelector(".collapse-header");
    const content = collapseElement.querySelector(".collapse-content");
    const arrow = collapseElement.querySelector(".collapse-arrow");

    header.addEventListener("click", () => {
      // Toggle the clicked item
      // arrow.classList.toggle("expanded");
      // content.classList.toggle("hidden");

      // Close all other shit in the group
      for (let k = 0; k < inputArray.length; k++) {
        if (i !== k) {
          const otherElement = inputArray[k];
          const otherContent = otherElement.querySelector(".collapse-content");
          const otherArrow = otherElement.querySelector(".collapse-arrow");

          otherContent.classList.add("hidden");
          otherArrow.classList.remove("expanded");
        }
      }
    });
  }
};
