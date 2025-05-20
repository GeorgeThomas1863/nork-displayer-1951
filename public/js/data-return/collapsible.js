/**
 * Creates a collapsible component with a header and content
 * @param {string} title - The title to display in the header
 * @param {HTMLElement} content - The content element to collapse/expand
 * @param {boolean} isExpanded - Whether the content should start expanded
 * @param {string} className - Optional additional class name for the collapsible
 * @returns {HTMLElement} - The collapsible element
 */
export const buildCollapsible = (title, content, isExpanded = false, className = '') => {
  // Create container
  const container = document.createElement('div');
  container.className = `collapsible-container ${className}`;
  
  // Create header with arrow and title
  const header = document.createElement('div');
  header.className = 'collapsible-header';
  
  const arrow = document.createElement('div');
  arrow.className = isExpanded ? 'collapsible-arrow expanded' : 'collapsible-arrow';
  
  const titleElement = document.createElement('div');
  titleElement.className = 'collapsible-title';
  titleElement.textContent = title;
  
  header.appendChild(arrow);
  header.appendChild(titleElement);
  
  // Create content wrapper
  const contentWrapper = document.createElement('div');
  contentWrapper.className = isExpanded ? 'collapsible-content' : 'collapsible-content hidden';
  contentWrapper.appendChild(content);
  
  // Add event listener for toggling
  header.addEventListener('click', () => {
    arrow.classList.toggle('expanded');
    contentWrapper.classList.toggle('hidden');
  });
  
  // Assemble the component
  container.appendChild(header);
  container.appendChild(contentWrapper);
  
  return container;
};

/**
 * For handling collapsible groups where only one can be open at a time
 * @param {Array<HTMLElement>} collapsibles - Array of collapsible elements 
 */
export const setupCollapsibleGroup = (collapsibles) => {
  if (!collapsibles || !collapsibles.length) return;
  
  collapsibles.forEach((collapsible, index) => {
    const header = collapsible.querySelector('.collapsible-header');
    const content = collapsible.querySelector('.collapsible-content');
    const arrow = collapsible.querySelector('.collapsible-arrow');
    
    header.addEventListener('click', () => {
      // Close all other collapsibles in the group
      collapsibles.forEach((otherCollapsible, otherIndex) => {
        if (index !== otherIndex) {
          const otherContent = otherCollapsible.querySelector('.collapsible-content');
          const otherArrow = otherCollapsible.querySelector('.collapsible-arrow');
          
          otherContent.classList.add('hidden');
          otherArrow.classList.remove('expanded');
        }
      });
    });
  });
}; 