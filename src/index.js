function changeSection(sectionName) {
    document
        .querySelector(`.${sectionName}`)
        .scrollIntoView({ behavior: "smooth", block: "start" });
}