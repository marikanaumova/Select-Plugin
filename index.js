import {Select} from './select/select'
import './select/style.scss'


const select = new Select('#select',  {
    placeholder: 'Выберите элемент',
    // selectedId: '4',
    data: [
        {id: '1', value: 'Параметр 1'},
        {id: '2', value: 'Параметр 2'},
        {id: '3', value: 'Параметр 3'},
        {id: '4', value: 'Параметр 4'},
        {id: '5', value: 'Параметр 5'},
        {id: '6', value: 'Параметр 6'}
    ],
    onSelect(item) {
        console.log('Selected Item', item)
    }
})
