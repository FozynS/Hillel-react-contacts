import styled from "styled-components";

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


function Chart({contactsList, onDelete}) {

  return (
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
      {contactsList.length > 0 ? (
          contactsList.map((contact) => (
            <TR key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.username}</td>
              <td>{contact.phone}</td>
              <td>
                <DeleteBtn onClick={() => onDelete(contact.id)}>
                  Видалити
                </DeleteBtn>
              </td>
            </TR>
          ))
        ) : (
          <tr>
            <td colSpan="4">Loading...</td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}

export default Chart;