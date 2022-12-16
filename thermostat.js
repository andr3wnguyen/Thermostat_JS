class ThermoStat {
    constructor() {
        this.temp = 20;
        this.psm = false;
    }

    getTemperature() {
            return this.temp
        }


    up() {
        if(this.psm===true && this.temp <25)
        {this.temp+=1; return;}
        else if(this.psm===false && this.temp<32)
        {this.temp+=1; return;}
        else {
            this.temp+=0
        }
    }

    down() {
        if(this.temp > 10){
        this.temp-=1; return
    }}

    powerSavingMode(bool){
        this.psm = bool;
        }
        
    reset(){
        this.temp = 20
    }

    getCurrentEnergyUsage(){
        if(this.temp <=18){
            return 'low'
        }
        else if(this.temp<=25){
            return 'medium'
        }
        else {
            return 'high'
        }
    }
    
    }





module.exports = ThermoStat;
