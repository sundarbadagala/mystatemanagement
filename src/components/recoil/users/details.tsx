import { useParams } from "react-router-dom"
import { useRecoilValue } from "recoil";
import { usersSelectorFamily } from '../state/usersState'

export default function UserDetails() {
    const { userId } = useParams()
    const user = useRecoilValue(usersSelectorFamily(userId))
    return (
        <div>
            {
                user &&
                <>
                    <div>Name : {user.name}</div>
                    <div>Email : {user.email}</div>
                    <div>Phone : {user.phone}</div>
                </>
            }
        </div>
    )
}