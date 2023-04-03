class Security {

    constructor(){

        this.access1 = createInput("insira a senha aqui")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Verificar');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("insira a senha aqui")
        this.access2.position(700,90);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Verificar');
        this.button2.position(700,120);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("insira a senha aqui")
        this.access3.position(100,290);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Verificar');
        this.button3.position(100,320);
        this.button3.style('background', 'lightgrey');

        this.access4 = createInput("insira a senha aqui")
        this.access4.position(700,290);
        this.access4.style('background', 'white');  

        this.button4 = createButton('Verificar');
        this.button4.position(700,320);
        this.button4.style('background', 'lightgrey');
        
        // this.button3 = createInput('Verificar');
        // this.button3.position(100,320);
        // this.button3.style('background', 'lightgrey');
    
        // this.button3 = createButton();
        // this.button3.position(100);
        // this.button3.style('background', 'lightgrey');

        // this.button3 = Button('Verificar');
        // this.button3(100,320);
        // this.button3.style('background', 'lightgrey');
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

         this.button3.mousePressed(() => {
             if(system.authenticate(accessCode3,this.access3.value())){
                 this.button3.hide();
                 this.access3.hide();
                 score++;
             }
         });

         this.button4.mousePressed(() => {
            if(system.authenticate(accessCode4,this.access4.value())){
                this.button4.hide();
                this.access4.hide();
                score++;
            }
        });

    }
}