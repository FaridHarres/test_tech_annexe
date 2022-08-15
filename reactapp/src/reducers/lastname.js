export default function(lastName = "", action) {
    if(action.type == 'saveLastname') {

        return action.lastName
      
      }else{
        return lastName
      }

}