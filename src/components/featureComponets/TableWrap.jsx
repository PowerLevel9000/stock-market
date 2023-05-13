import styled from 'styled-components';

const TableWrap = styled.table`
  width: 90% !important;
  text-align: left;
  border: 1px solid white;
  margin: 1rem auto;
  border-radius: .5rem;
  overflow: auto !important;

  th,
  td {
    vertical-align: top;
    padding: 0.2rem 0.5rem;
    border-bottom: 1px solid white;
  }

  th {
    color: #0c0caf;
    font-size: 1.3rem;
  }

  th:nth-of-type(2),
  tr td:nth-of-type(2) {
    border-left: 1px solid white;
  }

  tr:nth-of-type(even) {
    background-color: var(--darkSub);
  }

  tr:hover {
    background-color: white;
    color: black;
  }
`;

export default TableWrap;
