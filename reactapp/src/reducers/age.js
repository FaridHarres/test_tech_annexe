export default function(Age = "", action) {
    if(action.type == 'saveAge') {

        return action.Age
      
      }else{
        return Age
      }

}