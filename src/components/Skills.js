import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills  and Experience</h2>
                        <p>
                          I have 1 year of experience in React js, Python(Django), Node js. <br></br>
                          <strong>In react</strong>, i have a deep understanding of React's component-based architecture, enabling me to create reusable and modular UI components.
                            I am experienced in managing application state using libraries such as Redux.
                            I have utilized React Router to implement dynamic routing within applications.
                            I have integrated React applications with RESTful APIs and have experience in handling asynchronous data fetching using libraries like Axios or the built-in Fetch API
                          <br></br>
                          <strong>In Python</strong>, i possess a solid foundation in Python and have used Django extensively to build server-side logic for web applications. 
                            I am well-versed in Django's ORM (Object-Relational Mapping), allowing me to design and interact with databases efficiently.  I have designed and implemented RESTful APIs using Django REST Framework. 
                            I understand the importance of well-designed APIs for seamless communication between the front-end and back-end, enabling smooth integration with various clients.
                            I have experience working with databases such as MySQL through Django's ORM. I can design database schemas, create efficient queries, and handle data migrations effectively.
                            <br></br>
                          <strong>In Node js</strong>, i am familiar with the event-driven, non-blocking nature of Node.js that enables high scalability and performance.
                            I have worked with frameworks like Express.js to create server routes, handle middleware, and interact with databases.
                            I am comfortable with asynchronous programming, using promises or async/await, and have experience with real-time applications using libraries like Socket.io.
                          </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Frontend(React js)</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Backend(Python/Django)</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Backend(Node js/Express js)</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
