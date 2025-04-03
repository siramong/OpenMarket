const monthNames =
  "Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre".split(
    " "
  );
switch (new Date().getMonth()) {
  case 0:
    document.getElementById("dateContainer").innerHTML =
      new Date().getDay() +
      " de " +
      monthNames[0] +
      ", " +
      new Date().getFullYear();
    break;
  case 1:
    document.getElementById("dateContainer").innerHTML =
      new Date().getDay() +
      " de " +
      monthNames[1] +
      ", " +
      new Date().getFullYear();
    break;
  case 2:
    document.getElementById("dateContainer").innerHTML =
      new Date().getDay() +
      " de " +
      monthNames[2] +
      ", " +
      new Date().getFullYear();
    break;
  case 3:
    document.getElementById("dateContainer").innerHTML =
      new Date().getDay() +
      " de " +
      monthNames[3] +
      ", " +
      new Date().getFullYear();
    break;
  case 4:
    document.getElementById("dateContainer").innerHTML =
      new Date().getDay() +
      " de " +
      monthNames[4] +
      ", " +
      new Date().getFullYear();
    break;
  case 5:
    document.getElementById("dateContainer").innerHTML =
      new Date().getDay() +
      " de " +
      monthNames[5] +
      ", " +
      new Date().getFullYear();
    break;
  case 6:
    document.getElementById("dateContainer").innerHTML =
      new Date().getDay() +
      " de " +
      monthNames[6] +
      ", " +
      new Date().getFullYear();
    break;
  case 7:
    document.getElementById("dateContainer").innerHTML =
      new Date().getDay() +
      " de " +
      monthNames[7] +
      ", " +
      new Date().getFullYear();
    break;
  case 8:
    document.getElementById("dateContainer").innerHTML =
      new Date().getDay() +
      " de " +
      monthNames[8] +
      ", " +
      new Date().getFullYear();
    break;
  case 9:
    document.getElementById("dateContainer").innerHTML =
      new Date().getDay() +
      " de " +
      monthNames[9] +
      ", " +
      new Date().getFullYear();
    break;
  case 10:
    document.getElementById("dateContainer").innerHTML =
      new Date().getDay() +
      " de " +
      monthNames[10] +
      ", " +
      new Date().getFullYear();
    break;
  case 11:
    document.getElementById("dateContainer").innerHTML =
      new Date().getDay() +
      " de " +
      monthNames[11] +
      ", " +
      new Date().getFullYear();
    break;
  default:
    document.getElementById("dateContainer").innerHTML =
      new Date().getDay() +
      " de " +
      monthNames[0] +
      ", " +
      new Date().getFullYear();
    break;
}
