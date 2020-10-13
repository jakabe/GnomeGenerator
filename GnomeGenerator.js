
let inp;
let inp_String;
let numberOfGnomes=0;

var x_position=50;
var y_position=50;





var prefix_Array = new Array
(
    '','xXx-', 'Sir.', 'Dirty-', 'Dank-', 'Cash-', 'Money-', 'Sexy-',
    'Filthy-', 'Banging', 'Silky-', 'Smooth-', 'Sleepy-'
    ,'Na-', 'Old-'
)
var first_Name_Array = new Array
(
    'Moe', 'Moen','SchmeK', 'Spaz', 'Garl','Gwen',
    'Gert', 'Gunt', 'Trude', "Tenct", "Pan", 'Paul','BUZZ',
    'Charles', 'Moety', 'MMMP', 'Christina'




)

var suffix_Array = new Array 
(
    '','-xXx', 'ier', '-HardR', '-Bomb', '-Bang', '-Moist', '-Sticky',
    '-Na', '-Broke', '-Town', '-T', '-bydick', '-Tang',
    '-D','-Jam',
    '3', '-Greg', '-Lificent'



)
var last_Name_Araay = new Array 
(
    'Softwood', 'Hardwood', 'Coinpurse', 'Brokebottom', 'Severedhead',
    'Sevenstrings', 'Despot',

)

var title_Array = new Array
(
    'Bright', 'Small', 'Great', 'Golden', 'Insane', 'Ticklish',
    'Arroused', 'Dolt', 'Despot'
)

//
function setup()
{
    createCanvas(1000,1000);
    background(128);
    //
    //inp = createInput('');
    //inp.input(myInputEvent);  
    for( var i = 0 ; i < 80 ; i++ )
    {
        //console.log(`   Drawing Gnome ${i+1} of ${numberOfGnomes}`);
        drawRandomGnome();
    } 
}

//
function draw()
{
    //background(128);
    //stroke(255,0,0);
    //fill(0,0,255);
    //circle(width/2, height/2, 50);
    

}


// function myInputEvent() 
// {
//     console.log('you are typing: ', this.value());
//     inp_String=this.value();
// }

// function keyPressed() {
//     if (keyCode === RETURN) {
//       //see if input is a number
//         if( Number(inp_String) != 'Nan')
//         {
//             console.log(`   Number() ? ${Number(inp_String)}`);
//             numberOfGnomes =  Number(inp_String);
//             for( var i = 0 ; i < numberOfGnomes ; i++ )
//             {
//                 console.log(`   Drawing Gnome ${i+1} of ${numberOfGnomes}`);
//                 drawRandomGnome();
//             }
//         }

        
//     } else if (keyCode !== RETURN) {
//       // do nothing
//     }
//   }

function drawRandomGnome()
{
    
    
    if(x_position > 960)
    {
        x_position = 50;
        y_position += 120;
    }
    

    var lb = random(0,128);
    var skin_color = color(random(lb,255),random(lb,255),random(lb,255));
    var eye_color = color(random(0,255-lb),random(0,255-lb),random(0,255-lb));
    var hat_color = color ( random( 0,255), random(32,180),random(32,180) );
    var shirt_color = color(random(0,255-lb),random(0,255-lb),random(0,255-lb));
    var boot_color = color(random(100,160),random(50,100),random(0,50));
    var rv = random(0,3);
    

    //translate to center of drawing
    push();
        translate(x_position,y_position);
        //console.log(`   position(${x_position},${y_position}`);
        
        //body
        fill(shirt_color);
        rect(-20,10,40,40,10,10,0,0);

        


        fill(skin_color);
        //hands
        circle(-25+random(-2,2),30+random(1,5),10);

        circle(25+random(-2,2),30+random(1,5),10);

        fill(255);

        //translate down to draw feet
        push();
            translate(0,52);
            //left foot
            fill(boot_color);
            push();
                translate(-15,0);
                arc(0, 0, 20, 20, PI, 0 , PIE);
            
            pop();
            //right foot
            push();
                translate(15,0);
                arc(0, 0, 20, 20, PI, 0 , PIE);
                fill(255);
            pop();
            

        pop();
        //feet complete

        fill(skin_color);
        //head
        circle(0,0,40+random(-3,3));
        //face
        fill(255);

        //eye-left
        circle(10+random(-1,1),0+random(-1,1),10+random(-1,1));
        //eye-right
        circle(-10+random(-1,1),0+random(-1,1),10+random(-1,1));
       
        //pupils
        
        fill(eye_color);
        strokeWeight(0);
        circle(10,0,6);
        circle(-10,0,6);

        //needs randomness for poisition and color
        fill(255);
        strokeWeight(2);
        point(10+random(-1,1),0+random(-1,1));
        point(-10+random(-1,1),0+random(-1,1));
        strokeWeight(1);

        //nose
        fill(skin_color);
        var dir = random(-1,1);
        arc(0, 5, 10+random(-1,1), 10+random(-1,1), dir*(PI/2-PI/4), dir*(PI+PI/2) );
        

        

        //mouth
        dir = random(-1,1);
        //needs random smile paramaters!
        arc(0, 12, 10+random(-1,1), 10+random(-1,1), 0-PI/6*dir, PI+PI/6*dir );


        fill(hat_color); //random hat color
        //translate up to hat
        push();
            translate(0,-14);
            triangle(-20,0,0,-35,20,0);
            fill(255);
            rect(-21,0,42,10);
        pop();
        
        fill(255);
        stroke(0);
        strokeWeight(2);
        textSize(10);
        //name 
        textAlign(CENTER);
        text(nameTheGnome(), 0,30);
        strokeWeight(1);

    pop();
    x_position += 100;
}

function nameTheGnome(){
    var gnome_Name ="";

    gnome_Name += prefix_Array[Math.round(random(0,prefix_Array.length-1))];

    gnome_Name += first_Name_Array[Math.round(random(0,first_Name_Array.length-1))];

    gnome_Name += suffix_Array[Math.round(random(0,suffix_Array.length-1))];

    gnome_Name +="\n";

    gnome_Name += last_Name_Araay[Math.round(random(0,last_Name_Araay.length-1))];
    
    gnome_Name +="\n";

    gnome_Name += ' The \n'+title_Array[Math.round(random(0,title_Array.length-1))];
    return gnome_Name; 
}