const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-15 bg-linear-to-t from-neutral-100 to-purple-500">
      <div className="font-bold text-4xl text-neutral-50 pb-14">
        <p>WebDev Course</p>
      </div>
      <div className="pb-15 max-w-6xl flex flex-wrap justify-center items-center gap-7">
        <div className="flex flex-wrap gap-7">
          <iframe
            className="rounded-4xl p-2 bg-linear-to-b from-neutral-100 to-purple-500"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3LRZRSIh_KE?si=mvjiUDA6VIIs01K2"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            className="rounded-4xl p-2 bg-linear-to-b from-neutral-100 to-purple-500"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?si=tx0LRIY7pkItbYhi&amp;list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            className="rounded-4xl p-2 bg-linear-to-b from-neutral-100 to-purple-500"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kvP6hDXWy88?si=Cu8JtE9PMkQoRP0m"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            className="rounded-4xl p-2 bg-linear-to-b from-neutral-100 to-purple-500"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/okafXM31xGk?si=eF2Fkgs552v77oUR"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            className="rounded-4xl p-2 bg-linear-to-b from-neutral-100 to-purple-500"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Hr5iLG7sUa0?si=o7kID2TNFS1T-d9T"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            className="rounded-4xl p-2 bg-linear-to-b from-neutral-100 to-purple-500"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YwsOCN8woA8?si=6zaeZk42LkY6ZvFE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default App;
