import {Component} from "react";
import { Button, Table, Form} from "react-bootstrap";
import './SupplierList.css';
import {withUiState} from "../../../../shared/hoc/WithUiState";
import { withDep } from "../../../../shared/hoc/WithDep";
class SupplierList extends Component {

    
    render() {
        return (
            <div className='menu-list-table'>
                <h2>Supplier List</h2>
                <Button onClick={() => {
                    this.props.onShowingForm(true)
                }}>Add supplier
                </Button>
                <Table width='100%' striped bordered hover>
                    <thead>
                    <tr className='menu-list-table-header'>
                        <th className='menu-list-table-header-title'>Supplier</th>
                        <th className='menu-list-table-header-title'>Address</th>
                        <th className='menu-list-table-header-title'>Phone</th>

                        <th></th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.props.data.map((supplier) => (
                        <tr key={supplier.id}>
                            <td>{supplier.supplierName}</td>
                            <td>{supplier.address}</td>
                            <td>{supplier.phone}</td>

                            <td>
                                <Button variant="warning" style={{marginRight: 5}}>Edit</Button>
                                <Button variant="danger" onClick={() => this.props.onDeleteSupplier(supplier.id)}>Delete</Button>
                                
                            </td>
                        </tr>
                    ))
                    }
                    </tbody>
                </Table>
            </div>
        )

    }
}

export default withDep(withUiState(SupplierList), ['SupplierService']);