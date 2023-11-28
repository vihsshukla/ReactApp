import './AccessDenied.css';

export const AccessDenied = () => {
    return (
        <>
            <div className="main">
                <h3>Sorry, you do not have permission to view this page.</h3>
                <a href="/">Click here</a>  to go back to the Homepage.
            </div>
        </>

    );
}

export default AccessDenied;