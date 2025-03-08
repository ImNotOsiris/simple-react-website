import "./main.css";
import Button from "./Button.jsx";
import Footer from "./Footer.jsx";

function App() {
    return (
        <>
            <body className="bg-gray-900">
                <div className="flex flex-col justify-between min-h-screen">
                    <div className="flex items-center justify-center flex-grow flex-col">
                        <h1 className="text-white font-mono text-4xl">
                            Hello, World!
                        </h1>
                        <Button />
                    </div>
                    <Footer />
                </div>
            </body>
        </>
    );
}
export default App;
