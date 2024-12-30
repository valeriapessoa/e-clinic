import Link from 'next/link';
import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { MdOutlineLibraryBooks, MdCalendarMonth } from "react-icons/md";
import { SlLogout } from "react-icons/sl";
import { signOut, useSession } from "next-auth/react";
import { useState } from 'react';

const UserMenu = () => {
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="user-menu">
      {session && (
        <>
          {session.user.image ? (
            <img
              src={session.user.image}
              alt="Usuário"
              className="user-image"
            />
          ) : (
            <FaUserCircle className="user-icon" />
          )}
          <FaCaretDown
            className="caret-icon"
            onClick={toggleDropdown}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          />
          <div className={`user-menu-dropdown ${dropdownOpen ? 'show' : ''}`}>
            <div className="flex flex-column border-bottom py-2 mb-2">
              <div className="ps-3 user-info">
                {session.user.name && (
                  <>
                    <FaUserCircle className="user-name-icon" />
                    <span className="user-name text-capitalize">{session.user.name}</span>
                  </>
                )}
              </div>
              {session.user.email && (
                <div className="ps-3 user-email text-secondary fw-light">{session.user.email}</div>
              )}
            </div>
            <Link href="/consultas/minhas-consultas"><MdOutlineLibraryBooks className="me-1" /> Minhas Consultas</Link>
            <Link href="/consultas/form-agendar-consulta"><MdCalendarMonth className="me-1" /> Agendar Consulta</Link>
            <button
              onClick={() => signOut()}
              className='logout'
              aria-label="Sair"
            >
              <SlLogout className='me-1'/> Sair
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserMenu;
