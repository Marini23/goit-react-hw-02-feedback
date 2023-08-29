import React from 'react';
import PropTypes from 'prop-types';
import { MessageText } from './Notification.styled';

export const Notification = ({ message }) => {
    return (
        <MessageText>{message}</MessageText>
    );
};


Notification.ptopTypes = {
    message: PropTypes.string,
};