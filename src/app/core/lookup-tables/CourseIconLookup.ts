export class CourseIconLookup {
    constructor() {}
    getCourseIcon(courseName: string) {
        var iconName: string;
        if (courseName.toLowerCase().includes("history") ||
        courseName.toLowerCase().includes("architecture") ||
        courseName.toLowerCase().includes("construction") ||
        courseName.toLowerCase().includes("building")) {
            iconName = "fas fa-archway";
        } else if (courseName.toLowerCase().includes("math") ||
        courseName.toLowerCase().includes("calculus") ||
        courseName.toLowerCase().includes("algebra") ||
        courseName.toLowerCase().includes("numerical") ||
        courseName.toLowerCase().includes("number")) {
            iconName = "fas fa-calculator";
        } else if (courseName.toLowerCase().includes("english") ||
        courseName.toLowerCase().includes("japanese") ||
        courseName.toLowerCase().includes("french") ||
        courseName.toLowerCase().includes("korean") ||
        courseName.toLowerCase().includes("language")) {
            iconName = "fas fa-language";
        } else if (courseName.toLowerCase().includes("biology") ||
        courseName.toLowerCase().includes("science") ||
        courseName.toLowerCase().includes("physics")) {
            iconName = "fas fa-atom";
        } else if (courseName.toLowerCase().includes("physical") ||
        courseName.toLowerCase().includes("gym") ||
        courseName.toLowerCase().includes("sports")) {
            iconName = "fas fa-running";
        } else if (courseName.toLowerCase().includes("global") ||
        courseName.toLowerCase().includes("politics")) {
            iconName = "fas fa-globe";
        } else if (courseName.toLowerCase().includes("computer") ||
            courseName.toLowerCase().includes("networking") ||
            courseName.toLowerCase().includes("networks") ||
            courseName.toLowerCase().includes("cyber")) {
            iconName ="fas fa-laptop-code"
        } else {
            iconName = "fas fa-chalkboard-teacher";
        }
        return iconName;
    }
}