import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Main = styled.main`
  height: 600px;
  text-align: center;
  margin-top: 20px;
`;

const H1 = styled.h1`
  color: #fff;
  font-size: 30px;
`;
const Table = styled.table`
  width: 80%;
  margin: auto;
  height: 80%;
  // border: 1px solid #fff;
  // border-radius: 10px;
  color: #fff;
  border-collapse: collapse;
`;

const TR = styled.tr`
  border: 1px solid #fff;
`;

const DeleteBtn = styled.button`
  width: 60%;
  height: 30px;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 10px;
  background-color: #de2a2a;
  color: #fff;
  transition: transform 0.1s ease-in;

  &:active {
    transform: scale(0.9);
  }
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

const FormDiv = styled.div`
  display: flex;
  color: #fff;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BtnsDiv = styled.div`
  display: flex;
  width: 30%;
  gap: 10px;
`;

const Save = styled.button`
  width: 50%;
  height: 30px;
  margin-top: 20px;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 10px;
  background-color: green;
  color: #fff;
  transition: transform 0.1s ease-in;

  &:active {
    transform: scale(0.9);
  }
`;

const Cancel = styled.button`
  width: 50%;
  height: 30px;
  margin-top: 20px;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 10px;
  background-color: #f7f7f7;
  color: #000;
  transition: transform 0.1s ease-in;

  &:active {
    transform: scale(0.9);
  }
`;

const Input = styled.input`
  width: 20%;
  height: 20px;
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

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setContactsState(res.data))
      .catch((error) => {
        console.error("Error fetching contacts:", error);
      });
  }, []);

  const onDeleteContact = (id) => {
    setContactsState(contactsState.filter((contact) => contact.id !== id));
  };

  const handleShowForm = () => {
    setShowFormState(!showFormState);
  };

  const saveNewContact = () => {
    setContactsState([...contactsState, newContactState]);
    setNewContactState({ name: "", username: "", phone: "", id: contactsState.length + 1});
    handleShowForm();
  };


  return (
    <Main>
      <H1>List of Contacts</H1>
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contactsState.map((contact) => (
            <TR key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.username}</td>
              <td>{contact.phone}</td>
              <td>
                <DeleteBtn onClick={() => onDeleteContact(contact.id)}>
                  Видалити
                </DeleteBtn>
              </td>
            </TR>
          ))}
        </tbody>
      </Table>
      <AddBtn onClick={handleShowForm}>Add new contact</AddBtn>
      {showFormState && (
        <FormDiv>
          <h2 style={{ color: "#fff" }}>Form for add new contact</h2>
          <Input 
            type="text" 
            placeholder="Name" 
            value={newContactState.name}
            onChange={(e) => 
              setNewContactState({...newContactState, name: e.target.value})
            }
          />

          <Input 
            type="text" 
            placeholder="Last name" 
            value={newContactState.username}
            onChange={(e) => 
              setNewContactState({...newContactState, username: e.target.value})
            }
          />

          <Input 
            type="text" 
            placeholder="Phone number" 
            value={newContactState.phone}
            onChange={(e) => 
              setNewContactState({...newContactState, phone: e.target.value})
            }
          />

          <BtnsDiv>
            <Cancel onClick={handleShowForm}>Cancel</Cancel>
            <Save onClick={saveNewContact}>Save</Save>
          </BtnsDiv>
        </FormDiv>
      )}
    </Main>
  );
}

export default App;
