import React from 'react';
import './EventPlanner.css';

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>

            <section className="description">
                <p>
                    Plan and organize your events effortlessly with Event Planner.
                    From birthdays to corporate meetings, we've got you covered.
                </p>

                <button className="get-started-button">
                    Get Started
                </button>
            </section>

            <section className="events_categories">

                <div className="event-card">
                    <h2>Social Events:</h2>
                    <ul>
                        <li>Birthday parties</li>
                        <li>Anniversary celebrations</li>
                        <li>Wedding receptions</li>
                        <li>Baby showers</li>
                        <li>Graduation parties</li>
                        <li>Family reunions</li>
                    </ul>
                </div>

                <div className="event-card">
                    <h2>Entertainment Events:</h2>
                    <ul>
                        <li>Concerts</li>
                        <li>Music festivals</li>
                        <li>Film screenings</li>
                        <li>Comedy shows</li>
                        <li>Art exhibitions</li>
                        <li>Cultural events</li>
                    </ul>
                </div>

                <div className="event-card">
                    <h2>Community Events:</h2>
                    <ul>
                        <li>Fundraising events</li>
                        <li>Charity galas</li>
                        <li>Volunteer drives</li>
                        <li>Neighborhood block parties</li>
                        <li>Community festivals</li>
                        <li>Cultural celebrations</li>
                    </ul>
                </div>

            </section>

            <section className="features">
                <h2>Our Features</h2>
                <ul>
                    <li>Easy Event Planning</li>
                    <li>Professional Event Management</li>
                    <li>Customizable Event Packages</li>
                    <li>Budget-Friendly Options</li>
                    <li>24/7 Customer Support</li>
                </ul>
            </section>

            <section className="testimonials">
                <h2>Testimonials</h2>

                <div calssName="testimonials">
                    <p>
                        "Event Planner made organizing my wedding easy and stress-free!"
                    </p>
                    <p className="author">- Emily Johnson</p>
                </div>

                <div>
                    <p>
                        "I use Event Planner for all my corporate events. It saves me so much time and effort!"
                    </p>
                    <p className="author">- John Smith</p>
                </div>

                <div>
                    <p>
                        "Great service, affordable packages, and very professional staff!"
                    </p>
                    <p className="author">- Danilo Estuaria</p>
                </div>
            </section>

            <section className="contact">
                <h2>Contact Us</h2>

                <form>
                    <input
                        type="text"
                        placeholder="Your Name"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                    />

                    <input
                        type="text"
                        placeholder="Event Type"
                    />

                    <textarea
                        placeholder="Tell us about your event"
                    ></textarea>

                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </section>
        </div>
    );
};

export default EventPlanner;