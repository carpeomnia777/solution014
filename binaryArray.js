//ones and zeroes - write a function that takes an array of ones and zeroes and outputs the numeric value
// function binaryArrayToNumber(arr){
//     let binary = 0;
//     if(arr[0] == 1){
//        binary += 8;
//        if(arr[1] == 1){
//            binary += 4;
//            if(arr[2]==1){
//                binary +=2
//                if(arr[3]==1)
//                binary+= 1;
//            }
//            else{
//                binary +=0;
//            }
//        }
//     else{
//         binary += 0;
//     }   
//     }
//   };
//helped ----but learned that parse int will convert to base of you choosing, in this case 2

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2);
};