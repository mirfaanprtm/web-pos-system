import {suppliers} from '../data'
const SupplierService = () => {

    const getSupplier = async () => {
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(suppliers);
            },2000)
        })
        
    }
    const addSupplier = async (newSupplier) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                suppliers.push({...newSupplier});
                resolve(newSupplier)
            }, 1000)
        })
    }
    const deleteSupplier = async (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                const index = suppliers.findIndex(supplier => supplier.id === id);
                 suppliers.splice(index, 1);   
                 resolve(index)
            }, 1000)
        })
    }
    return {
        getSupplier, addSupplier, deleteSupplier
    }
 }

export default SupplierService;