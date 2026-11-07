const tabs = document.querySelectorAll('[role="tab"]');

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedPanel = document.getElementById(
      tab.getAttribute("aria-controls")
    );

    if (!selectedPanel) return;

    tabs.forEach((anotherTab) => {
      const panel = document.getElementById(
        anotherTab.getAttribute("aria-controls")
      );

      if (!panel) return;
      
      const selected = anotherTab === tab;
      anotherTab.setAttribute("aria-selected", selected);
      panel.hidden = !selected;
    });
    }); 
})