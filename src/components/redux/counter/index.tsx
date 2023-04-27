import { connect } from 'react-redux'
import { countDecrement, countDecrementNumber, countIncrement, countIncrementNumber, countReset } from '../state/actions/countActions'
import { ICounterProps, IState } from '../interfaces'

function Counter(props: ICounterProps) {
    return (
        <div>
            {props.count}
            <br />
            <button onClick={() => props.countIncrement()}>+</button>
            <button onClick={() => props.countDecrement()}>-</button>
            <button onClick={() => props.countIncrementNumber(5)}>+5</button>
            <button onClick={() => props.countDecrementNumber(5)}>-5</button>
            <button onClick={() => props.countReset()}>reset</button>

        </div>
    )
}

const mapStateToProps = (state: IState) => ({
    count: state.count.count
})
const mapDisaptchToProps = (dispatch: any) => ({
    countIncrement: () => dispatch(countIncrement()),
    countDecrement: () => dispatch(countDecrement()),
    countIncrementNumber: (count: number) => dispatch(countIncrementNumber(count)),
    countDecrementNumber: (count: number) => dispatch(countDecrementNumber(count)),
    countReset: () => dispatch(countReset())
})

export default connect(mapStateToProps, mapDisaptchToProps)(Counter)