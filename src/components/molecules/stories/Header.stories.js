import React from 'react';
import { Header } from '../';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default { title: 'atoms.Header' };

export const example = () => <Router><Switch><Header/></Switch></Router>;
