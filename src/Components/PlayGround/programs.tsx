interface ProgramTypes {
    [key: string]: string;
}

const programTypes: ProgramTypes = {
    greatest: `kem cho 
    aa che a = 20
    aa che b = 30
    aa che c = 70
    
    jo (a > b){
        jo(a > c){
            batavo "a is greater"
        }
        nahitar{
            batavo "c is greater"
        }
    }
    ka ( b > c ) {
        batavo "b is greater"
    }
    nahitar{
        batavo "c is greater"
    }
  
    
aavjo`,
  sum:`kem cho

    aa che a = 10
    aa che b = 20
    aa che sum = a + b
    batavo sum

aavjo`,
mul:`kem cho

    aa che a = 10
    aa che b = 20
    aa che c = 30

    aa che mul = 1
    mul = a * b * c

    batavo mul

aavjo`,
empty:`kem cho

aavjo`,
voting:`kem cho
    aa che age = 17

    jo (age > 18){
        batavo "Your eligible for voting"
    }
    nahitar{
        batavo "Your not eligible for voting"
    }
aavjo`,
calculate:`kem cho

    aa che cal = 10 + 20 * 2 - (5 * 5 - (20 * 2)) + (10*2) - (20 * 3) + 200
    batavo cal   

aavjo`
};

export default programTypes;