import AuthContent from '../components/Auth/AuthContent';
import { useContext, useState } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../util/auth';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function LoginScreen() {
  const [isAuthenticate, setAuthenticating] = useState(false)
  const authCtx = useContext(AuthContext);

    async function signupHandling({email, password}){
    setAuthenticating(true)
    try{
      const token = await login(email, password)
      authCtx.setAuthenticationToken(token)
  }catch(error){
    Alert.alert("Unable to log you in. Please check your credentials!!")
    setAuthenticating(false)
  }
  }
  
if(isAuthenticate){
  return <LoadingOverlay message="Logging User..." />
}

  return <AuthContent isLogin onAuthenticate={signupHandling}/>;
}

export default LoginScreen;