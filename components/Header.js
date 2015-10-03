var React = require('react');
var NavLink = require('fluxible-router').NavLink;
var NavigateAction = require('fluxible-router').navigateAction;
var CircleButton = require('./oui/CircleButton');

var Header = React.createClass({
    render: function() {
        return (
            <header className="o-header no-link">
                <div className="o-header-item">
                    <NavLink href="/">
                        <h1>An O Site</h1>
                    </NavLink>
                </div>
            </header>
        );
    }
});

module.exports = Header;