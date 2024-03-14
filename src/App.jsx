import { useEffect, useState } from "react";
import axios from "axios";
import ContactsList from "./components/contactsList";
import NewContactForm from "./components/newContactForm";
import styled from "styled-components";
import "./App.css";

const Main = styled.main`
  height: 600px;
  text-align: center;
  margin-top: 20px;
`;

const H1 = styled.h1`
  color: #fff;
  font-size: 30px;
`;

const AddBtn = styled.button`
  width: 15%;
  height: 30px;
  margin-top: 20px;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 10px;
  background-color: #fff;
  color: #000;
  transition: transform 0.1s ease-in;

  &:active {
    transform: scale(0.9);
  }
`;

function App() {
  const [contactsList, setContactsList] = useState([]);

  const [showFormState, setShowFormState] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setContactsList(res.data))
      .catch((error) => {
        console.error("Error fetching contacts:", error);
      });
  }, []);

  const onAddContact = (newContactObject) => {
    newContactObject['id'] = contactsList.length + 1;
    setContactsList([...contactsList, newContactObject]);
    handleShowForm();
  };

  const onDeleteContact = (contactToDeleteId) => {
    setContactsList(
      contactsList.filter((contact) => contact.id !== contactToDeleteId)
    );
  };

  const handleShowForm = () => {
    setShowFormState(!showFormState);
  };

  return (
    <Main>
      <H1>List of Contacts</H1>
      <ContactsList contactsList={contactsList} onDelete={onDeleteContact} />
      <AddBtn onClick={handleShowForm}>Add new contact</AddBtn>
      {showFormState && (
        <NewContactForm
          onAddContact={onAddContact}
          handleShowForm={handleShowForm}
        />
      )}
    </Main>
  );
}

export default App;
