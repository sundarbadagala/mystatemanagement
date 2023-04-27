import React, { useState } from 'react'
import { connect, DispatchProp } from 'react-redux'
import { IState } from '../interfaces'
import { setPrimary } from '../state/actions/converterActions'

function Converter(props: any) {
    const [value, setValue] = useState<number | string>(0)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        setPrimary(Number(e.target.value))
    }
    console.log('conv', props.primary);

    return (
        <div>
            <input type='number' value={value} onChange={handleChange} />
            {Number(value) * 10}
        </div>
    )
}

const mapStateToProps = (state: IState) => ({
    primary: state.converter.primary
})

const mapDispatchToProps = (dispatch: any) => ({
    setPrimary: (value: any) => dispatch(setPrimary(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Converter)