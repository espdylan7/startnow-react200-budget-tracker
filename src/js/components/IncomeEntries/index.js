import { connect } from 'react-redux';
import IncomeEntries from './IncomeEntries'

function mapStoreToProps(store) {
    return {
        description: store.income.description,
        amount: store.income.amount,
        lineItems: store.income.lineItems
    }
}
//This might look odd but, connect returns a function,
//Thaat is then called with the component itself
export default connect(mapStoreToProps)(IncomeEntries);