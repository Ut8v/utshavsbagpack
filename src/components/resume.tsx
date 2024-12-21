import { IoIosDownload } from "react-icons/io";
import FileSaver from 'file-saver';
const DownloadResume = () => {
    const save = () => {
        FileSaver.saveAs(
             "/resume.pdf",
            "Utshav_Khatiwada_Resume.pdf"
        );
    };
    return (
      <div
        className="d-flex justify-content-center align-items-center"
      >
          <button className="btn btn-primary btn-lg shadow" onClick={save}>
            Download My Resume
            <IoIosDownload size={24} fill="black"/>
          </button>
      </div>
    );
  };
  
  export default DownloadResume;