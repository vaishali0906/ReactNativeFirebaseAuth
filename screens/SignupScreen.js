import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import { useState, useContext } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';


function SignupScreen() {

  const [isAuthenticate, setAuthenticating] = useState(false)
  const authCtx = useContext(AuthContext);


    async function signupHandling({email, password}){
    setAuthenticating(true)
    try{
      const token = await createUser(email, password)
      authCtx.setAuthenticationToken(token)
    }catch(error){
      Alert.alert("Unable to create a user. Please try after sometime!!")
      setAuthenticating(false)
    }
  }
  
if(isAuthenticate){
  return <LoadingOverlay message="Creating User..." />
}

  return <AuthContent onAuthenticate={signupHandling}/>;
}

export default SignupScreen;