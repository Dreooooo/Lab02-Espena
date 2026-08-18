import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>

            <section className="description">
                <p>
                    Plan and organize your events easily with our Event Planner.
                    Whether it is a personal or corporate event, we are here to help.
                </p>

                <button className="get-started-button">
                    Get Started
                </button>
            </section>

            <section className="events_categories">
                <ul>
                    <h1>Event Categories</h1>
                    <li>Weddings</li>
                    <li>Birthday Parties</li>
                    <li>Corporate Events</li>
                    <li>Conferences</li>
                </ul>
            </section>
        </div>
    );
};

export default EventPlanner;
