var tablero = [' ',' ',' ',' ',' ',' ',' ',' ',' ' ];
let turnoO = 'O';
var O = [];
var X = [];


function cambio () {
    if(turnoO==='O'){
        turnoO='X';
    }else{
        turnoO = 'O';
    }
}

function turnoActivo(num){
    if(tablero[num]==' '){
        tablero[num]=document.getElementsByClassName('casillero')[num].innerHTML=turnoO;
        if(turnoO ==='O'){
            O.push(num);
            console.log(O);
        }else{
            X.push(num);
            console.log(X);
        }
    }
    cambio();
    if((tablero[0]==='O'&& tablero[1]==='O'&&tablero[2]==='O')
    ||(tablero[3]==='O'&& tablero[4]==='O'&&tablero[5]==='O')
    ||(tablero[6]==='O'&& tablero[7]==='O'&&tablero[8]==='O')
    ||(tablero[0]==='O'&& tablero[3]==='O'&&tablero[6]==='O')
    ||(tablero[1]==='O'&& tablero[4]==='O'&&tablero[7]==='O')
    ||(tablero[2]==='O'&& tablero[5]==='O'&&tablero[8]==='O')
    ||(tablero[0]==='O'&& tablero[4]==='O'&&tablero[8]==='O')
    ||(tablero[2]==='O'&& tablero[4]==='O'&&tablero[6]==='O')){

        Swal.fire({
        imageUrl: 'ganaste.jpg',
        imageHeight: 400, 
        position: 'center',
        title: 'Gano O',
        showConfirmButton: false,
        timer: 2500
    });
    reset();
    }else if((tablero[0]==='X'&& tablero[1]==='X'&&tablero[2]==='X')
    ||(tablero[3]==='X'&& tablero[4]==='X'&&tablero[5]==='X')
    ||(tablero[6]==='X'&& tablero[7]==='X'&&tablero[8]==='X')
    ||(tablero[0]==='X'&& tablero[3]==='X'&&tablero[6]==='X')
    ||(tablero[1]==='X'&& tablero[4]==='X'&&tablero[7]==='X')
    ||(tablero[2]==='X'&& tablero[5]==='X'&&tablero[8]==='X')
    ||(tablero[0]==='X'&& tablero[4]==='X'&&tablero[8]==='X')
    ||(tablero[2]==='X'&& tablero[4]==='X'&&tablero[6]==='X')){
        
        Swal.fire({
        imageUrl: 'ganaste.jpg',
        imageHeight: 400, 
        position: 'center',
        title: 'Gano X',
        showConfirmButton: false,
        timer: 2500,
    });
    reset();
    }else{
        if(O.length>=5||X.length>=5){
            Swal.fire({
                imageUrl: 'tie.jpg',
                imageHeight: 400, 
                position: 'center',
                title: 'Empate',
                showConfirmButton: false,
                timer: 2000
            });
            reset();
        }           
    }
    console.log(tablero);
    return tablero;
}

function reset(){
    for(let i=0; i<tablero.length;i++){
        tablero[i]=document.getElementsByClassName('casillero')[i].innerHTML=' ';
    }
    X=[];
    O=[];
}