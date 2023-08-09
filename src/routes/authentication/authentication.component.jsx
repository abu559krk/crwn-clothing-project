import { signInWithGooglePopup, UserDocumnetfromAuth } from "../../utils/firebase/firebase.utils";
import Signupformcomponent from "../../components/sign-up-form copy/Sign-up-form-component";
import SignInformcomponent from "../../components/sign-up-form/Sign-in-form-component";
import './authentication.scss';
const Authentication = () =>{
    return(
        <div className="authentication-container">
            
            <SignInformcomponent/>
            <Signupformcomponent/>
            
        </div>
    )
}
export default Authentication;