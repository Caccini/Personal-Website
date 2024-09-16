document.addEventListener("DOMContentLoaded", () => {
    const projectFolders = document.querySelectorAll(".project-folder");
  
    projectFolders.forEach((folder) => {
      folder.addEventListener("click", () => {
        const link = folder.getAttribute("data-link");
        window.location.href = link;
      });
    });
  });
  