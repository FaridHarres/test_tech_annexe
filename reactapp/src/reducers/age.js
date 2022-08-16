export default function(Age = 0, action) {
    if(action.type == 'saveAge') {

        return action.Age
      
      }else{
        return Age
      }

}