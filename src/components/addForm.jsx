import styled from "styled-components";

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

function AddForm ({contactsState, setContactsState, newContactState, setNewContactState, showFormState, setShowFormState}) {

  const handleShowForm = () => {
    setShowFormState(!showFormState);
  };

  const saveNewContact = () => {
    setContactsState([...contactsState, newContactState]);
    setNewContactState({ name: "", username: "", phone: "", id: contactsState.length + 1});
    handleShowForm();
  };

  return (
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
  )
}

export default AddForm;