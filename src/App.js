// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    
    <header>
        <section>
             {/* <img src="./media/dreamhyre_white (1).svg" alt=""> */}

        </section>
        <nav>
            <ul>
                <li>Home</li>
                <li>Services and Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <p>
                <ion-icon id="profileIcon" name="person-circle-sharp"></ion-icon>
                <button>
                    Log In</button>
                <span>
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </span>
            </p>
        </nav>
    </header>
   

    <main class="home">
        <section>
            <article>
                <h2>
                    <span>FULL STACK.</span>
                    <span>WEB DEVELOPMENT.</span>
                </h2>
                <h1>
                   
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi numquam incidunt impedit quos
                    modi eaque voluptates quam repellat id temporibus ipsam!
                    Nihil quod sit exercitationem molestiae!</p>
                <button>EXPLORE</button>

            </article>
        </section>

         <img src="home2.jpg" alt=""/> 
    </main>
     babji -

    <main id="teach">

        <aside>
            <article>
                <h1></h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                    hic, asperiores dolo
                </p>
                <button>About Us</button>
            </article>
        </aside>
        <section>
            <article>
                <h3>FRONT END</h3>
                <img src="./media/frontend2.png" alt="" />
            </article>
            <article>
                <h3>BACK END</h3>
                <img src="./media/backend1 (1).png" alt="" />
            </article>
            <article>
                <h3>FULL STACK</h3>
                <img src="./media/fullstack (1).png" alt="" />
            </article>
            <article>
                <h3>DS&ALGO</h3>
                <img src="./media/ds&algo.png" alt="" />
            </article>
        </section>
    </main>

    <main class="partners-main">
        <aside class="partners-top">
            <h1>Trusted by Companies and Enterpreneurs Throughout the Country</h1>
        </aside>
        <hr />
        <aside class="partners-middle">
            <img src="https://flatly.io/vite/assets/plaid-icon.8eb2c50b.svg" alt="partner-pic" />
            <img src="https://flatly.io/vite/assets/plaid-icon.8eb2c50b.svg" alt="partner-pic" />
            <img src="https://flatly.io/vite/assets/plaid-icon.8eb2c50b.svg" alt="partner-pic" />
            <img src="https://flatly.io/vite/assets/plaid-icon.8eb2c50b.svg" alt="partner-pic" />
        </aside>
        <article class="partners-dataset">
            <article>
                <div>
                    <span>,,</span>
                    <h3>Organized and Efficient</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum veniam rerum placeat aperiam
                        incidunt unde ratione modi.</p>
                    <h3>Name</h3>
                    <p>SubName</p>
                </div>
            </article>
            <article>
                <div>
                    <span>,,</span>
                    <h3>Flexible and Committed</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum veniam rerum placeat aperiam
                        incidunt unde ratione modi.</p>
                    <h3>Name</h3>
                    <p>SubName</p>
                </div>
            </article>
            <article>
                <div>
                    <span>,,</span>
                    <h3>Creative and Resourceful</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum veniam rerum placeat aperiam
                        incidunt unde ratione modi.</p>
                    <h3>Name</h3>
                    <p>SubName</p>
                </div>
            </article>
        </article>
        <section class="partners-bottom"></section>
    </main>

    <main id="about_us">
            <aside className="about-left"></aside>
            <section className="portfolio">
                <aside className="portfolio-left">
                    <img src="./media/profile2.jpg" alt="image" />
                    <h1>BRUCE WAYN</h1>
                    <hr />
                    <h3>FOUNDER AND CEO</h3>
                    <p>
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-twitter"></ion-icon>
                        <ion-icon name="logo-linkedin"></ion-icon>
                        <ion-icon name="logo-instagram"></ion-icon>
                    </p>
                </aside>
                <aside className="portfolio-right">
                    <h1>Hello</h1>
                    <h3>Here's who I am & what I do</h3>
                    <p className="about-btns">
                        <button className="about-resume">Resume</button>
                        <button className="about-project">Projects</button>
                    </p>
                    <p id="about_founder">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui impedit repudiandae
                        consequuntur
                        deleniti accusamus saepe quos sit optio incidunt illum consequatur doloribus omnis voluptatem esse,
                        perspiciatis vitae porro corrupti distinctio!</p>
                </aside>
            </section>
            <aside className="about-right"></aside>
        </main>

    <main id="pre">
        <form id="pre_form" action="">
            <h1>Ask us a question</h1>
            <label for="" id="question">
                <input type="text" name="fname" id="please enter your question*"
                    placeholder="please enter your question"/><button>SUBMIT</button>
            </label>
            <p>please ask a question to see an answer...</p>
            <hr/>
            <summary id="faq">Popular questions</summary>
            <details>
                <summary>What is Full Stack development?</summary>
                <p>Full stack technology refers to the entire depth of a computer system application, and full stack
                    developers straddle two separate web development domains: the front end and the back end. The front
                    end includes everything that a client, or site viewer, can see and interact with.</p>
            </details>
            <details>
                <summary>What do Full Stack Web Developers do?</summary>
                <p>A full-stack developer is a developer or engineer who can build both the front end and the back end
                    of a website. The front end (the parts of a website a user sees and interacts with) and the back end
                    (the behind-the-scenes data storage and processing) require different skill sets.</p>
            </details>
            <details>
                <summary>Names of a few Full Stack developer tools?</summary>
                <p>
                    <ul>
                        <li> Backbone. Backbone allows you to structure your JavaScript code. ...</li>
                        <li> WebStorm. WebStorm is a powerful JavaScript IDE. ...</li>
                        <li>CodePen. ...</li>
                        <li>Visual Studio Code. ...</li>
                        <li>GitHub. ...</li>
                        <li> TypeScript. ...</li>
                        <li>Electron. ...</li>
                        <li> Slack.</li>
                    </ul>
                </p>
            </details>
            <details>
                <summary>What skills do you need to be a full-stack developer?</summary>
                <p>A full stack developer requires skills such as Front-end Languages and Frameworks (HTML, CSS,
                    JavaScript), Backend Technologies and Frameworks (NodeJS, ExpressJS, Django, Flask, C++), Database
                    Management Systems (MySQL, SQL SERVER and PostgreSQL, MongoDB, and Oracle Database), Version
                    Control, and Web Hosting Platforms ...</p>
            </details>
            <details>
                <summary>Which type of full stack developer is best?</summary>
                <p>
                    <ul>
                        <li>Node JS and Express. js (JavaScript Framework) ...</li>
                        <li>Django (Python Framework) ...</li>
                        <li>Angular (JavaScript Framework) ...</li>
                        <li>React JS (JavaScript Library) ...</li>
                        <li>Spring Boot (JavaScript Framework) ...</li>
                        <li>Graph QL (JavaScript Library) ...</li>
                        <li>Bootstrap (CSS Framework) ...</li>
                        <li>Ruby on Rails (Ruby Framework)</li>
                    </ul>
                </p>
            </details>
        </form>

    </main>

    <footer>
        <h3>DREAMHYRE</h3>
        <hr/>
        <main>
            <section>
                <ul>

                    <li>Technology</li>
                    <li>About</li>
                    <li>Careers</li>
                </ul>
                <ul id="tel">
                    <li>Tel:123-456-7890</li>
                    <li>Email:info@mysite.com</li>
                    <li>500 terry francois st san fransisco,CA 94158</li>
                </ul>
            </section>
            <section id="subscribe">
                <h4>SUBSCRIBE</h4>
                <p>sign upto recieve aitono news and updates</p>
                <p>Email*</p>
                <article>
                    <label for="">
                        <input type="email" name="email" id="email"/><button>subscribe</button>
                    </label>

                    <span>
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <ion-icon name="logo-twitter"></ion-icon>
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </span></article>
            </section>
        </main>
    </footer>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
{/* </body> */}
<article> 
  <p> Copyrights  &copy;2023 <strong>TEAM ONE</strong>. All rights reserved </p></article>
    </div>
  );
}

export default App;
