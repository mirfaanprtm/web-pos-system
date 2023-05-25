import { Component } from "react";
import '../../../../App.css';
import './SupplierForm.css';
import SupplierList from "../SupplierList/SupplierList";
import { withUiState } from "../../../../shared/hoc/WithUiState";
import SupplierService from "../../../../services/SupplierService";
import { withDep } from "../../../../shared/hoc/WithDep";


class SupplierForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supplier: {
                id: '',
                supplierName: '',
                address: '',
                phone: ''
            }, error:{
                errorid: null,
                errorsupplierName: null,
                erroraddress: null,
                errorphone: null,
            },
            isValidForm: false,
            isShowingForm: false,
            currentSuppliers : []
        }
        this.service = SupplierService();
    }
    handleShowForm = (isShowing) => {
        this.setState({
            isShowingForm: isShowing
        })
    }
    onGetSupplier = async () => {
        this.props.onShowLoading(true);
        try {
            const response = await this.service.getSupplier();
            this.props.onShowLoading(false);
            this.setState({
                currentSuppliers: [...response]
            })
        } catch (e) {
            this.props.onShowError(e.message);
        }
    }
    componentDidMount() {
        this.onGetSupplier();
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('supplier form update')
    }
    handleValidation = (key, value) => {
        let isValid;
        if (value === '') {
            this.setState({
                error: {...this.state.error, [`error${key}`]: 'field is required'}
            })
            isValid = false
        } else {
            this.setState({
                error: {...this.state.error, [`error${key}`]: ''}
            })
            isValid = true
        }
        this.handleFormValidation()
        return isValid
    }
    handleFormValidation = () => {
        this.setState((prevState) => {
            if (prevState.error.errorid === '' && prevState.error.errorsupplierName === '' && prevState.error.erroraddress === '' && prevState.error.errorphone === '') {
                return {isValidForm: true}
            } else {
                return {isValidForm: false}
            }
        })
    }
    handleInputChange = (e) => {
        const key = e.target.name;
        let val = e.target.value;
        console.log(key, val)

        this.setState({
            supplier: {
                ...this.state.supplier, [key]: val
            }
        })
        this.handleValidation(key, val)
    }
    handleAddSupplier = async () => {
        this.props.onShowLoading(true);
        try {
            await this.service.addSupplier(this.state.supplier);
            this.clearForm();
            this.props.onShowLoading(false);
            await this.onGetSupplier();
        } catch (e) {
            this.props.onShowError(false);
        }
    }

    handleDeleteSupplier = async (id) => {
        const response = window.confirm('Are you sure want to delete ?');
        if (response) {
            try {
                await this.service.deleteSupplier(id);
                this.props.onShowLoading(false);
                await this.onGetSupplier()
            } catch (e) {
                this.props.onShowError(false);
            }
        }
    }
    clearForm = () => {
        this.setState({
            supplier: {
                id: '',
                supplierName: '',
                phone: '',
                address: ''
            }, error: {
                errorid: null,
                errorsupplierName: null,
                errorphone: null,
                erroraddress: null
            },
            isValidForm: false,
            isShowingForm: false
        })
    }

    render() {
        const {supplier: {id, supplierName, address, phone}, error: {errorid, errorsupplierName, errorphone, erroraddress}, isValidForm} = this.state
        return (
            <>
                <SupplierList data={this.state.currentSuppliers} onDeleteSupplier={this.handleDeleteSupplier}
                        onShowingForm={this.handleShowForm}/>
                {this.state.isShowingForm &&
                    <div className='menu-form-container'>
                        <div className='menu-form-input-container'>
                            <div className='menu-form-header'>
                                <h2>Supplier Form</h2>
                                <button onClick={() => this.handleShowForm(false)}>X</button>
                            </div>
                            <label>Id</label>
                            <input className='menu-form-input' name='id' type='text' value={id}
                                onChange={this.handleInputChange}/>
                            {errorid && <div className='form-input-error'><small>{errorid}</small></div>}
                            <br/>
                            <label>Supplier Name</label>
                            <input className='menu-form-input' name='supplierName' type='text' value={supplierName}
                                onChange={this.handleInputChange}/>
                            {errorsupplierName &&
                                <div className='form-input-error'><small>{errorsupplierName}</small></div>}
                            <br/>
                            <label>phone</label>
                            <input className='menu-form-input' name='phone' type='text' value={phone}
                                onChange={this.handleInputChange}/>
                            {errorphone && <div className='form-input-error'><small>{errorphone}</small></div>}
                            <br/>
                            <label>address</label>
                            <input className='menu-form-input' name='address' type='text' value={address}
                                onChange={this.handleInputChange}/>
                            {errorphone && <div className='form-input-error'><small>{erroraddress}</small></div>}
                            <br/>
                            <button disabled={!isValidForm} onClick={this.handleAddSupplier}>Add</button>
                        </div>
                    </div>
                }
        </>

        )
    }
}


export default withDep(withUiState(SupplierForm),['SupplierService']);

