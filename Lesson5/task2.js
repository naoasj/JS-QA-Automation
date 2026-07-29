const averegeGrade = 100;

switch (true) {
    case averegeGrade < 60:
        console.log("Незадовільно");
        break;
    case averegeGrade >= 60 && averegeGrade <= 70:
        console.log ("Задовільно");
        break;
    case (averegeGrade >= 71 && averegeGrade <= 80):
        console.log("Добре");
        break;
    case (averegeGrade >= 81 && averegeGrade <= 90):
        console.log ("Дуже добре");
        break;
    case (averegeGrade >= 91 && averegeGrade <= 100):
        console.log ("Відмінно");
        break;
}