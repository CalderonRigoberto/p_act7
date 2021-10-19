const appEncuesta = new Vue({
    el: "#main",

    data:{
        estadoE: false,
        estado: false,
        estadoI: true,
        mensaje: '',
        mensajeM: '',
        lProgramacion : [],
        lProgramar: '',
        aProgramando: 0,
        mostrar: false,
        res: '',
        num: 0
        
    },


    methods:{
        si(){
            this.estado = true;
            this.estadoI = false;
        },
        no(){
            this.estado = false;
            this.estadoI = false;
        },
        agregarL(){
            this.lProgramacion.push(this.lProgramar);
            this.lProgramar = '';
        },
        m(){
            if(this.lProgramacion=='' && this.mensajeM == '' | this.mensaje=='' && this.aProgramando==0){
                this.estadoE=false;
                this.mostrar=false;
            }else{
                this.mostrar=true;
                this.estadoE=true;
            }
            
        }
        
    }

})