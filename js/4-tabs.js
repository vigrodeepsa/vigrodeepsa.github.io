document.addEventListener("DOMContentLoaded", function(event) { 
  const tabHeaders  = document.getElementById("tab-headers");
  const tabContents = document.getElementById("tab-contents");
  const tabButtons  = tabContents.getElementsByClassName("tab-close");
      
  function openTabContent(targetName) {
    Array.from(tabContents.children).forEach((tabContent) => {
      tabContent.style.display = "none";
    });
  
    Array.from(tabHeaders.children).forEach((tabHeader) => {
      tabHeader.classList.remove("active");
    });

    document.getElementById(targetName).style.display = "block";
  }

  // Tab Headers: All Click Events
  Array.from(tabHeaders.children).forEach((tab) => {
    tab.addEventListener("click", () => {
      openTabContent(tab.dataset.target);
      tab.classList.add("active");
    });
  });

  // Tab Headers: Default
  tabHeaders.getElementsByClassName("active")[0].click();

  // Tab Contents: All Close Buttons Events
  Array.from(tabButtons).forEach((tabCloseButton) => {
    tabCloseButton.addEventListener("click", () => {
      tabCloseButton.parentElement.style.display='none';
    });
  });
});

