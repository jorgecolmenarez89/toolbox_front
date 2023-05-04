import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFiles } from '../redux/slices/filesSlice';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

const FilesPage = () => {

	const files = useSelector((state) => state.files)
  const dispatch = useDispatch()
	const [filter, setFilter] = useState('') 

	useEffect( () => {
		dispatch(fetchFiles())
	}, [])

	const handleFilter = () => {
		dispatch(fetchFiles(filter))
	}

  return (
		<Container>
			<div className="filter mt-5">
				<Row>
					<Col xs={8} md={4}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Control type="email"
								data-testid="filter" 
								placeholder="Filtar por nombre del archivo"
								value={filter}
								onChange={(e) => setFilter(e.target.value)} 
							/>
						</Form.Group>
					</Col>
					<Col xs={4} md={3}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Button variant="dark" 
								type="button" onClick={handleFilter}
								data-testid="btn-search"
								id="btn-search"
							>
								Buscar
							</Button>
						</Form.Group>
					</Col>
				</Row>
			</div>
			<Table bordered hover responsive="md" data-testid="table-files" >
				<thead className="thead-dark">
					<tr>
						<th>File Name</th>
						<th>Text</th>
						<th>Number</th>
						<th>Hex</th>
					</tr>
				</thead>
				<tbody>
					{files.list.map((file, index) => (
						<tr key={'file-'+index}>
							<td>{file.file}</td>
							<td>{file.text}</td>
							<td>{file.number}</td>
							<td>{file.hex}</td>
						</tr>
					))}
				</tbody>
			</Table>
			{files.loading &&
				<div className="loader">
					<Spinner animation="border" role="status">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				</div>
			}
		</Container>
	) 
}
  
  export default FilesPage