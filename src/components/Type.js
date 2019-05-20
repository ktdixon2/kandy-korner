import React, { Component } from 'react';

export default class TypesList extends Component {
    render() {
        return (
            <section className="types">
                <h1>Candy Types</h1>
                {
                this.props.types.map(type =>
                    <div key={type.id}>
                        <p>{type.type}</p>
                    </div>
                )
                }

            </section>
        );
    }
}