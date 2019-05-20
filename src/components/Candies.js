import React, { Component } from 'react';

export default class CandiesList extends Component {
    render() {
        return (
            <section className="candies">
                <h1>List of Candies</h1>
                {
                this.props.candies.map(candy =>
                    <div key={candy.id}>
                        <p>{candy.name}</p>
                    </div>
                )
                }

            </section>
        );
    }
}