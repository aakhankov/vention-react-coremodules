import './DownloadIndicator.css';

const DownloadIndicator = () => {
  return (
    <div className="download-indicator">
      <div className="spinner"></div>
      <span>Downloading...</span>
    </div>
  );
};

export default DownloadIndicator;
