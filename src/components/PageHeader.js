import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ title, subtitle }) => {
    return (
        <header className="page-header">
            <h1 className="page-header__title">
                { title }
            </h1>
            <h2 className="page-header__subtitle">
                { subtitle }
            </h2>
        </header>
    );
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};

export default PageHeader;