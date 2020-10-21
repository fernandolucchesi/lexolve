import Router from "next/router";
import NProgress from "nprogress";

let timeout: NodeJS.Timeout;

const start = () => {
  timeout = setTimeout(NProgress.start, 100);
};

const done = () => {
  clearTimeout(timeout);
  NProgress.done();
};

Router.events.on("routeChangeStart", start);
Router.events.on("routeChangeComplete", done);
Router.events.on("routeChangeError", done);

export default function RouterProgress() {
  return (
    <style jsx global>
      {`
        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          background: #2f855a;
          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
        }

        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px black, 0 0 5px black;
          opacity: 1;
          transform: rotate(3deg) translate(0px, -4px);
        }
      `}
    </style>
  );
}
