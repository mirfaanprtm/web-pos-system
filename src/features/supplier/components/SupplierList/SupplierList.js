import {Component} from "react";
import './SupplierList.css';
import {withUiState} from "../../../../shared/hoc/WithUiState";
import { withDep } from "../../../../shared/hoc/WithDep";
class SupplierList extends Component {
    render() {
        return (
            <div className='menu-list-table'>
                <h2>Supplier List</h2>
                <button onClick={() => {
                    this.props.onShowingForm(true)
                }}>Add supplier
                </button>
                <table width='100%'>
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
                                <button onClick={() => this.props.onDeleteSupplier(supplier.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                    }
                    </tbody>
                </table>
            </div>
        )

    }
}

export default withDep(withUiState(SupplierList), ['SupplierService']);