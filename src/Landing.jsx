import "./Landing.css";
import logo from "./Cinema.png";


const Landing = () => {



    const handleSignInClick = () => {
        console.log("Sign In button clicked");
    };

    const DownloadApp = () => {
        const fileUrl = '/YourAppInstaller.exe';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'YourAppInstaller.exe';
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
                <button className="signin-button" onClick={handleSignInClick}>Sign In</button>
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