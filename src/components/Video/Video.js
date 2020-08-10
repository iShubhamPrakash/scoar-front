import React, { useEffect } from "react";

const wid = "20%";


const room = { url: "https://scoar.daily.co/Demo" };

const callFrame = window.DailyIframe.createFrame({
  iframeStyle: {
    position: "absolute",
    border: 0,
    right: 0,
    bottom: 0,
    width: wid,
    height: "100%"
  },
});

const run = async () => {
  await callFrame.join({
    url: room.url,
    showLeaveButton: false,
    showFullscreenButton: true,
    userName: "AbhinavSrivastava",
  });
};

const showEvent = (e) => {
  if (e.participant.screen) {
    console.log("Shared");
  }
};

callFrame.on("participant-updated", showEvent);

try {
  if (callFrame["participant-updated"]["participant"].screen) {
    callFrame.requestFullScreen();
  } else {
    callFrame.exitFullScreen();
  }
} catch (e) {
  console.error(e);
}

const leave = (e) => {
  callFrame.destroy();
};


export default function Video() {
	useEffect(() => {
		run();
		return () => {
			leave();
		};
	}, []);


	return (
		<></>
	);
}
