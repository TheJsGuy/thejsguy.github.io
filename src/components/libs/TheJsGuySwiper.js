import React, { useState, useEffect, useCallback, useRef } from "react";

const debounce = (callback, wait, immediate) => {
  let timeout;

  return (...args) => {
    const later = () => {
      timeout = null;
      if (!immediate) callback(...args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
    if (callNow) callback(...args);
  };
};

const createSwipeEvent = (direction) =>
  new CustomEvent("@thejsguy:swipe", { detail: { direction } });

const createSwipingEvent = (detail) =>
  new CustomEvent("@thejsguy:swiping", { detail });

const TouchStatus = {
  started: "@thejsguy:swiper:touchStarted",
  ended: "@thejsguy:swiper:touchEnded",
};

const detectSwipe = () => {
  let detect = {
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    minX: 30, // min X swipe for horizontal swipe
    maxX: 30, // max X difference for vertical swipe
    minY: 50, // min Y swipe for vertial swipe
    maxY: 60, // max Y difference for horizontal swipe
  };
  let direction;
  let element;
  let touchStatus = TouchStatus.ended;

  let initialiseDetect = () => {
    detect = {
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0,
      minX: 30,
      maxX: 30,
      minY: 50,
      maxY: 60,
    };
  };

  let initialiseDirection = () => {
    direction = undefined;
  };

  const debouncedCallback = debounce((direction) => {
    document.dispatchEvent(createSwipeEvent(direction));
  }, 50);

  const debouncedSwiping = debounce((event) => {
    document.dispatchEvent(createSwipingEvent(event));
  }, 5);

  const getSwipeDirection = () => {
    if (
      // Horizontal move.
      Math.abs(detect.endX - detect.startX) > detect.minX &&
      Math.abs(detect.endY - detect.startY) < detect.maxY
    ) {
      return detect.endX > detect.startX ? "right" : "left";
    } else if (
      // Vertical move.
      Math.abs(detect.endY - detect.startY) > detect.minY &&
      Math.abs(detect.endX - detect.startX) < detect.maxX
    ) {
      return detect.endY > detect.startY ? "down" : "up";
    }
  };

  const onTouchStart = (event) => {
    const [touch] = event.touches;
    detect.startX = touch.screenX;
    detect.startY = touch.screenY;
    touchStatus = TouchStatus.started;
  };

  const onTouchMove = (event) => {
    const [touch] = event.touches;
    detect.endX = touch.screenX;
    detect.endY = touch.screenY;
    if (getSwipeDirection() === "left" || getSwipeDirection() === "right") {
      event.preventDefault();
    }

    if (touchStatus === TouchStatus.started) {
      debouncedSwiping({
        x: touch.screenX,
        y: touch.screenY,
        dx: touch.screenX - detect.startX,
        dy: touch.screenY - detect.startY,
      });
    }
  };

  const onTouchEnd = (event) => {
    touchStatus = TouchStatus.ended;
    direction = getSwipeDirection();

    if (direction && typeof debouncedCallback === "function") {
      debouncedCallback(direction);
    }
  };

  return {
    startSwiper: (el) => {
      element = el;
      initialiseDetect();
      initialiseDirection();
      element.addEventListener("touchstart", onTouchStart);
      element.addEventListener("touchmove", onTouchMove);
      element.addEventListener("touchend", onTouchEnd);
    },
    stopSwiper: () => {
      element.removeEventListener("touchstart", onTouchStart);
      element.removeEventListener("touchmove", onTouchMove);
      element.removeEventListener("touchend", onTouchEnd);
    },
  };
};

const swiper = detectSwipe();

export const TheJsGuySwiper = () => {
  const [lastSwipe, setLastSwipe] = useState("None");
  const [pointerLoc, setPointerLoc] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState(1);

  const swipeArea = useRef();
  const follower = useRef();
  const followerInitialPos = useRef();

  if (!followerInitialPos.current && follower.current) {
    followerInitialPos.current = {
      y: follower.current.offsetTop,
      x: follower.current.offsetLeft,
    };
  }

  const onSwipe = useCallback(
    (e) => {
      if (e.detail.direction === "right" && activeTab > 1) {
        setActiveTab(activeTab - 1);
      }

      if (e.detail.direction === "left" && activeTab < 3) {
        setActiveTab(activeTab + 1);
      }
      setLastSwipe(e.detail.direction);
      followerInitialPos.current = undefined;
    },
    [lastSwipe, activeTab]
  );

  const onSwiping = useCallback(
    (e) => {
      setPointerLoc(e.detail);
    },
    [lastSwipe]
  );

  const startSwiper = useCallback(() => {
    swiper.startSwiper(swipeArea.current);
  });

  const stopSwiper = useCallback(() => {
    swiper.stopSwiper();
  });

  useEffect(() => {
    document.addEventListener("@thejsguy:swipe", onSwipe);
    document.addEventListener("@thejsguy:swiping", onSwiping);

    return () => {
      document.removeEventListener("@thejsguy:swipe", onSwipe);
      document.removeEventListener("@thejsguy:swiping", onSwiping);
    };
  });

  return (
    <div>
      <h1 className="text-2xl">Hello Swiper</h1>
      <p className="mt-2 mb-2">
        <span className="uppercase bg-purple-800 text-white px-2 py-2">
          {lastSwipe}
        </span>
      </p>
      <div className="w-100 bg-violet-300 h-96">
        swipe on this area x: {pointerLoc.x} y: {pointerLoc.y}
        <br />
        swipe on this area dx: {pointerLoc.dx} dy: {pointerLoc.dy}
        <div className="w-96 flex flex-row overflow-auto">
          {[1, 2, 3].map((_) => (
            <div
              className={`border-b-2 border-cyan-700 mr-1 ${
                (_ === activeTab && "bg-cyan-300") || ""
              }`}
              key={_}
              onClick={() => setActiveTab(_)}
            >
              Tab {_}
            </div>
          ))}
        </div>
        <div className="w-96 flex flex-row overflow-x-hidden relative h-20" ref={swipeArea}>
          {[1, 2, 3].map((_) => (
            <div
              className="min-w-full w-40 h-20 bg-red-300 absolute transition ease-in-out delay-150"
              key={_}
              style={{
                ...(activeTab === _
                  ? { transform: "translateX(0)" }
                  : _ < activeTab
                  ? { transform: "translateX(-100%)" }
                  : { transform: "translateX(200%)" }),
              }}
            >
              Tab Content {_}
            </div>
          ))}
        </div>
      </div>
      <div
        ref={follower}
        style={{
          position: "fixed",
          zIndex: "100",
          ...(followerInitialPos.current && {
            left: followerInitialPos.current.x + pointerLoc.dx,
          }),
        }}
        className="w-5 h-5 bg-yellow-300 rounded-xl"
      ></div>
      <button
        className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-10 px-6 rounded-lg dark:bg-indigo-600 dark:highlight-white/20 dark:hover:bg-indigo-400 mr-2"
        onClick={startSwiper}
      >
        Start
      </button>
      <button
        className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-10 px-6 rounded-lg dark:bg-red-500 dark:highlight-white/20 dark:hover:bg-red-400"
        onClick={stopSwiper}
      >
        Stop
      </button>
    </div>
  );
};
