function draw_cuadrado() {
    const canvas = document.getElementById("canvas_cuadrado");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      ctx.fillstyle= "rgb(10,50,89)" ;
      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
    }
  }
  
  
  function draw_path() {
    const canvas = document.getElementById("canvas_path");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      ctx.beginPath();
      ctx.moveTo(75, 75);
      ctx.lineTo(150, 75);
      ctx.lineTo(112, 25);
      ctx.fill();
    }
  }
  draw_cuadrado();
  draw_path();

  