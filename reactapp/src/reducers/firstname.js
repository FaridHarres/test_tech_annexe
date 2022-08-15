export default function(firstName = "", action) {
    if(action.type == 'saveFirstname') {

        return action.firstname
      
      }else{
        return firstName
      }

}