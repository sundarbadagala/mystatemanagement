import { useRecoilValue } from "recoil"
import { useNavigate } from "react-router-dom"
import { usersSelector } from "../state/usersState"

export default function Users() {
    const navigate = useNavigate()
    const users = useRecoilValue(usersSelector)
    const handleNavigate = (id: any) => {
        navigate(`/users/${id}`)
    }
    return (
        <div>
            {
                users && users.length > 0 &&
                users.map((user: any) =>
                    <div
                        key={user.id}
                        onClick={() => handleNavigate(user.id)}
                        style={{cursor:'pointer'}}
                    >
                        {user.name}
                    </div>
                )
            }
        </div>
    )
}