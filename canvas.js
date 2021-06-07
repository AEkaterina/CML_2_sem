var canv = document.getElementsByClassName("canv")[0];
canv.width = 600;
canv.height = 470;

var a = canv.getContext("2d");

var grad = a.createLinearGradient(0,0,0,750);
grad.addColorStop(0.01,"red");
grad.addColorStop(1.0, "yellow");

var grad1 = a.createLinearGradient(0,0,0,750);
grad1.addColorStop(0.0, "yellow");
grad1.addColorStop(0.9, "green");

a.lineWidth = 2;
a.beginPath();
a.strokeStyle = "black";
a.moveTo(70, 400);
a.lineTo(550, 400);

a.moveTo(80, 408);
a.lineTo(80,50);

a.stroke();

for(let i = 370; i>=60; i-=30) {
    a.beginPath();
    a.moveTo(70, i);
    a.lineTo(550, i);
    a.stroke();
}

a.font = "20px Times New Poman";
a.fillStyle = "black";
var x = 0;
for(let i = 405; i >= 60; i -= 30) {
    a.fillText(x, 47, i);
    x++;
}

a.fillStyle = "blue";
a.fillRect(130, 221, 60, 178);

a.fillStyle = grad;
a.fillRect(240, 71, 60, 328);

a.fillStyle = grad1;
a.fillRect(350, 161, 60, 238);

a.fillStyle = "purple";
a.fillRect(460, 311, 60, 88);

a.fillStyle = "black";
a.font = "25px Times New Roman";
a.rotate(-Math.PI/2);
a.fillText("Количество лаб", -300, 33);

a.rotate(Math.PI/2);
a.font = "30px Times New Roman";
a.fillText("Гистограмма", 220, 40);

a.font = "18px Times New Roman";
a.fillText("HTML", 135, 423); 

a.fillText("JavaScript", 233, 423);

a.fillText("XML", 360, 423);

a.fillText("HTML5", 462, 423);
 

var canv2 = document.getElementsByClassName("canv2")[0];
canv2.width = 600;
canv2.height = 470;
var b = canv2.getContext("2d");

b.beginPath();
b.strokeStyle = "black";
b.lineWidth = 5;
b.arc(200, 270, 135, 0, 2*Math.PI);
b.stroke();

//sleep
b.beginPath();
b.fillStyle = "red";
b.arc(200, 270, 132, 0, Math.PI/180*95, false);
b.lineTo(200,270);
b.fill();

//dosug
b.beginPath();
b.fillStyle = "blue";
b.arc(200, 270, 132, Math.PI/180*95, Math.PI/180*50 + Math.PI/180*95, false);
b.lineTo(200,270);
b.fill();
//labs
b.beginPath();
b.fillStyle = "green";
b.arc(200, 270, 132, Math.PI/180*50 + Math.PI/180*95, Math.PI/180*50 + Math.PI/180*95 + Math.PI/180*105, false);
b.lineTo(200,270);
b.fill();

b.beginPath();
b.fillStyle = "yellow";
b.arc(200, 270, 132, Math.PI/180*50 + Math.PI/180*95 + Math.PI/180*105, 0, false);
b.lineTo(200,270);
b.fill();

b.fillStyle = "red";
b.fillRect(400,140,20,20);

b.fillStyle = "blue";
b.fillRect(400,190,20,20);

b.fillStyle = "green";
b.fillRect(400,240,20,20);

b.fillStyle = "yellow";
b.fillRect(400,290,20,20);

b.shadowOffsetX=4;
b.shadowOffsetY=4;
b.shadowBlur=20;
b.shadowColor="black";

b.font = "30px Times New Roman";
b.fillStyle = "black";
b.fillText("Круговая Диаграмма", 180, 50);

b.font = "25px Times New Roman";
b.fillText("Режим дня", 255, 85);
b.fillText("Сон", 430, 156);

b.fillText("Досуг", 430, 206);

b.fillText("Учеба", 430, 256);

b.fillText("Остальное", 430, 306);
