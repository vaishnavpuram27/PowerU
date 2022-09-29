import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link ,useSearchParams} from "react-router-dom";
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'

function User(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  var mail = searchParams.get("id");
  console.log(mail)
  const url = `./profile?id=${mail}`;
  return (
    <div className="user">
      <DropdownButton title="User" className="drop">
        <FontAwesomeIcon style={{ padding: '0 1em' }} color="#fff" icon={faUser} />
        <Dropdown.Item href={url}>My Account</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Log out</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default User;