import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Sort() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Sort">
    <Dropdown.Item href="#/action-1">Price</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Capacity</Dropdown.Item>
    
  </DropdownButton>
  );
}

export default Sort;
