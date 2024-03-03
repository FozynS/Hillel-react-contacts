import { useState } from "react";
import styled from "styled-components";
import Chart from "./components/chart";
import AddForm from "./components/addForm";
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

  const [contactsState, setContactsState] = useState([]);
  const [showFormState, setShowFormState] = useState(false);
  const [newContactState, setNewContactState] = useState({
    name: "",
    username: "",
    phone: "",
    id: "",
  });

  const handleShowForm = () => {
    setShowFormState(!showFormState);
  };

  return (
    <Main>
      <H1>List of Contacts</H1>
      <Chart contactsState={contactsState} setContactsState={setContactsState}/>
      <AddBtn onClick={handleShowForm}>Add new contact</AddBtn>
      {showFormState && <AddForm 
          contactsState={contactsState}
          setContactsState={setContactsState}
          newContactState={newContactState} 
          setNewContactState={setNewContactState}
          showFormState={showFormState}
          setShowFormState={setShowFormState}
        />
      }
    </Main>
  );
}

export default App;
