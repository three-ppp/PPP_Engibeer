import { VFC } from "react";

type Props = {
  archiveURL: string;
};

const ArchiveIframe: VFC<Props> = (props) => {
  const { archiveURL } = props;
  return (
    <iframe
      width="560"
      height="315"
      src={archiveURL}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default ArchiveIframe;
