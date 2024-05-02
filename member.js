function skillsMember() {
    // Get the member's skills
    var member = document.getElementById("member");
    var memberSkills = member.getAttribute("data-skills");
    // Split the skills into an array
    var memberSkillsArray = memberSkills.split(",");
    // Get the skills container
    var skillsContainer = document.getElementById("skills-container");
    // Loop through the skills and create a badge for each
    for (var i = 0; i < memberSkillsArray.length; i++) {
        var skill = document.createElement("div");
        skill.className = "skill";
        skill.innerHTML = memberSkillsArray[i];
        skillsContainer.appendChild(skill);
    }
}

