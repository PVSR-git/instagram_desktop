import bgImg from "./assets/home.svg";
import rgImg from "./assets/reels.svg";
import sgImg from "./assets/search.svg";
import mgImg from "./assets/madhu.png";
import srgImg from "./assets/Sravan.png";
import egImg from "./assets/elon.png";
import ngImg from "./assets/nara.png";
import vgImg from "./assets/venky.png";
import rgvgImg from "./assets/rgv.png";
import bilgImg from "./assets/billgate.png";
import kgImg from "./assets/kumar.png";
import hgImg from "./assets/heart.svg";
import cgImg from "./assets/comment.svg";
import shgImg from "./assets/share.svg";
import sagImg from "./assets/save.svg";

import "./App.css";

function App() {
  return (
    <div className="container">
      <section className="header">
        <div className="header-container">
          <div className="header-child-info">
            <div className="header-child">
              <img src={mgImg} width={70} height={70}></img>
              <p>madhu.polu...</p>
            </div>
            <div className="header-child">
              <img src={egImg} width={70} height={70}></img>
              <p>Elon musk...</p>
            </div>
          </div>
          <div className="header-charter-id">
            <div className="charter-id-info">
              <img src={srgImg} width={72} height={72} className="sravan"></img>
              <div className="user-info">
                <li className="name">Sravan Polu</li>
                <li className="user-id">sravankumar.polu</li>
              </div>
              <h4 id="charter-active" style={{ color: "blue" }}>
                Switch
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className="aside">
        <h2>Instagram</h2>
        <div className="aside-container">
          <div className="search">
            <img src={sgImg}></img>
            <h4>Search</h4>
          </div>
          <div className="home">
            <img src={bgImg}></img>
            <h4>Home</h4>
          </div>
          <div className="reels">
            <img src={rgImg}></img>
            <h4>Reels</h4>
          </div>
        </div>
      </section>
      <section className="main">
        <div class="chart-content">
          <div class="chart">
            <div className="main-charter">
              <img src={mgImg} width={40} height={40}></img>
              <div className="charter-name-info">
                <p className="charter-name">Madhu polu .</p>
                {/* <p className="charterid">Original</p> */}
              </div>

              <p id="chart-time">14h</p>
            </div>
            <div className="send-info">
              <img src={ngImg} width={260} height={260}></img>
              <img src={ngImg} width={260} height={260}></img>
            </div>
            <div className="insta-svg">
              <div>
                <svg
                  aria-label="Unlike"
                  class="x1lliihq x1n2onr6"
                  height="22"
                  stroke="hsl(0,0%,0%)"
                  stroke-width="3"
                  role="img"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <title>Unlike</title>
                  <path
                    d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
                    fill="white"
                  ></path>
                </svg>
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 122.97 122.88"
                  width="20px"
                  height="20px"
                >
                  <title>comment</title>
                  <path d="M61.44,0a61.46,61.46,0,0,1,54.91,89l6.44,25.74a5.83,5.83,0,0,1-7.25,7L91.62,115A61.43,61.43,0,1,1,61.44,0ZM96.63,26.25a49.78,49.78,0,1,0-9,77.52A5.83,5.83,0,0,1,92.4,103L109,107.77l-4.5-18a5.86,5.86,0,0,1,.51-4.34,49.06,49.06,0,0,0,4.62-11.58,50,50,0,0,0-13-47.62Z" />
                </svg>
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 122.88 108.3"
                  width="20px"
                  height="20px"
                >
                  <title>share</title>
                  <path d="M96.14,12.47l-76.71-1.1,28.3,27.85L96.14,12.47ZM53.27,49l9.88,39.17L102.1,22,53.27,49ZM117,1.6a5.59,5.59,0,0,1,4.9,8.75L66.06,105.21a5.6,5.6,0,0,1-10.44-1.15L41.74,49,1.67,9.57A5.59,5.59,0,0,1,5.65,0L117,1.6Z" />
                </svg>
              </div>
              <img src={sagImg}></img>
            </div>

            <h4 className="likes-info">34 likes</h4>
            <p className="views-info">View all 78 comments</p>
            <p className="do-comment-info">Add a comment</p>
          </div>
          <div className="chart-overview">
            <div className="overview-info">
              <h4>Suggested for you</h4>
              <h4>See All</h4>
            </div>
            <div className="overview-list">
              <img src={vgImg} width={50} height={50} />
              <div className="friend-info">
                <li className="name">Venkatesh Polu</li>
                <li className="user-id">Follows you</li>
              </div>
              <h4 className="follows-demo" style={{ color: "blue" }}>
                Follow
              </h4>
            </div>
            <div className="overview-list">
              <img src={kgImg} width={50} height={50} />
              <div className="friend-info">
                <li className="name">Kumar</li>
                <li className="user-id">Followed by Narasimha</li>
              </div>
              <h4 className="follows-demo" style={{ color: "blue" }}>
                Follow
              </h4>
            </div>
            <div className="overview-list">
              <img src={rgvgImg} width={50} height={50} />
              <div className="friend-info">
                <li className="name">
                  RGVZoomIn
                  <div
                    data-bloks-name="ig.components.Icon"
                    class="wbloks_1"
                  ></div>
                </li>
                <li className="user-id">Followed by Puri</li>
              </div>
              <h4 className="follows-demo" style={{ color: "blue" }}>
                Follow
              </h4>
            </div>
            <div className="overview-list">
              <img src={bilgImg} width={50} height={50} />
              <div className="friend-info">
                <li className="name">
                  Billgate
                  <div
                    data-bloks-name="ig.components.Icon"
                    class="wbloks_1"
                  ></div>
                </li>
                <li className="user-id">Followed by Madhu Polu</li>
              </div>
              <h4 className="follows-demo" style={{ color: "blue" }}>
                Follow
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className="footer">
        <h3>© 2023 INSTAGRAM FROM META</h3>
      </section>
    </div>
  );
}

export default App;
