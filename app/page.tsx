import Landing from './components/Landing';
import SelfIntro from './components/SelfIntro'
import Thought from './components/Thought';
import MyProject from './components/MyProject';


export default function Home() {
  return (
    <main>
      <Landing />
      <SelfIntro />
      <Thought />
      <MyProject />
    </main>
  );
}