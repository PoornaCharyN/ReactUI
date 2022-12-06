import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import NavBarContainer from './components/basic/Navbar/NavBarContainer';
import ButtonContainer from './components/basic/Button/ButtonContainer';
import InputContainer from './components/basic/Input/InputContainer';
import ToggleButtonContainer from './components/basic/ToggleButton/ToggleButtonContainer';
import RadioButtonContainer from './components/basic/RadioAndCheckBox/RadioButtonContainer';
import DropDownContainer from './components/basic/Dropdown/DropDownContainer';
import ImageContainer from './components/basic/Image/ImageContainer';
import TooltipContainer from './components/overlay/Tooltip/TooltipContainer';
import PopoverContainer from './components/overlay/Popover/PopoverContainer';
import ModalContainer from './components/overlay/Modal/ModalContainer';
import AlertContainer from './components/utility/Alert/AlertContainer';
import SpinnerContainer from './components/utility/Spinner/SpinnerContainer';
import ToastContainer from './components/utility/Toast/ToastContainer';
import TableContainer from './components/tables/Table/TableContainer';
import TabsContainer from './components/utility/Tabs/TabsContainer';
import FormContainer from './components/utility/Form/FormContainer';
import BreadcrumbsContainer from './components/utility/Breadcrumbs/BreadcrumbsContainer';
import ApiDataTableContainer from './components/tables/ApiDataTable/ApiDataTableContainer';
import EditableTableContainer from './components/tables/EditableTable/EditableTableContainer';
import FilterTableContainer from './components/tables/FilterTable/FilterTableContainer';
import PaginationTableContainer from './components/tables/PaginationTable/PaginationTableContainer';
import SortableTableContainer from './components/tables/SortableTable/SortableTableContainer';
import AccordionContainer from './components/utility/Accordion/AccordionContainer';
import CarouselsContainer from './components/utility/Carousels/CarouselsContainer';
import ProgressContainer from './components/utility/Progress/ProgressContainer';
import CardsContainer from './components/utility/Cards/CardsContainer';
import PaginationContainer from './components/utility/Pagination/PagninationContainer';

import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/button' component={ButtonContainer} />
      <Route path='/input' component={InputContainer} />
      <Route path='/toggleButton' component={ToggleButtonContainer} />
      <Route path='/radioButton' component={RadioButtonContainer} />
      <Route path='/dropdown' component={DropDownContainer} />
      <Route path='/image' component={ImageContainer} />
      <Route path= '/navbar'component={NavBarContainer} />
      <Route path='/tooltip' component={TooltipContainer} />
      <Route path='/popover' component={PopoverContainer} />
      <Route path='/modal' component={ModalContainer} />
      <Route path='/alert' component={AlertContainer} />
      <Route path='/spinner' component={SpinnerContainer} />
      <Route path='/toast' component={ToastContainer} />
      <Route path='/table' component={TableContainer} />
      <Route path='/tabs' component={TabsContainer} />
      <Route path='/form' component={FormContainer} />
      <Route path='/apidatatable' component={ApiDataTableContainer} />
      <Route path='/editabletable' component={EditableTableContainer} />
      <Route path='/filtertable' component={FilterTableContainer} />
      <Route path='/paginationtable' component={PaginationTableContainer} />
      <Route path='/sortabletable' component={SortableTableContainer} />
      <Route path='/accordion' component={AccordionContainer} />
      <Route path='/breadcrumbs' component={BreadcrumbsContainer} />
      <Route path='/carousels' component={CarouselsContainer} />
      <Route path='/progress' component={ProgressContainer} />
      <Route path='/cards' component={CardsContainer} />
      <Route path='/pagination' component={PaginationContainer} />
    </div>

  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
