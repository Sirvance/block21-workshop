"use strict"
class Car {
constructor (model,make,year){
        this.model = model
        this.make = make
        this.year = year
        }
  
  
        getDescription() {
        return '${this.model} is  ${this.year} and ${this.make}'
       }
}
 const c1 =  new Car('Ford ','Mustang','2022');
      //console.log(c1);

 console.log(c1.getDescription());



 
        class electricCar {
            constructor(make,model,year,range){
            this.make = make
            this.model = model
            this.year = year
            this.range = range
        
        }
        getDescription() {
            return 'this.make + this.model + this.year + this.range'
        }
    }
    
        let c2 = new electricCar ("Tesla","ModelS","2019","300")
        
    
        

        //console.log('')
        //console.log(c2.getDescription());
        console.log(c2);
        //console.log(new electricCar);

    


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //     class electricCar {
    //         constructor(make,model,year,range){
    //         this.make = Tesla
    //         this.model = ModelS
    //         this.year = 2019
    //         this.rangen = 300
        
    //     }
    //     getDescription() {
    //         return 'this.make + this.model + this.year + this.range'
    //     }
    // }
    
    //     let c2 = new electricCar ('Tesla','ModelS','2019','300')
        
    
        

    //     console.log('')
    //     console.log(c2.getDescription());
        
















  //   Car.prototype.getDescription = function() {
  //     console.log(this.model,this.make,this.year)
  
  //   }
  
  // console.log(this.model)
  //   return '${this.model}  ${this.year}  ${this.make}'