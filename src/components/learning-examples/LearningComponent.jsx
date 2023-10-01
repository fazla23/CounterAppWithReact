import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import {FifthComponent} from './FirstComponent';
import LearnJavaScriptComponent from './LearnJavaScriptComponent';

export default function LearningComponent() {
    return (
      <div className="learningComponent">
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        <FourthComponent></FourthComponent>
        <FifthComponent />
        <LearnJavaScriptComponent></LearnJavaScriptComponent>
      </div>
    );
  }