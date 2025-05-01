import "./Landing.css";
import logo from "./Cinema.png";


const Landing = () => {



   
//C:\Users\Jacob\download\src\Cinema Desktop.exe
    const DownloadApp = () => {
        const fileUrl = 'https://raw.githubusercontent.com/molomojc/download/master/src/Cinema%20Desktop.exe';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'Cinema Desktop.exe';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    
        console.log('Download started:', fileUrl);
      };


    return (
        <div className="landing-container">
            <div className="Logo">
                <img src={logo} alt="Logo" className="src" />
            </div>
            <div className="signin">
                <button className="signin-button" ><a href="https://series2.netlify.app" className="href">Sign In</a></button>
            </div>
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h1 className="Header">
                    Unlimited movies,<br /> &nbsp;  TV shows, and <br/> &nbsp;  &nbsp;  &nbsp; more
                </h1>
                <p className="sub-header">
                    Home of entertainment
                </p>

                <div className="space-y-3">
                    <button className="download-button" onClick={DownloadApp}>
                        Download Desktop App
                    </button>
                    <a href="https://series2.netlify.app" className="online">Stream Online instead.</a>
                </div>
            </div>
        </div>
    );

}

export default Landing;