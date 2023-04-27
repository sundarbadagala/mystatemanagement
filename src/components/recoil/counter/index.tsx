import SetCounter from './counter.set'
import GetCounter from './counter.get'
import SetGetCounter from './counter.set.get'

export default function Home() {
    return (
        <div>
            <SetGetCounter />
            <GetCounter />
            <SetCounter />
        </div>
    )
}