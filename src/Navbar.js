import PropTypes from 'prop-types';
import './styles/Navbar1.css';
import sarclogo from '../assets/sarclogo.png';
import yblogo from '../assets/yb_logo.png';
import React, { useState, useContext, useEffect } from 'react';
import { MentionsInput, Mention } from 'react-mentions';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { debounce } from 'lodash'; //ye debounce laga diya ..jisse delay hoga 

import {
  FaHome,
  FaPoll,
  FaMailBulk,
  FaImage,
  FaUserFriends,
  FaUser,
  FaUserPlus,
  FaSignOutAlt,
  FaBell,
} from 'react-icons/fa';
import NotifContext from '../context/NotifContext';
import { useProfile } from '../hooks/useProfile';
import { useUser } from '../hooks/useUser';

function Navbar() {
  const profileData = useProfile();
  const { user } = useUser();
  const { status, togglePlayPause } = useContext(NotifContext);

  const [profileDropdown, setProfileDropdown] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [users, setUsers] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState(''); //search ko debounce search kar diya 

  const handleToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleTextChange = event => {
    const searchTerm = event.target.value;
    setTextValue(searchTerm);
    setDebouncedSearch(searchTerm);
    console.log(searchTerm);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (debouncedSearch) {
        axios
          .post('https://yearbook.sarc-iitb.org/api/search/search/', {
            query: {
              multi_match: {
                fields: ['name', 'hostel', 'department', 'degree', 'program'],
                query: debouncedSearch,
                fuzziness: 'AUTO',
                type: 'best_fields',
              },
            },
          })
          .then(response => {
            const foundUsers = response.data.hits.hits.map(hit => hit._source);
            const mappedUsers = foundUsers.map(user => ({
              id: user.id,
              display: user.name,
              department: user.department,
              profile_image: user.profile_image,
              hostel: user.hostel,
              is_ib: user.is_ib,
            }));
            setUsers(mappedUsers);
            console.log(mappedUsers);
          })
          .catch(error => {
            console.error('Error searching users:', error);
          });
      } else {
        setUsers([]); // Clear users when search term is empty
      }
    }, 500); //ye dal diya...isse hi ab constant 6 nhi dikha raha
    //matlb yadi elastic search ke views se ):^ hata denge to bhi sayad ye nhi hoga

    return () => clearTimeout(delayDebounceFn);
  }, [debouncedSearch]);

  // const handleToggle = () => {
  //   setShowDropdown(!showDropdown);
  // };

  return (
    <>
      <nav className="navbar">
        <a href="/" style={{ height: '2.8rem' }}>
          <img className="navbar__logo" src={sarclogo} alt="SARC Logo" />
        </a>
        {user && (
          <div className="navbar__search" style={{ backgroundColor: showDropdown ? 'white' : '', borderRadius: showDropdown ? '5%' : '' }}>
            <MentionsInput
              placeholder="Search..."
              value={textValue}
              markup="_display(id_)"
              onChange={handleTextChange}
              style={{ color: '#865DFF', height: '100%', width: '100%' }}
              a11ySuggestionsListLabel={'Choose among the following suggestions'}
            >
              <Mention style={{ color: 'gray' }} data={users} />
            </MentionsInput>
          </div>
        )}
        {textValue && (
          <div className="usersList">
            {users.map(user => (
              <ul className="mainBox" key={user.id}>
                <li className="mainList">
                  <Link
                    onClick={() => {
                      setTextValue('');
                    }}
                    className="particularUser"
                    to={`/profile/${user.id}`}
                  >
                    {user.profile_image && (
                      <img
                        className="Profilepic"
                        src={'https://yearbook.sarc-iitb.org' + user.profile_image}
                        alt="profile"
                      />
                    )}
                    <span style={{ fontSize: '100%', display: 'flex', alignItems: 'center' }}>{user.display}</span>
                    {!user.is_ib && (
                      <>
                        <span className="dept">{user.department}</span>
                        {user.hostel && (
                          <span className="hostel">
                            {' '}
                            {'('}Hostel {user.hostel.split('_')[1]} {')'}
                          </span>
                        )}
                      </>
                    )}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        )}
        <div className="navbar__yb_logo">
          <img src={yblogo} alt="Yearbook Logo" />
        </div>
        <ul className="navbar__links">
          <li>
            <a href="/">
              <FaHome />
              Home
            </a>
          </li>
          <li>
            <a href="/feed">
              <FaMailBulk />
              Feed
            </a>
          </li>
          <li>
            <a href="/polls">
              <FaPoll />
              Polls
            </a>
          </li>
          <li>
            <a href="/impression">
              <FaImage />
              Snapshots
            </a>
          </li>
          <li>
            <a href="/team">
              <FaUserFriends />
              Team
            </a>
          </li>
          {!user && (
            <>
              <li>
                <a href="/signup">
                  <FaUserPlus />
                  SignUp
                </a>
              </li>
              <li>
                <a href="/login">
                  <FaUser />
                  Login
                </a>
              </li>
            </>
          )}
          {user && profileData.profile && (
            <li onClick={() => setProfileDropdown(!profileDropdown)}>
              <img
                className="ProfilePicNav"
                src={'https://yearbook.sarc-iitb.org' + profileData.profile.profile_image}
                alt="Profile"
              />
              {profileDropdown && (
                <div
                  onMouseEnter={() => setProfileDropdown(true)}
                  onMouseLeave={() => setProfileDropdown(false)}
                  className="dropdownProfile"
                >
                  <ul>
                    <li>
                      <a style={{ padding: '5px', width: '100%' }} href={'/profile'}>
                        Your Profile
                      </a>
                    </li>
                    <hr />
                    <li>
                      <a style={{ padding: '5px', width: '100%' }} href="/EditProfile">
                        Edit Profile
                      </a>
                    </li>
                    <li>
                      <a style={{ padding: '5px', width: '100%' }} href="/logout">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          )}
        </ul>
      </nav >
      <nav className="navbar1">
        <div className="navbar__logo1">
          <a href="/">
            <img style={{ height: '5rem' }} src={sarclogo} alt="SARC Logo" />
          </a>
        </div>
        <div className="navbar-search1" style={{ backgroundColor: showDropdown ? 'white' : '', borderRadius: showDropdown ? '5%' : '' }}>
          <MentionsInput
            placeholder="Search..."
            value={textValue}
            markup="_display(id_)"
            onChange={handleTextChange}
            style={{ height: '100%', width: '100%' }}
            a11ySuggestionsListLabel={'Choose among the following suggestions'}
          >
            <Mention style={{ color: 'gray' }} data={users} />
          </MentionsInput>
        </div>
        {textValue && (
          <div className="usersList">
            {users.map(user => (
              <ul className="mainBox" key={user.id}>
                <li className="mainList">
                  <Link
                    onClick={() => {
                      setTextValue('');
                    }}
                    className="particularUser"
                    to={`/profile/${user.id}`}
                  >
                    {user.profile_image && (
                      <img
                        className="Profilepic"
                        src={'https://yearbook.sarc-iitb.org' + user.profile_image}
                        alt="profile"
                      />
                    )}
                    <span style={{ fontSize: '100%', display: 'flex', alignItems: 'center' }}>{user.display}</span>
                    <span className="dept">{user.department}</span>
                    {user.hostel && (
                      <span className="hostel">
                        {' '}
                        {'('}Hostel {user.hostel.split('_')[1]} {')'}
                      </span>
                    )}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        )
        }
        <div className="navbar__yb_logo1">
          <img src={yblogo} alt="Yearbook Logo" />
        </div>
        <div className="navbar-links1">
          <div className="navbar-hamburger" onClick={handleToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {showDropdown && (
            <div className="navbar-dropdown">
              <ul className="navbar-list">
                <li>
                  <a href="/">
                    <FaHome />
                    Home
                  </a>
                </li>
                <li>
                  <a href="/feed">
                    <FaMailBulk />
                    Feed
                  </a>
                </li>
                <li>
                  <a href="/polls">
                    <FaPoll />
                    Polls
                  </a>
                </li>
                <li>
                  <a href="/impression">
                    <FaImage />
                    Snapshots
                  </a>
                </li>
                <li>
                  <a href="/team">
                    <FaUserFriends />
                    Team
                  </a>
                </li>
                {!user && (
                  <>
                    <li>
                      <a href="/signup">
                        <FaUserPlus />
                        SignUp
                      </a>
                    </li>
                    <li>
                      <a href="/login">
                        <FaUser />
                        Login
                      </a>
                    </li>
                  </>
                )}
                {user && (
                  <>
                    <li>
                      <a onClick={togglePlayPause} className="notif">
                        <FaBell />
                        Notifications
                      </a>
                    </li>
                    <li>
                      <a href="/logout">
                        <FaSignOutAlt />
                        Logout
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </nav >
    </>
  );
}

export default Navbar;