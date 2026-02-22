// Hide all sections
function hideAllSections() {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = "none";
  });
}

// Generic scroll adjustment
function scrollToSection(section) {
  window.scrollTo({
    top: section.offsetTop - 70,
    behavior: "smooth"
  });
}

// ABOUT
function showInfo() {
  hideAllSections();
  const section = document.getElementById("info-box");
  section.style.display = "block";
  scrollToSection(section);
}

// SKILLS
function showInfo1() {
  hideAllSections();
  const section = document.getElementById("info-box-skill");
  section.style.display = "block";
  scrollToSection(section);
}

// PROJECTS
function showInfo2() {
  hideAllSections();
  const section = document.getElementById("info-box-project");
  section.style.display = "block";
  scrollToSection(section);
}

// CERTIFICATION
function showInfo3() {
  hideAllSections();
  const section = document.getElementById("info-box-certification");
  section.style.display = "block";
  scrollToSection(section);
}

// AWARD
function showInfo4() {
  hideAllSections();
  const section = document.getElementById("info-box-award");
  section.style.display = "block";
  scrollToSection(section);
}

// HOBBIES
function showInfo5() {
  hideAllSections();
  const section = document.getElementById("info-box-hobby");
  section.style.display = "block";
  scrollToSection(section);
}

// CONTACT
function showInfo6() {
  hideAllSections();
  const section = document.getElementById("info-box-contact");
  section.style.display = "block";
  scrollToSection(section);
}