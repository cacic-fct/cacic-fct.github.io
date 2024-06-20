import style from './noBroadcasts.module.css';

export default function NoBroadcasts() {
  return (
    <div className={style.video_wrapper}>
      <iframe
        // Canal do CACiC
        src="https://www.youtube.com/embed/live_stream?channel=UCoYH_4dyIQHx2Kad-HG6aNA&autoplay=1"
        title="Transmissão do YouTube"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  );
}
