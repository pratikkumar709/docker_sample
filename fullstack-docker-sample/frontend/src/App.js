import React from 'react';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to My Fullstack Application</h1>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="home">
                    <h2>Home</h2>
                    <p>This is the home section of the fullstack application.</p>
                </section>
                <section id="about">
                    <h2>About</h2>
                    <p>This section contains information about the application.</p>
                </section>
                <section id="contact">
                    <h2>Contact</h2>
                    <p>Feel free to reach out via the contact form.</p>
                </section>
            </main>
            <footer>
                <p>&copy; 2026 My Fullstack Application. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;