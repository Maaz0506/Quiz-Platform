import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function History() {
  return (
    <Container>
        <Table striped>
        <thead>
            <tr>
            <th>#</th>
            <th>Topic</th>
            <th>Date</th>
            <th>Time</th>
            <th>Score</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Cybersecurity</td>
            <td>2-3-2023</td>
            <td>1:33 AM</td>
            <td>10</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            
        </tbody>
        </Table>
    </Container>
  );
}

export default History;