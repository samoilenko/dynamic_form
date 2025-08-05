import React from 'react'

/** @type {Record<string, string>} */
const errors = {};
const ValidationErrorsContext = React.createContext(errors);

export default ValidationErrorsContext;
