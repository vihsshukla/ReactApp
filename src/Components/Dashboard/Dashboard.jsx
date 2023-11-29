import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const navigate = useNavigate();
    const isSignedIn = localStorage.getItem("isSignedIn");
    console.log({ dashboard: isSignedIn });

    useEffect(() => {
        !(isSignedIn === 'true') && navigate('/signin');
    }, []);

    return (
        <div className='main-page'>
            <div className="first-section">
                <div className="first-left">
                    {"Welcome to the dashboard"}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;