
let inp;
let inp_String;
let numberOfGnomes=0;
//
function setup()
{
    createCanvas(500,500);
    background(128);
    //
    inp = createInput('');
    inp.input(myInputEvent);   
}

//
function draw()
{
    background(128);
    stroke(255,0,0);
    fill(0,0,255);
    circle(width/2, height/2, 50);

    
}


function myInputEvent() 
{
    console.log('you are typing: ', this.value());
    inp_String=this.value();
}

function keyPressed() {
    if (keyCode === RETURN) {
      //see if input is a number
        
        console.log(`Checking "${inp_String}" `);

        console.log(` parse int? ${parseInt(inp_String)}`);

        console.log(` Number.isNaN? ${Number.isNaN(inp_String)}`);

        console.log(` Number.isFinite? ${Number.isFinite(inp_String) }`);

        console.log(`...`);
        
        console.log(`       Number.isFinite(parseInt)? ${Number.isFinite(parseInt(inp_String))}`);

        console.log(`   typeof()? ${typeof(inp_String)}`);

        console.log(`       typeof() == 'number' ? ${typeof(inp_String) == 'number'}`);

        console.log(`   Number() ? ${Number(inp_String)}`);
    } else if (keyCode !== RETURN) {
      // do nothing
    }
  }