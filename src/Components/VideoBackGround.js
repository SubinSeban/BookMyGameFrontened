const VideoBackGround = () => {
  return (
    <div>
      <iframe className="w-screen h-full aspect-video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/L3374C3OyrY?si=pNVdcRTcSnr0eemE ?&autoplay=1&mute=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default VideoBackGround;