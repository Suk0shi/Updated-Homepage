import './App.css'
import Tilt from 'react-parallax-tilt';
import hugoImage from './assets/Images/Hugo Cordon.jpeg';
import battleshipImg from './assets/Images/battleshipImg.png';
import toDoListImg from './assets/Images/todolistImg.png';
import tickTackToeImg from './assets/Images/tickTackToeImg.png';
import knightsTravailsImg from './assets/Images/knightsTravailsImg.png';
import calculatorImg from './assets/Images/calculatorImg.png';
import signupFormImg from './assets/Images/sign-upFormImg.png';
import wheresWaldoImg from './assets/Images/wheresWaldo.png';
import messagingAppImg from './assets/Images/messagingAppImg.png';
import blogAPIImg from './assets/Images/blogAPIImg.png';
import memoryCardGameImg from './assets/Images/memoryCardGameImg.png';
import cvMakerImg from './assets/Images/cvMakerImg.png';
import shoppingCartImg from './assets/Images/shoppingCartImg.png';
import membersOnlyChatImg from './assets/Images/membersOnlyChat.png';
import sukoshibookImg from './assets/Images/sukoshibook.png';
import translatorImg from './assets/Images/translatorImg.png';

function App() {
  

  function Card({ src, alt, title, githubLink, liveLink, message }) {
    
    
    return (
      <Tilt className="card" scale={1.1}>
        <img src={src} alt={`screenshot of ${alt}`} />
        <div>
          <h2>{title}</h2>
          <a href={githubLink}><i className="devicon-github-original colored"></i></a>
          <a href={liveLink}><svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" /></svg></a>
        </div>
        <p>{message}</p>
      </Tilt>
    )

  }

  return (
    <>
      <header>
        <div className="aboutMe">
            <div className="portraitContainer">
                <img className="portrait" src={hugoImage} alt="Photo of Hugo Cordon"/>
                <p className="myName">Hugo Cordon</p>
            </div>
            <div className="aboutMeText">
                <h1>About me</h1>
                <p>After earning a high 2:1 BSc degree from the University of Southampton, the past year has been dedicated to web development, resulting in the successful creation of multiple front-end and full-stack web applications. A strong passion for learning has been crucial during this year of self-teaching.</p>
                <a href="https://github.com/Suk0shi"><i className="devicon-github-original colored"></i></a>
                <a href="https://www.linkedin.com/in/hugo-cordon-013841234/"><i className="devicon-linkedin-plain colored"></i></a>
            </div>
        </div>
      </header>
      <main>
        <div className="mainSection">
          <h1>My work</h1>
          <h2>Full Stack</h2>
          <div className="cards">
            <Card src={sukoshibookImg} 
              alt={"Facebook clone project"} 
              title={`Facebook Clone`} 
              githubLink={'https://github.com/Suk0shi/SukoshiBook_Frontend'} 
              liveLink={"https://sukoshibook.netlify.app/"} 
              message={`This is a Facebook clone allowing users to follow others and make posts.`}>
            </Card>
            <Card src={messagingAppImg} 
              alt={"Messaging App project"} 
              title={`Messaging App`} 
              githubLink={'https://github.com/Suk0shi/Messaging-App-Frontend'} 
              liveLink={"https://sukoshichat.netlify.app/"} 
              message={`A simple messaging web app allowing users to add friends and send messages.`}>
            </Card>
            <Card src={wheresWaldoImg} 
              alt={"Where's Waldo project"} 
              title={`Where's Waldo`} 
              githubLink={'https://github.com/Suk0shi/Where-is-Waldo-photo-tagging-'} 
              liveLink={"https://whereiswald0.netlify.app"} 
              message={`A full stack recreation of the Where's Waldo books with a leaderboard system.`}>
            </Card>
            <Card src={blogAPIImg} 
              alt={"Blog API project"} 
              title={`Blog API`} 
              githubLink={'https://github.com/Suk0shi/Blog-API-Posting-Frontend'} 
              liveLink={"https://blogapiposting.netlify.app"} 
              message={`A blog application built with an Express backend and React frontend.`}>
            </Card>
            <Card src={membersOnlyChatImg} 
              alt={"Memebers Only Chat project"} 
              title={'Members Only Chat'} 
              githubLink={'https://github.com/Suk0shi/MembersOnlyChat'} 
              liveLink={"https://membersonlychat.adaptable.app"} 
              message={`A messageboard application to practice Express with Pug.`}>
            </Card>
          </div>
          <h2>Frontend</h2>
          <div className="cards">
            <Card src={battleshipImg} 
              alt={"Battleship project"} 
              title={'Battleships'} 
              githubLink={'https://github.com/Suk0shi/Battleship'} 
              liveLink={"https://suk0shi.github.io/Battleship/"} 
              message={'The classic boardgame playable against the computer.'}>
            </Card>
            <Card src={toDoListImg} 
              alt={"ToDoList project"} 
              title={'ToDoList'} 
              githubLink={'https://github.com/Suk0shi/ToDoList'} 
              liveLink={"https://suk0shi.github.io/ToDoList/"} 
              message={'Create multiple locally stored todo lists.'}>
            </Card>
            <Card src={translatorImg} 
              alt={"SpeechToTextToTranslate project"} 
              title={'SpeechToTextTo Translate'} 
              githubLink={'https://github.com/Suk0shi/SpeechToTextToTranslate'} 
              liveLink={"https://speechtotexttranslator.netlify.app/"} 
              message={'This was a trial to play with speech-to-text and TypeScipt. The translations use the funtranslations API.'}>
            </Card>
            <Card src={memoryCardGameImg} 
              alt={"Memory Card Game project"} 
              title={'Memory Card Game'} 
              githubLink={'https://github.com/Suk0shi/Memory-Card-Game'} 
              liveLink={"https://merry-hummingbird-130b80.netlify.app"} 
              message={`A react app using random cat images from an API.`}>
            </Card>
            <Card src={tickTackToeImg} 
              alt={"TickTackToe project"} 
              title={'TickTackToe'} 
              githubLink={'https://github.com/Suk0shi/TickTackToe'} 
              liveLink={"https://suk0shi.github.io/TickTackToe/"} 
              message={'Play TickTackToe locally aginst a friend.'}>
            </Card>
            <Card src={knightsTravailsImg} 
              alt={"Knights-Travails project"} 
              title={'Knights-Travails'} 
              githubLink={'https://github.com/Suk0shi/Knights-Travails'} 
              liveLink={"https://suk0shi.github.io/Knights-Travails/"} 
              message={`When input a start and end square it returns the knights route to it's destination on the chessboard via the optimal path! (To practice graphs data structure)`}>
            </Card>
            <Card src={signupFormImg} 
              alt={"Sign-up Form project"} 
              title={'Sign-up Form'} 
              githubLink={'https://github.com/Suk0shi/Sign-upForm'} 
              liveLink={"https://suk0shi.github.io/Sign-upForm/"} 
              message={`Sign up form design with password match check and input validation.`}>
            </Card>
            <Card src={cvMakerImg} 
              alt={"CV maker project"} 
              title={'CV maker'} 
              githubLink={'https://github.com/Suk0shi/CV-Maker'} 
              liveLink={"https://legendary-gecko-f7dfeb.netlify.app"} 
              message={`A Simple CV maker tool to practice React.`}>
            </Card>
            <Card src={shoppingCartImg} 
              alt={"Shopping Cart project"} 
              title={'Shopping Cart'} 
              githubLink={'https://github.com/Suk0shi/ShoppingCart'} 
              liveLink={"https://exquisite-biscotti-2829ee.netlify.app"} 
              message={`The task was to create a simple store page which creates a cart of items clicked on by the user.`}>
            </Card>
            <Card src={calculatorImg} 
              alt={"Calculator project"} 
              title={'Calculator'} 
              githubLink={'https://github.com/Suk0shi/calculator'} 
              liveLink={"https://suk0shi.github.io/calculator/"} 
              message={`A working calculator.`}>
            </Card>
          </div>
          <div className="custom-shape-divider-top-1704216185">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="custom-shape-divider-bottom-1704216399">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
      </main>
      <footer>
        <div className="contactSection">
            <div>
                <h1>Contact me</h1>
                <p>Please get in touch if you think our work could be mutually beneficial</p>
                <div className="contactInfo">
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>
                    <p>07534-850-940</p>
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email-outline</title><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" /></svg>
                    <p>hugo.cordon100@gmail.com</p>
                </div>
                <div className="icons">
                    <a href="https://github.com/Suk0shi"><i className="devicon-github-original colored"></i></a>
                    <a href="https://www.linkedin.com/in/hugo-cordon-013841234/"><i className="devicon-linkedin-plain colored"></i></a>
                            
                </div>
            </div>
            <svg className="contactSVG" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="842.72998" height="573" viewBox="0 0 842.72998 573" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M934.654,722.90511c-18.90064,13.616-43.39446,14.29971-67.07038,12.627-3.306-.23326-6.58868-.507-9.84091-.80228-.01965-.0051-.04544-.00328-.06541-.00836-.15629-.01487-.3129-.02976-.46245-.03863-.67126-.0628-1.34284-.12554-2.0078-.18875l.15708.29974.493.93009c-.17718-.31128-.35423-.6161-.53141-.92739-.05212-.09343-.11053-.18646-.16233-.28-6.13337-10.67317-12.21659-21.73842-13.76829-33.926-1.6039-12.65015,2.9037-26.9743,14.03727-33.19189a22.467,22.467,0,0,1,4.61018-1.93081c.66586-.20234,1.34073-.36645,2.02325-.5117A24.081,24.081,0,0,1,890.07022,696.26c9.43927-9.67911,7.67846-25.38108,4.42236-38.504-3.26239-13.12256-7.21179-27.72486-.57639-39.51162,3.68851-6.56063,10.175-10.63106,17.45435-12.27081.22331-.04815.44631-.09623.67008-.13789a35.14393,35.14393,0,0,1,25.249,4.42406c13.91882,8.77112,21.06772,25.40139,23.38793,41.69208C964.41589,678.16654,956.14294,707.423,934.654,722.90511Z" transform="translate(-178.63501 -163.5)" fill="#f2f2f2"/><path d="M928.55168,680.88193a59.74248,59.74248,0,0,1-4.12321,16.83544,51.87511,51.87511,0,0,1-8.05438,13.156,66.46538,66.46538,0,0,1-25.53063,18.40893,95.65939,95.65939,0,0,1-23.25985,6.24981c-3.306-.23326-6.58868-.507-9.84091-.80228-.01965-.0051-.04544-.00328-.06541-.00836-.15629-.01487-.3129-.02976-.46245-.03863-.67126-.0628-1.34284-.12554-2.0078-.18875l.15708.29974.493.93009c-.17718-.31128-.35423-.6161-.53141-.92739-.05212-.09343-.11053-.18646-.16233-.28a52.87823,52.87823,0,0,0,14.81951-46.25623,53.33113,53.33113,0,0,0-9.94035-22.79246c.66586-.20234,1.34073-.36645,2.02325-.5117a55.29272,55.29272,0,0,1,5.04382,8.35406,54.17979,54.17979,0,0,1,4.67445,33.70568,55.393,55.393,0,0,1-14.03439,27.62923c.63145-.0445,1.269-.09592,1.893-.15286,11.81832-1.00128,23.61258-3.542,34.33191-8.74615A61.83274,61.83274,0,0,0,917.13821,706.74c6.492-8.95336,9.35272-19.723,9.84414-30.6688a129.42851,129.42851,0,0,0-3.67377-35.0389,147.06843,147.06843,0,0,0-12.35789-33.6628,1.0574,1.0574,0,0,1,.41985-1.39591.89934.89934,0,0,1,.67008-.13789.78294.78294,0,0,1,.51687.44275c.67566,1.3187,1.33875,2.63828,1.97662,3.97261a148.73787,148.73787,0,0,1,11.64367,34.92405C928.52711,656.82724,929.78107,669.01639,928.55168,680.88193Z" transform="translate(-178.63501 -163.5)" fill="#fff"/><path d="M213.7948,345.626a4.53477,4.53477,0,0,1-1.64453-.31055,4.47489,4.47489,0,0,1-2.87-4.19629v-47.0332a6.01164,6.01164,0,0,0-6.00464-6.00489h-9.63134A15.02614,15.02614,0,0,1,178.635,273.07178v-94.5625A15.02614,15.02614,0,0,1,193.64429,163.5H533.36963a15.02615,15.02615,0,0,1,15.00928,15.00928v94.5625a15.02615,15.02615,0,0,1-15.00928,15.00927H271.15a6.02074,6.02074,0,0,0-4.42651,1.94727l-49.62183,54.1333A4.47614,4.47614,0,0,1,213.7948,345.626ZM193.64429,165.5A13.024,13.024,0,0,0,180.635,178.50928v94.5625a13.024,13.024,0,0,0,13.00928,13.00927h9.63134a8.01371,8.01371,0,0,1,8.00464,8.00489v47.0332a2.50251,2.50251,0,0,0,4.34717,1.69092l49.62183-54.1333a8.02556,8.02556,0,0,1,5.90075-2.59571H533.36963a13.024,13.024,0,0,0,13.00928-13.00927v-94.5625A13.024,13.024,0,0,0,533.36963,165.5Z" transform="translate(-178.63501 -163.5)" fill="#ccc"/><circle cx="36.81607" cy="29.45637" r="13.13371" fill="#ccc"/><path d="M518.04693,265.62955H208.967a7.00465,7.00465,0,1,1,0-14.00929H518.04693a7.00465,7.00465,0,1,1,0,14.00929Z" transform="translate(-178.63501 -163.5)" fill="#ccc"/><path d="M417.35517,235.85981H208.967a7.00465,7.00465,0,1,1,0-14.00929H417.35517a7.00465,7.00465,0,1,1,0,14.00929Z" transform="translate(-178.63501 -163.5)" fill="#ccc"/><path d="M213.7948,679.22217a4.53456,4.53456,0,0,1-1.64453-.31055,4.47537,4.47537,0,0,1-2.87-4.19629v-47.0332a6.01163,6.01163,0,0,0-6.00464-6.00488h-9.63134A15.02614,15.02614,0,0,1,178.635,606.668v-94.5625a15.02614,15.02614,0,0,1,15.00928-15.00928H533.36963a15.02615,15.02615,0,0,1,15.00928,15.00928V606.668a15.02615,15.02615,0,0,1-15.00928,15.00928H271.15a6.02073,6.02073,0,0,0-4.42651,1.94726l-49.62183,54.1333A4.4761,4.4761,0,0,1,213.7948,679.22217Zm-20.15051-180.126A13.024,13.024,0,0,0,180.635,512.10547V606.668a13.024,13.024,0,0,0,13.00928,13.00928h9.63134a8.0137,8.0137,0,0,1,8.00464,8.00488v47.0332a2.50251,2.50251,0,0,0,4.34717,1.69092l49.62183-54.1333a8.02559,8.02559,0,0,1,5.90075-2.5957H533.36963A13.024,13.024,0,0,0,546.37891,606.668v-94.5625a13.024,13.024,0,0,0-13.00928-13.00928Z" transform="translate(-178.63501 -163.5)" fill="#ccc"/><path d="M715.478,505.85742a4.47521,4.47521,0,0,1-3.30664-1.46435l-49.62207-54.1333a6.02039,6.02039,0,0,0-4.42627-1.94727H395.90344a15.02614,15.02614,0,0,1-15.00927-15.00928v-94.5625a15.02614,15.02614,0,0,1,15.00927-15.00927H735.62866a15.02614,15.02614,0,0,1,15.00928,15.00927v94.5625a15.02614,15.02614,0,0,1-15.00928,15.00928h-9.63135a6.01156,6.01156,0,0,0-6.00463,6.00488v47.03321a4.474,4.474,0,0,1-2.87012,4.1958A4.5256,4.5256,0,0,1,715.478,505.85742Zm-319.57459-180.126a13.024,13.024,0,0,0-13.00927,13.00927v94.5625a13.024,13.024,0,0,0,13.00927,13.00928H658.12305a8.02441,8.02441,0,0,1,5.90039,2.5957l49.62207,54.1333a2.50253,2.50253,0,0,0,4.34717-1.69091V454.31738a8.01369,8.01369,0,0,1,8.00463-8.00488h9.63135a13.024,13.024,0,0,0,13.00928-13.00928v-94.5625a13.024,13.024,0,0,0-13.00928-13.00927Z" transform="translate(-178.63501 -163.5)" fill="#3f3d56"/><circle cx="36.81607" cy="363.05254" r="13.13371" fill="#ccc"/><path d="M518.04693,599.22573H208.967a7.00465,7.00465,0,1,1,0-14.00929H518.04693a7.00464,7.00464,0,1,1,0,14.00929Z" transform="translate(-178.63501 -163.5)" fill="#ccc"/><path d="M417.35517,569.456H208.967a7.00465,7.00465,0,1,1,0-14.00929H417.35517a7.00465,7.00465,0,1,1,0,14.00929Z" transform="translate(-178.63501 -163.5)" fill="#ccc"/><circle cx="239.07517" cy="188.81202" r="13.13371" fill="#3f3d56"/><path d="M720.306,424.9852H411.22611a7.00464,7.00464,0,1,1,0-14.00928H720.306a7.00464,7.00464,0,1,1,0,14.00928Z" transform="translate(-178.63501 -163.5)" fill="#6c63ff"/><path d="M619.61427,395.21547H411.22611a7.00465,7.00465,0,1,1,0-14.00929H619.61427a7.00465,7.00465,0,1,1,0,14.00929Z" transform="translate(-178.63501 -163.5)" fill="#6c63ff"/><path d="M720.17137,523.85872a10.05574,10.05574,0,0,1,13.594-7.27736l23.4593-26.95627,4.98283,17.88869-23.04128,22.8556a10.11027,10.11027,0,0,1-18.99481-6.51066Z" transform="translate(-178.63501 -163.5)" fill="#ffb8b8"/><circle cx="670.29019" cy="209.30068" r="24.56103" fill="#ffb8b8"/><polygon points="641.436 547.373 629.177 547.372 623.344 500.084 641.439 500.085 641.436 547.373" fill="#ffb8b8"/><path d="M823.198,722.75707l-39.53052-.00146v-.5a15.38605,15.38605,0,0,1,15.38648-15.38623h.001l24.1438.001Z" transform="translate(-178.63501 -163.5)" fill="#2f2e41"/><polygon points="678.436 560.373 666.177 560.372 664.479 514.214 678.439 513.085 678.436 560.373" fill="#ffb8b8"/><path d="M860.198,735.75707l-39.53052-.00146v-.5a15.38605,15.38605,0,0,1,15.38648-15.38623h.001l24.1438.001Z" transform="translate(-178.63501 -163.5)" fill="#2f2e41"/><path d="M853.5844,715.24336l-9.54688-1.124a4.51224,4.51224,0,0,1-3.97388-4.4043l-1.78906-124.33887a1.49985,1.49985,0,0,0-2.91357-.47851L822.1154,622.29707l.94727,70.10156a4.49832,4.49832,0,0,1-4.22876,4.55274l-12.46387.52929a4.52692,4.52692,0,0,1-4.74439-3.9248l-6.50976-79.30078-.00415-.04981,9.8772-82.81933,74.1831,5.36718L858.57927,711.302a4.50657,4.50657,0,0,1-4.46631,3.97266A4.40036,4.40036,0,0,1,853.5844,715.24336Z" transform="translate(-178.63501 -163.5)" fill="#2f2e41"/><path d="M805.30559,538.72773a4.47312,4.47312,0,0,1-2.35474-3.61816s6.6709-41.48438,9.11548-42.2627l-5.34863-44.36328a40.90923,40.90923,0,0,1,8.78051-30.49023A39.01332,39.01332,0,0,1,842.53,403.51094q1.12134-.10109,2.23047-.1543a39.36853,39.36853,0,0,1,33.134,15.082,40.11988,40.11988,0,0,1,7.21949,36.40625l-2.99976,10.43945v72.95606a4.55525,4.55525,0,0,1-1.86182,3.65332c-9.34106,6.85547-19.897,9.2793-30.15551,9.2793C830.686,551.17305,812.33977,542.49336,805.30559,538.72773Z" transform="translate(-178.63501 -163.5)" fill="#6c63ff"/><path d="M747.71632,525.37712,734.8139,515.729a4.49946,4.49946,0,0,1-.59686-6.67226l76.863-82.47429A15.05277,15.05277,0,0,1,830.6013,424.507l.00021.00012a14.97783,14.97783,0,0,1,1.92528,22.97632L753.563,524.98515a4.47169,4.47169,0,0,1-5.36242.70857A4.62136,4.62136,0,0,1,747.71632,525.37712Z" transform="translate(-178.63501 -163.5)" fill="#6c63ff"/><path d="M846.4649,514.45717A10.05578,10.05578,0,0,1,861.18,509.85032l28.08641-22.09373,1.54966,18.50493L863.9071,524.40509a10.11027,10.11027,0,0,1-17.4422-9.94792Z" transform="translate(-178.63501 -163.5)" fill="#ffb8b8"/><path d="M871.60393,523.08223a4.46445,4.46445,0,0,1-3.023-3.249l-2.83716-11.916a4.43719,4.43719,0,0,1,1.65039-4.61231l19.08887-20.64453-28.07862-43.2959a15.24849,15.24849,0,0,1-.46191-18.626,15.242,15.242,0,0,1,26.29468,2.99414l26.104,50.81054a23.11846,23.11846,0,0,1-7.721,29.79493L875.94353,522.1584a4.46131,4.46131,0,0,1-2.97046,1.13672A4.54941,4.54941,0,0,1,871.60393,523.08223Z" transform="translate(-178.63501 -163.5)" fill="#6c63ff"/><path d="M867.12452,394.75775a4.39849,4.39849,0,0,1-6.49318-2.5649l-.01539-.06128c-.50024-2.04355-.10536-4.18241.02383-6.28233s-.08861-4.40488-1.52657-5.94066c-2.68052-2.86288-7.4138-1.31231-11.27146-2.01917a9.51064,9.51064,0,0,1-7.45268-10.117c.05255-.43662.13628-.87389.23045-1.31095a7.32469,7.32469,0,0,0-7.65072-8.82988c-3.89343.24353-8.091,1.446-11.32878-1.42141a8.3509,8.3509,0,0,1-2.05309-8.99159c1.81153-5.32069,6.99681-8.12883,12.13466-9.68478a44.5881,44.5881,0,0,1,37.8262,5.99911c3.26265,2.2737,6.31357,5.13619,7.71889,8.85636s.76213,8.42656-2.34866,10.904a20.12271,20.12271,0,0,1,4.76546,19.52057C878.16711,387.79388,870.82864,392.6,867.12452,394.75775Z" transform="translate(-178.63501 -163.5)" fill="#2f2e41"/><path d="M1021.365,735.5a1.00276,1.00276,0,0,1-1,1h-381a1,1,0,0,1,0-2h381A1.00276,1.00276,0,0,1,1021.365,735.5Z" transform="translate(-178.63501 -163.5)" fill="#3f3d56"/></svg>
        </div>
    </footer>
    </>
  )
}

export default App
