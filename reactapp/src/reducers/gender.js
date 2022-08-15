export default function(gender = "...", action) {
    if(action.type == 'saveResultGender') {

        return action.ResultGender
      
      }else{
        return gender
      }

}